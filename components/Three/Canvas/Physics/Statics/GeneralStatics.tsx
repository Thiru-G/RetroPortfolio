import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function GeneralStatics() {
  return (
    <>
      <CuboidCollider
        id='wall_side'
        args={[113, 2, 2]}
        scale={[1, 1, 1]}
        position={[41.1518, 1, -6.85866]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='left_side'
        args={[2, 2, 36]}
        scale={[1, 1, 1]}
        position={[-17.02176, 1, 1.70374]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='front-side'
        args={[113, 2, 2]}
        scale={[1, 1, 1]}
        position={[41.1518, 1, 19.5439]}
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
