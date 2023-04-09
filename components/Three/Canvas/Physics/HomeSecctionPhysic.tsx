import React from "react";
import { useBox } from "@react-three/cannon";

export default function HomeSecctionPhysic() {
  const [ref] = useBox<any>(() => ({
    mass: 500,
    args: [10, 10, 10],
    type: "Static",
    position: [10, 5, 0],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[10, 10, 10]} />
      {/* <meshBasicMaterial color={"#ff00ff"} /> */}
    </mesh>
  );
}
