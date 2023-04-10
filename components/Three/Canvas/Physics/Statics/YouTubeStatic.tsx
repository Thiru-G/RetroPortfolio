import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function YouTubeStatic() {
  return (
    <>
      <CuboidCollider
        id='moneky'
        args={[6.54174, 0.814533, 4.71753]}
        scale={[1, 1, 1]}
        position={[68.0297, 0.5, 9.89308]}
        mass={0}
        type='Static'
        rotation={[0, 36.3457, 0]}
      />
      <CuboidCollider
        id='teapot'
        args={[6.54174, 0.814533, 5.19125]}
        scale={[1, 1, 1]}
        position={[72.3797, 0.5, 6.54786]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='button'
        args={[2.80715, 0.814533, 3.1983]}
        scale={[1, 1, 1]}
        position={[73.0453, 0.5, 10.449]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
