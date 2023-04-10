import React from "react";
import {
  CuboidCollider,
  CylinderCollider,
} from "../Utils/PhyshicsColliders";
import { useControls } from "leva";

export default function HomeStatics() {
  React.useEffect(() => {}, []);

  return (
    <>
      <CuboidCollider
        id='gabinete'
        args={[15, 2.91, 11.7]}
        scale={[1, 1, 1]}
        position={[0.064, 1.496, -7.89]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='teclado'
        args={[15.2, 1.4563, 5.4844]}
        scale={[1, 1, 1]}
        position={[0.180357, 0.768603, 4.88279]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CylinderCollider
        id='tarro'
        args={[3.75983 / 2, 3.75983 / 2, 1.21148]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Static'
        position={[10.6791, 0.98023, -4.51703]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry
            args={[3.75983 / 2, 3.75983 / 2, 1.21148]}
          />
          <meshBasicMaterial opacity={0} transparent />
        </mesh>
      </CylinderCollider>
    </>
  );
}
