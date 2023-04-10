import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function GeneralStatics() {
  return (
    <>
      <CuboidCollider
        id='wall_side'
        args={[72.7039, 2, 7.6115]}
        scale={[1, 1, 1]}
        position={[44.1821, 1, -6.85866]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='left_side'
        args={[2, 2, 20]}
        scale={[1, 1, 1]}
        position={[-6.02176, 1, 7.70374]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='front-side'
        args={[113, 2, 2]}
        scale={[1, 1, 1]}
        position={[41.1518, 1, 17.5439]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='right'
        args={[2, 2, 20]}
        scale={[1, 1, 1]}
        position={[94.5, 1, 7.70374]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
