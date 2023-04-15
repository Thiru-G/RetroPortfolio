import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera/Camera";
import Lights from "./Lights/Lights";
import Character from "./Character/Character";

import { DesktopModel } from "./Models/Desktop";
import { HomeSecction } from "./Models/HomeSecction";
import { ProjectSecction } from "./Models/ProjectSecction";
import { TechsSecction } from "./Models/TechsSecction";
import { YouTubeSecction } from "./Models/YouTubeSecction";
import { ContactSecction } from "./Models/ContactSecction";
import { Wall } from "./Models/Wall";

import { Physics, Debug } from "@react-three/cannon";
import PlaneSecctionPhysics from "./Physics/Utils/PlaneSecctionPhysics";
import HomeStatics from "./Physics/Statics/HomeStatics";
import { HomeDynamics } from "./Physics/Dynamics/HomeDynamics";
import { ProjectDynamics } from "./Physics/Dynamics/ProjectDynamics";
import TechsStatics from "./Physics/Statics/TechsStatic";
import GeneralStatics from "./Physics/Statics/GeneralStatics";
import ProjectsStatics from "./Physics/Statics/ProjectsStatics";
import { TechsDynamics } from "./Physics/Dynamics/TechsDynamics";
import ContactStatic from "./Physics/Statics/ContactStatic";
import { ContactDynamics } from "./Physics/Dynamics/ContactDynamics";
import YouTubeStatic from "./Physics/Statics/YouTubeStatic";
import { YouTubeDynamics } from "./Physics/Dynamics/YouTubeDynamics";
import { useLoaderScene } from "../Store/ThreeState";

export default function Scene() {
  const { setSceneLoaded } = useLoaderScene(
    (state) => state
  );

  React.useEffect(() => {
    setSceneLoaded(true);
  }, []);

  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        gl={{ powerPreference: "high-performance" }}
        dpr={1}>
        <color attach='background' args={["#1e1e1e"]} />
        <Camera />

        {/* 
        Scene models
      */}
        <HomeSecction />
        <ProjectSecction />
        <TechsSecction />

        <DesktopModel />
        <Wall />
        <ContactSecction />
        <YouTubeSecction />

        {/* 
        Physics Secctions
      */}
        <Physics
          broadphase='SAP'
          gravity={[0, -9.8, 0]}
          frictionGravity={[0, 1, 0]}
          defaultContactMaterial={{ restitution: 0.3 }}>
          {/* <Debug color='black' scale={1.01}>
        </Debug> */}
          {/* Character */}
          <Character />

          {/* Statics */}
          <HomeStatics />
          <ProjectsStatics />
          <TechsStatics />
          <GeneralStatics />
          <ContactStatic />
          <YouTubeStatic />

          {/* Dynamics */}
          <HomeDynamics />
          <ProjectDynamics />
          <TechsDynamics />
          <ContactDynamics />
          <YouTubeDynamics />

          {/* Basic */}
          <PlaneSecctionPhysics />
        </Physics>

        <Lights />
      </Canvas>
      {/* <PlayerSound /> */}
    </>
  );
}
