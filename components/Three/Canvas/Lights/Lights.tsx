import {
  EnvironmentCube,
  useHelper,
} from "@react-three/drei";
import React from "react";
import { sRGBEncoding } from "three";
import * as THREE from "three";

export default function Lights() {
  const lightDirecRef = React.useRef<any>();
  const shadowCameraRef = React.useRef<any>();
  useHelper(lightDirecRef, THREE.SpotLightHelper);
  useHelper(shadowCameraRef, THREE.CameraHelper);

  return (
    <>
      <ambientLight intensity={0.2} color={0xffffff} />
      <EnvironmentCube
        files={[
          "./env/px.jpg",
          "./env/nx.jpg",
          "./env/py.jpg",
          "./env/ny.jpg",
          "./env/pz.jpg",
          "./env/nz.jpg",
        ]}
        encoding={sRGBEncoding}
      />
      <directionalLight
        ref={lightDirecRef}
        intensity={2}
        color={"#5E6EE3"}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.009}
        shadow-camera-far={155}
        shadow-camera-near={185}
        position={[90 / 2, 180, 20]}
        target-position={[90 / 2, 0, 0]}>
        <perspectiveCamera
          ref={shadowCameraRef}
          attach={"shadow-camera"}></perspectiveCamera>
      </directionalLight>

      {/* <spotLight
        ref={lightDirecRef}
        position={[10, 10, 0]}
        rotation-y={Math.PI * -0.5}
        intensity={10}
        target-position={[10, 0, 0]}>
        <perspectiveCamera
          ref={shadowCameraRef}
          attach={"shadow-camera"}></perspectiveCamera>
      </spotLight> */}
    </>
  );
}
