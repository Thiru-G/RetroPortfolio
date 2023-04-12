import React from "react";
import { useBox } from "@react-three/cannon";

export default function PlaneSecctionPhysics() {
  const [ref] = useBox<any>(() => ({
    type: "Static",
    position: [40.7552, -0.56, 1.45813],
    args: [113, 1, 34],
  }));

  return (
    <mesh ref={ref} position={[0, 0, 0]} name='floor'>
      <boxGeometry args={[113, 1, 34]} />
      <meshBasicMaterial
        color={"#ff0000"}
        opacity={0}
        transparent
      />
    </mesh>
  );
}
