import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function ContactStatic() {
  return (
    <>
      <CuboidCollider
        id='contact_secction'
        args={[12.737, 1, 14.7825]}
        scale={[1, 1, 1]}
        position={[87.198, 1, -4.18764]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
