import React from "react";
import { PerspectiveCamera, useHelper } from "@react-three/drei";

export default function Camera() {
  const camera = React.useRef<any>();

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault={true}
      position={[12, 12, 20]}
      fov={15}
      zoom={0.45}
      // far={50}
      // near={1}
    />
  );
}
