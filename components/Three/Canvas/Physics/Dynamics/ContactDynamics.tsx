import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { CuboidColliderDynamic } from "../Utils/PhyshicsColliders";

type GLTFResult = GLTF & {
  nodes: {
    Cube020: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
  };
  materials: {
    cream_dark_blue: THREE.MeshStandardMaterial;
    cream_yellow_light: THREE.MeshStandardMaterial;
    cream_dark: THREE.MeshStandardMaterial;
  };
};

export function ContactDynamics(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/ContactSecctionDynamics.glb"
  ) as GLTFResult;

  const handlePointerOver = (
    event: ThreeEvent<PointerEvent>
  ) => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (
    event: ThreeEvent<PointerEvent>
  ) => {
    document.body.style.cursor = "default";
  };

  return (
    <group {...props} dispose={null}>
      <CuboidColliderDynamic
        id='linkedin'
        args={[1, 1, 1]}
        scale={[1, 1, 1]}
        position={[85.23, 0.43, 4.79445]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='LinkedIn'
          scale={0.47}
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={(e) => handlePointerOut(e)}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/juanglezf/",
              "_blank"
            )
          }>
          <mesh
            name='Cube020'
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.cream_dark_blue}
          />
          <mesh
            name='Cube020_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.cream_yellow_light}
          />
        </group>
      </CuboidColliderDynamic>

      <CuboidColliderDynamic
        id='linkedin'
        args={[1, 1, 1]}
        scale={[1, 1, 1]}
        position={[86.35, 0.39, 4.79445]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='GitHub'
          scale={0.47}
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={(e) => handlePointerOut(e)}
          onClick={() =>
            window.open(
              "https://github.com/SirJohn72-script",
              "_blank"
            )
          }>
          <mesh
            name='Cube021'
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.cream_dark}
          />
          <mesh
            name='Cube021_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.cream_yellow_light}
          />
        </group>
      </CuboidColliderDynamic>
    </group>
  );
}

useGLTF.preload("/models/ContactSecctionDynamics.glb");
