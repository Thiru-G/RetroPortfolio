import { Canvas } from "@react-three/fiber";
import Camera from "./Camera/Camera";
import Lights from "./Lights/Lights";
import Character from "./Character/Character";
import * as THREE from "three";
import {
  ContactShadows,
  BakeShadows,
} from "@react-three/drei";

import { DesktopModel } from "./Models/Desktop";
import { HomeSecction } from "./Models/HomeSecction";
import { ProjectsSecction } from "./Models/ProjectSecction";
import { TechsSecction } from "./Models/TechsSecction";
import { YouTubeSecction } from "./Models/YouTubeSecction";
import { ContactSecction } from "./Models/ContactSecction";
import { Wall } from "./Models/Wall";

export default function Scene() {
  return (
    <Canvas
      gl={{ powerPreference: "high-performance" }}
      dpr={1}>
      <color attach='background' args={["#1e1e1e"]} />
      <ContactShadows
        height={20}
        width={20}
        blur={0.2}
        color={"#1e1e1e"}
        // position={[45, 0, 0]}
      />
      <BakeShadows />
      <Camera />

      {/* 
        Scene models
      */}
      <DesktopModel />
      <HomeSecction />
      <ProjectsSecction />
      <TechsSecction />
      <YouTubeSecction />
      <ContactSecction />
      <Wall />

      {/* Character */}
      <Character />
      <Lights />
    </Canvas>
  );
}
