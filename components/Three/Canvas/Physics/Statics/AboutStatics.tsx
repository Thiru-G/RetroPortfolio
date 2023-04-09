import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function AboutStatics() {
  return (
    <>
      <CuboidCollider
        id='projects'
        args={[27.5217, 2, 7.19634]}
        scale={[1, 1, 1]}
        position={[27.1952, 1, -6.85977]}
        mass={0}
        type='Static'
      />
      <CuboidCollider
        id='atari'
        args={[5.93891, 2, 5.06064]}
        scale={[1, 1, 1]}
        position={[29.9494, 1, 6.30895]}
        mass={0}
        type='Static'
      />
    </>
  );
}
