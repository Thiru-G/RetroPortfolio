import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import {
  useAnimations,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { useInput } from "./useInput";
import { useFrame, useThree } from "@react-three/fiber";
import {
  MoveModel,
  RotateTheModel,
  UpdateCameraTarget,
} from "./GetDirecctionOfffset";
import { useSphere } from "@react-three/cannon";

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
  const camera = useThree((state) => state.camera);

  // Lights
  const spotLightRef = useRef<any>();

  // Animations
  const currentAnimation = useRef("");

  // Physcis
  const [spherePlayer, spherePlayerAPI] = useSphere<any>(
    () => ({
      args: [1],
      mass: 1,
      position: [0, 1, 0],
    })
  );

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

    // Movement for physics
    function handleKeyUp() {
      spherePlayerAPI.velocity.set(0, 0, 0);
      spherePlayerAPI.angularDamping.set(0);
      spherePlayerAPI.angularVelocity.set(0, 0, 0);
      spherePlayerAPI.angularFactor.set(0, 0, 0);
      spherePlayerAPI.linearDamping.set(0);
      spherePlayerAPI.linearFactor.set(0, 0, 0);
    }

    document.addEventListener("keyup", handleKeyUp);

    // For tracker the movement of the player
    spherePlayerAPI.position.subscribe((v) => {
      model.scene.position.x = v[0];
      model.scene.position.z = v[2];

      controlsRef.current.target.x = v[0];
      controlsRef.current.target.y = 2;
      controlsRef.current.target.z = v[2];

      camera.position.x = v[0];
      camera.position.z = v[2] + 20;

      spotLightRef.current.position.x = v[0];
      spotLightRef.current.position.z = v[2];
    });

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [foward, backward, left, right, shift, jump]);

  useFrame((state, delta) => {
    if (
      currentAnimation.current === "Running" ||
      currentAnimation.current === "Walking"
    ) {
      // Move the sphere
      spherePlayerAPI.linearFactor.set(1, 0, 1);
      spherePlayerAPI.velocity.set(0, 0, 0);

      const FORCE =
        currentAnimation.current === "Running" ? 120 : 50;

      if (foward) {
        spherePlayerAPI.applyForce(
          [0, 0, -FORCE * 2],
          [0, 0, 0]
        );
        if (left) {
          spherePlayerAPI.applyForce(
            [-FORCE, 0, -FORCE / 4],
            [0, 0, 0]
          );
        }
        if (right) {
          spherePlayerAPI.applyForce(
            [FORCE, 0, -FORCE / 4],
            [0, 0, 0]
          );
        }
      } else if (backward) {
        spherePlayerAPI.applyForce(
          [0, 0, FORCE * 2],
          [0, 0, 0]
        );

        if (backward && left) {
          spherePlayerAPI.applyForce(
            [-FORCE, 0, FORCE / 4],
            [0, 0, 0]
          );
        }
        if (backward && right) {
          spherePlayerAPI.applyForce(
            [FORCE, 0, FORCE / 4],
            [0, 0, 0]
          );
        }
      } else if (left) {
        spherePlayerAPI.applyForce(
          [-FORCE * 2, 0, 0],
          [0, 0, 0]
        );
      } else if (right) {
        spherePlayerAPI.applyForce(
          [FORCE * 2, 0, 0],
          [0, 0, 0]
        );
      }

      RotateTheModel(
        camera,
        model.scene,
        foward,
        backward,
        left,
        right
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
      <mesh position={[0, 2, 0]} ref={spherePlayer}>
        <sphereGeometry args={[1, 16, 15]} />
        <meshBasicMaterial
          color={0xff00ff}
          transparent
          opacity={0}
        />
      </mesh>

      <primitive object={model.scene} dispose={null} />
    </>
  );
}

useGLTF.preload("./models/RobotExpressive.glb");
