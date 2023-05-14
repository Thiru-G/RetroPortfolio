import { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Plane134: THREE.Mesh;
    Contact: THREE.Mesh;
    Plane119: THREE.Mesh;
    Plane132: THREE.Mesh;
    Plane133: THREE.Mesh;
    Circle023: THREE.Mesh;
    Circle024: THREE.Mesh;
    Plane131: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder_3: THREE.Mesh;
    Circle025: THREE.Mesh;
    Circle035: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Catenary008: THREE.Mesh;
    Plane147: THREE.Mesh;
    Text008: THREE.Mesh;
    Circle050: THREE.Mesh;
    Plane135: THREE.Mesh;
  };
  materials: {
    postips: THREE.MeshStandardMaterial;
  };
};

export function ContactSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/ContactSecction.glb"
  ) as GLTFResult;

  const [hovered, setHover] = React.useState(false);
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
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Plane134'
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={atlasMaterial}
          position={[83.41, 1.15, -1.18]}
          rotation={[0.4, -0.16, 0.07]}
          scale={[0.7, 0.22, 0.22]}
        />
        <mesh
          name='Contact'
          castShadow
          receiveShadow
          geometry={nodes.Contact.geometry}
          position={[83.41, 0.39, 2.71]}
          rotation={[0.12, -0.18, 0.02]}
          scale={[0.09, 0.09, 0.11]}
          onPointerOver={(e) => {
            setHover(true);
            handlePointerOver(e);
          }}
          onPointerOut={(e) => {
            setHover(false);
            handlePointerOut(e);
          }}
          onClick={() =>
            window.open(
              "mailto:j.gonzalez_f@outlook.com?subject=Hello%20there"
            )
          }>
          <meshStandardMaterial
            color={hovered ? "green" : "red"}
          />
        </mesh>

        <mesh
          name='Plane119'
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials.postips}
          position={[86.5, 1.72, -6.2]}
          rotation={[0.14, 0.09, 0.02]}
        />
        <mesh
          name='Plane132'
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={atlasMaterial}
          position={[82.98, 0.25, 1.06]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <mesh
          name='Plane133'
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={atlasMaterial}
          position={[82.98, 0.25, 1.06]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <mesh
          name='Circle023'
          castShadow
          receiveShadow
          geometry={nodes.Circle023.geometry}
          material={atlasMaterial}
          position={[82.49, 0.57, 0.89]}
          rotation={[0.12, -0.18, 0.02]}
          scale={0.12}
        />
        <mesh
          name='Circle024'
          castShadow
          receiveShadow
          geometry={nodes.Circle024.geometry}
          material={atlasMaterial}
          position={[82.19, 0.42, 2.12]}
          rotation={[0.12, -0.18, 0.02]}
          scale={[0.09, 0.09, 0.11]}
        />
        <mesh
          name='Plane131'
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={atlasMaterial}
          position={[83.16, 0.66, 0.21]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <group
          name='Cylinder'
          position={[83.18, 0.44, 0.15]}
          rotation={[0.4, -0.16, 0.07]}
          scale={1.69}>
          <mesh
            name='Cylinder_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Cylinder_2'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Cylinder_3'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={atlasMaterial}
          />
        </group>
        <mesh
          name='Circle025'
          castShadow
          receiveShadow
          geometry={nodes.Circle025.geometry}
          material={atlasMaterial}
          position={[84.37, 0.59, -0.73]}
          rotation={[1.78, 0.04, 0.31]}
          scale={0.09}
        />
        <mesh
          name='Circle035'
          castShadow
          receiveShadow
          geometry={nodes.Circle035.geometry}
          material={atlasMaterial}
          position={[85.53, 2.7, -8.72]}
          scale={4.74}
        />
        <mesh
          name='Cylinder001'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={atlasMaterial}
          position={[85.53, 0.66, -6.32]}
        />
        <mesh
          name='Catenary008'
          castShadow
          receiveShadow
          geometry={nodes.Catenary008.geometry}
          material={atlasMaterial}
          position={[85.53, 5.7, -6.61]}
        />
        <mesh
          name='Plane147'
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={atlasMaterial}
          position={[88.08, 0.67, 0.31]}
          scale={[1.09, 1, 1]}
        />
        <mesh
          name='Text008'
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={atlasMaterial}
          position={[88.08, 0.66, 0.81]}
          rotation={[0.87, 0, 0]}
        />
        <mesh
          name='Circle050'
          castShadow
          receiveShadow
          geometry={nodes.Circle050.geometry}
          material={atlasMaterial}
          position={[91.61, -0.03, -4.05]}
          scale={1.28}
        />
        <mesh
          name='Plane135'
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={atlasMaterial}
          position={[91.65, 0.18, -4.05]}
          rotation={[Math.PI, -0.81, Math.PI]}
          scale={0.45}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ContactSecction.glb");
