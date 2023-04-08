import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Camera from "../Camera/Camera";

/**
 *
 * @param foward boolean
 * @param backward boolean
 * @param left boolean
 * @param right boolean
 * @returns the required angle to align the cameras'view with the model's view
 */
export const GetDirecctionOffset = (
  foward: boolean,
  backward: boolean,
  left: boolean,
  right: boolean
): number => {
  let directionOffset = 0;

  if (foward) {
    directionOffset = Math.PI;
    if (left) {
      // w + a
      directionOffset = (-3 * Math.PI) / 4;
    } else if (right) {
      // w + d
      directionOffset = (3 * Math.PI) / 4;
    }
  } else if (backward) {
    directionOffset = 0;
    if (left) {
      // s + a
      directionOffset = -Math.PI / 4;
    }
    if (right) {
      // s + d
      directionOffset = Math.PI / 4;
    }
  } else if (left) {
    directionOffset = -Math.PI / 2; // d
  } else if (right) {
    directionOffset = Math.PI / 2; // a
  }

  return directionOffset;
};

/**
 * Updates the camera and orbit controls target
 * @param moveX number
 * @param moveZ number
 */
export const UpdateCameraTarget = (
  moveX: number,
  moveZ: number,
  camera: THREE.Camera,
  scene: THREE.Group,
  controlsRef: any,
  lightRef: any
) => {
  // move camera
  camera.position.x -= moveX;
  camera.position.z -= moveZ;

  let CAMERA_TARGET = new THREE.Vector3();

  // update the camera target
  CAMERA_TARGET.x = scene.position.x;
  CAMERA_TARGET.y = scene.position.y + 2;
  CAMERA_TARGET.z = scene.position.z;

  if (controlsRef.current) {
    controlsRef.current.target = CAMERA_TARGET;
  }
  if (lightRef.current) {
    console.log(lightRef.current);
    lightRef.current.position.set(
      CAMERA_TARGET.x,
      12,
      CAMERA_TARGET.z
    );
    lightRef.current.rotation.y = Math.PI * -0.5;
  }
};
