import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {
  CuboidColliderDynamic,
  CylinderCollider,
  IcosphereCollider,
} from "../Utils/PhyshicsColliders";

type GLTFResult = GLTF & {
  nodes: {
    Circle023: THREE.Mesh;
    Circle023_1: THREE.Mesh;
    Icosphere: THREE.Mesh;
    Plane125: THREE.Mesh;
    Plane125_1: THREE.Mesh;
    Plane123: THREE.Mesh;
    Plane123_1: THREE.Mesh;
    Plane124: THREE.Mesh;
    Plane124_1: THREE.Mesh;
  };
  materials: {
    cream_grey: THREE.MeshStandardMaterial;
    cream_dark: THREE.MeshStandardMaterial;
    Dados: THREE.MeshStandardMaterial;
    Game_Pacman: THREE.MeshStandardMaterial;
    Game_Space: THREE.MeshStandardMaterial;
    cream_red: THREE.MeshStandardMaterial;
    Games_Atari: THREE.MeshStandardMaterial;
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
        detail={0}
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
        id='tower'
        args={[1.37 / 2, 1.94 / 2, 3.72268]}
        position={[20.5236, 1.86705, 5.81828]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'>
        <group name='Circle032' scale={0.95}>
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
            material={materials.cream_dark}
          />
        </group>
      </CylinderCollider>

      {/* Cartigres */}
      {/* Pacman */}
      <CuboidColliderDynamic
        id='Pacman'
        args={[2, 0.403472, 2.69]}
        scale={[1, 1, 1]}
        position={[31.68, 0.2, 5.48]}
        rotation={[0, 0.22, 0]}
        mass={1}
        type='Dynamic'>
        <group name='Pacman' scale={1.02}>
          <mesh
            name='Plane125'
            castShadow
            receiveShadow
            geometry={nodes.Plane125.geometry}
            material={materials.cream_dark}
          />
          <mesh
            name='Plane125_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane125_1.geometry}
            material={materials.Game_Pacman}
          />
        </group>
      </CuboidColliderDynamic>

      {/* Space */}
      <CuboidColliderDynamic
        id='Space'
        args={[2, 0.403472, 2.69]}
        scale={[1, 1, 1]}
        position={[31.59, 0.61, 5.42]}
        rotation={[0, 0.22, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='Space'
          scale={1.02}
          rotation={[0, -0.22, 0]}>
          <mesh
            name='Plane123'
            castShadow
            receiveShadow
            geometry={nodes.Plane123.geometry}
            material={materials.Game_Space}
          />
          <mesh
            name='Plane123_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane123_1.geometry}
            material={materials.cream_red}
          />
        </group>
      </CuboidColliderDynamic>

      {/* ET */}
      <CuboidColliderDynamic
        id='Space'
        args={[2, 2.45799, 0.405648]}
        scale={[1, 1, 1]}
        position={[30.23, 1.23, 7.75]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group name='ET' scale={1.02}>
          <mesh
            name='Plane124'
            castShadow
            receiveShadow
            geometry={nodes.Plane124.geometry}
            material={materials.cream_dark}
          />
          <mesh
            name='Plane124_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane124_1.geometry}
            material={materials.Games_Atari}
          />
        </group>
      </CuboidColliderDynamic>
    </group>
  );
}

useGLTF.preload("/models/ProjectsSecctionDynamic.glb");
