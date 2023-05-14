import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Button: THREE.Mesh;
    Plane111: THREE.Mesh;
    Teapot: THREE.Mesh;
    Star: THREE.Mesh;
    Suzanne: THREE.Mesh;
    Plane118: THREE.Mesh;
  };
  materials: {
    postips: THREE.MeshStandardMaterial;
    Atlas_Texture: THREE.MeshStandardMaterial;
  };
};

export function YouTubeSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/YouTubeSecction.glb"
  ) as GLTFResult;

  const [hovered, setHover] = React.useState(false);

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Button'
          castShadow
          receiveShadow
          geometry={nodes.Button.geometry}
          position={[73.09, 0.79, 10.75]}
          scale={0.76}
          onClick={() => {
            window.open(
              "https://www.youtube.com/c/JohnScript72",
              "_blank"
            );
          }}
          onPointerOver={(event) => {
            setHover(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(event) => {
            setHover(false);
            document.body.style.cursor = "default";
          }}>
          <meshStandardMaterial
            color={hovered ? "orange" : "red"}
          />
        </mesh>
        <mesh
          name='Plane111'
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials.postips}
          position={[86.5, 1.72, -6.2]}
          rotation={[0.14, 0.09, 0.02]}
        />
        <mesh
          name='Teapot'
          castShadow
          receiveShadow
          geometry={nodes.Teapot.geometry}
          material={atlasMaterial}
          position={[72.19, -0.03, 6.07]}
        />
        <mesh
          name='Star'
          castShadow
          receiveShadow
          geometry={nodes.Star.geometry}
          material={atlasMaterial}
          position={[73.31, 0.82, 8.51]}
          rotation={[Math.PI / 2, -0.3, 0]}
        />
        <mesh
          name='Suzanne'
          castShadow
          receiveShadow
          geometry={nodes.Suzanne.geometry}
          material={atlasMaterial}
          position={[67.81, 1.28, 9.82]}
          rotation={[-0.68, 0.49, 0.37]}
          scale={2.35}
        />
        <mesh
          name='Plane118'
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={atlasMaterial}
          position={[73.16, 0.57, 10.76]}
          scale={1.29}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/YouTubeSecction.glb");
