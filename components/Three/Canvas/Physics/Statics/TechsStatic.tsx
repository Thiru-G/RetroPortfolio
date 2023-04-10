import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function TechsStatics() {
  return (
    <>
      <CuboidCollider
        id='techs_secction'
        args={[3.97836, 1, 6.55238]}
        scale={[1, 1, 1]}
        position={[55.1829, 0.5, 7.50619]}
        mass={0}
        type='Static'
        rotation={[0, (23.3827 * Math.PI) / 180, 0]}
      />
    </>
  );
}
