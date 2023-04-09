import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {
  CylinderCollider,
  IcosphereCollider,
} from "../Utils/PhyshicsColliders";

type GLTFResult = GLTF & {
  nodes: {
    Circle023: THREE.Mesh;
    Circle023_1: THREE.Mesh;
    Circle023_2: THREE.Mesh;
    Icosphere: THREE.Mesh;
  };
  materials: {
    cream_grey: THREE.MeshStandardMaterial;
    cream_grey_darker: THREE.MeshStandardMaterial;
    cream_dark: THREE.MeshStandardMaterial;
    Dados: THREE.MeshStandardMaterial;
  };
};

export function ProjectDynamics(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/ProjectsSecctionDynamic.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <IcosphereCollider
        id='dado'
        args={1}
        mass={1}
        type='Dynamic'
        position={[22.62, 1, 6.65]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}>
        <mesh
          rotation={[-1.03, 1.57, 0]}
          name='Icosphere'
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials.Dados}
        />
      </IcosphereCollider>
      <CylinderCollider
        id='coffee_3'
        args={[1.37 / 2, 1.94 / 2, 3.72268]}
        position={[20.5236, 1.86705, 5.81828]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'>
        <group name='torre'>
          <mesh
            name='Circle023'
            castShadow
            receiveShadow
            geometry={nodes.Circle023.geometry}
            material={materials.cream_grey}
          />
          <mesh
            name='Circle023_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle023_1.geometry}
            material={materials.cream_grey_darker}
          />
          <mesh
            name='Circle023_2'
            castShadow
            receiveShadow
            geometry={nodes.Circle023_2.geometry}
            material={materials.cream_dark}
          />
        </group>
      </CylinderCollider>
    </group>
  );
}

useGLTF.preload("/models/ProjectsSecctionDynamic.glb");
