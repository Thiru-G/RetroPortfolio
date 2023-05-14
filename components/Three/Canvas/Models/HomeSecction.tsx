import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";
import { GenerateVideo } from "../Helpers/GenerateVideoTexture";

type GLTFResult = GLTF & {
  nodes: {
    PC_Window: THREE.Mesh;
    postip_home: THREE.Mesh;
    PC_Base_3: THREE.Mesh;
    PC_Base_2: THREE.Mesh;
    PC_Base: THREE.Mesh;
    CPU_1: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    keys: THREE.Mesh;
    keyboard_label: THREE.Mesh;
    keyboard_button: THREE.Mesh;
    CPU_2: THREE.Mesh;
    CPU_3: THREE.Mesh;
    mouse_box: THREE.Mesh;
    mouse_buttons: THREE.Mesh;
    mouse_middle: THREE.Mesh;
    mouse_connectr: THREE.Mesh;
    devices_connectors: THREE.Mesh;
    mouse_cable: THREE.Mesh;
    keyboard_cable: THREE.Mesh;
    keyboard_connector: THREE.Mesh;
    mug_spings: THREE.Mesh;
    pencil_4: THREE.Mesh;
    mug: THREE.Mesh;
    Heman_sword_1: THREE.Mesh;
    heman_sword_2: THREE.Mesh;
    heman_sword_3: THREE.Mesh;
    Small_Plant: THREE.Mesh;
    duck: THREE.Mesh;
  };
  materials: {
    postips: THREE.MeshStandardMaterial;
  };
};

export function HomeSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/HomeSecction.glb"
  ) as GLTFResult;

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='PC_Window'
          castShadow
          receiveShadow
          geometry={nodes.PC_Window.geometry}
          material={GenerateVideo("./videos/doom.mp4")}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='postip_home'
          castShadow
          receiveShadow
          geometry={nodes.postip_home.geometry}
          material={materials.postips}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base_3'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base_3.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base_2'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base_2.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_1'
          castShadow
          receiveShadow
          geometry={nodes.CPU_1.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <group name='keyboard_box' position={[0, 0, -3.02]}>
          <mesh
            name='Plane005'
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Plane005_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={atlasMaterial}
          />
        </group>
        <mesh
          name='keys'
          castShadow
          receiveShadow
          geometry={nodes.keys.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_label'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_label.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_button'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_button.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_2'
          castShadow
          receiveShadow
          geometry={nodes.CPU_2.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_3'
          castShadow
          receiveShadow
          geometry={nodes.CPU_3.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_box'
          castShadow
          receiveShadow
          geometry={nodes.mouse_box.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_buttons'
          castShadow
          receiveShadow
          geometry={nodes.mouse_buttons.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_middle'
          castShadow
          receiveShadow
          geometry={nodes.mouse_middle.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_connectr'
          castShadow
          receiveShadow
          geometry={nodes.mouse_connectr.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='devices_connectors'
          castShadow
          receiveShadow
          geometry={nodes.devices_connectors.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_cable'
          castShadow
          receiveShadow
          geometry={nodes.mouse_cable.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_cable'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_cable.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_connector'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_connector.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mug_spings'
          castShadow
          receiveShadow
          geometry={nodes.mug_spings.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='pencil_4'
          castShadow
          receiveShadow
          geometry={nodes.pencil_4.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mug'
          castShadow
          receiveShadow
          geometry={nodes.mug.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='Heman_sword_1'
          castShadow
          receiveShadow
          geometry={nodes.Heman_sword_1.geometry}
          material={atlasMaterial}
          position={[6.61, 3.29, -8.86]}
          rotation={[-Math.PI, 0.2, 0]}
          scale={[0.59, 1.97, 1.97]}
        />
        <mesh
          name='heman_sword_2'
          castShadow
          receiveShadow
          geometry={nodes.heman_sword_2.geometry}
          material={atlasMaterial}
          position={[5.75, 3.29, -4.59]}
          rotation={[-Math.PI, 0.2, 0]}
          scale={[0.52, 1.28, 0.96]}
        />
        <mesh
          name='heman_sword_3'
          castShadow
          receiveShadow
          geometry={nodes.heman_sword_3.geometry}
          material={atlasMaterial}
          position={[5.75, 3.29, -4.59]}
          rotation={[Math.PI / 2, 0, 0.2]}
          scale={0.29}
        />
        <mesh
          name='Small_Plant'
          castShadow
          receiveShadow
          geometry={nodes.Small_Plant.geometry}
          material={atlasMaterial}
          position={[-12.67, 3.48, -5.33]}
          rotation={[0, -0.96, 0]}
          scale={0.61}
        />
        <mesh
          name='duck'
          castShadow
          receiveShadow
          geometry={nodes.duck.geometry}
          material={atlasMaterial}
          position={[-6.32, 4.84, -3.86]}
          rotation={[Math.PI / 2, 0, -0.21]}
          scale={0.47}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/HomeSecction.glb");
