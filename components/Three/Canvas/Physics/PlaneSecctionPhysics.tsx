import React from "react";
import { usePlane } from "@react-three/cannon";

export default function PlaneSecctionPhysics() {
  const [ref] = usePlane<any>(() => ({
    type: "Static",
    rotation: [Math.PI * -0.5, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[30, 30]} />
      {/* <meshBasicMaterial color={"#ff0000"} /> */}
    </mesh>
  );
}
