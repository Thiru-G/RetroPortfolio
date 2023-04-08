import React, { useEffect, useRef } from "react";
import {
  useAnimations,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { useInput } from "./useInput";
import { useFrame, useThree } from "@react-three/fiber";
import {
  GetDirecctionOffset,
  UpdateCameraTarget,
} from "./GetDirecctionOfffset";

// Constants for movement
let WALK_DIRECCTION = new THREE.Vector3();
let ROTATE_ANGLE = new THREE.Vector3(0, 1, 0);
let ROTATE_QUATERNION = new THREE.Quaternion();

export default function Character() {
  // Model data
  const model = useGLTF("./models/RobotExpressive.glb");
  model.scene.scale.set(0.5, 0.5, 0.5);
  const { actions } = useAnimations(
    model.animations,
    model.scene
  );

  // Model movement
  const { foward, backward, left, right, shift, jump } =
    useInput();
  const controlsRef = useRef<
    typeof OrbitControls | undefined
  >() as any;
  const spotLightRef = useRef<any>();
  const camera = useThree((state) => state.camera);

  // Animations
  const currentAnimation = useRef("");

  useEffect(() => {
    let action = "";
    if (foward || backward || left || right) {
      if (shift) {
        action = "Running";
      } else {
        action = "Walking";
      }
    } else {
      action = "Idle";
    }

    if (currentAnimation.current != action) {
      const toPlay = actions[action];
      const current = actions[currentAnimation.current];
      current?.fadeOut(0.2);

      toPlay?.reset().fadeIn(0.2).play();
      currentAnimation.current = action;
    }
    // actions?.Idle?.play();
  }, [foward, backward, left, right, shift, jump]);

  useFrame((state, delta) => {
    if (
      currentAnimation.current === "Running" ||
      currentAnimation.current === "Walking"
    ) {
      /* 
            Calculate the angle between the camera view and
            the model view, the objetive of this code, is get the 
            angle to align the model's view and the camera's view
        */
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      // offset model
      let offsetAngle = GetDirecctionOffset(
        foward,
        backward,
        left,
        right
      );

      //rotate model
      ROTATE_QUATERNION.setFromAxisAngle(
        ROTATE_ANGLE,
        angleYCameraDirection + offsetAngle
      );
      model.scene.quaternion.rotateTowards(
        ROTATE_QUATERNION,
        0.2
      );

      // calculate direcction
      camera.getWorldDirection(WALK_DIRECCTION);
      WALK_DIRECCTION.y = 0;
      WALK_DIRECCTION.normalize();
      WALK_DIRECCTION.applyAxisAngle(
        ROTATE_ANGLE,
        offsetAngle
      );

      // run/walk velocity
      const VELOCITY =
        currentAnimation.current === "Running" ? 12 : 5;

      // move model & camera
      const moveX =
        (WALK_DIRECCTION.x * VELOCITY * delta) / 2;
      const moveZ =
        (WALK_DIRECCTION.z * VELOCITY * delta) / 2;
      model.scene.position.x -= moveX;
      model.scene.position.z -= moveZ;

      UpdateCameraTarget(
        moveX,
        moveZ,
        camera,
        model.scene,
        controlsRef,
        spotLightRef
      );
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        // enableRotate={false}
        // enablePan={false}
        // maxZoom={5}
        // minDistance={15}
        // maxDistance={40}
      />
      <spotLight
        ref={spotLightRef}
        color={"#E3C65E"}
        position={[0, 12, 0]}
        angle={(60 * Math.PI) / 180}
        target={model.scene}
        penumbra={0.8}
        power={7}
      />
      <primitive object={model.scene} dispose={null} />
    </>
  );
}

useGLTF.preload("./models/RobotExpressive.glb");
