import { useState } from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { FaGamepad } from "react-icons/fa";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import clsx from "clsx";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import ProyectCard from "@/components/common/cards/ProyectCard";
import { useRouter } from "next/router";
import Readmore from "@/components/common/readmore";
import {
  GiDeliveryDrone,
  GiMaterialsScience,
  GiSittingDog,
  GiSniffingDog,
} from "react-icons/gi";
import {
  CiAirportSign1,
} from "react-icons/ci";
import { IoMdPlanet } from "react-icons/io";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdBiotech, MdCatchingPokemon } from "react-icons/md";
import Logo from "@/components/common/icons/Logo";
import { read } from "fs";
const projectDescription1 = `SniffSpace is a platform designed to train dogs using positive reinforcement to detect specific volatile organic compounds (VOCs) present in a person's breath sample, which may indicate the presence of cancer. The platform focuses on enhancing the dogs' natural olfactory abilities through a structured and supportive training regimen, ensuring they can reliably detect these VOCs and contribute to early cancer detection efforts.
Sniffspace contains 8 cabins and each cabin contain a sniff port. Which is a hole under which samples (Masks containing breath VOCs) are placed. Dogs start sniffing the ports and if they find the positive sample, they are given treats.`;
const projectDescription2 = 'Beacon Mesh Fleet Tracking System (Alpha Data LLC - Dubai Airport, UAE)Developed a Proof of Concept (POC) for a fleet management system at Dubai Airport. The system, leveraging beacon mesh technology, demonstrated 35% higher accuracy than GPS, and reduced latency by 12x, ensuring better real-time tracking. This innovative solution was presented to Alpha Data LLC, showcasing its potential to revolutionize fleet tracking efficiency at large-scale facilities like airports.'
export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([
    {
      id: 0,
      icon: <GiSniffingDog />,
      title: "Sniffspace : Dognosis",
      description: <Readmore description={projectDescription1} />,
      techs:
      [
            "Microcontroller programming (Firmware)",
            "Servo motor control",
            "Sensor integration",
            "Communication Protocols",
            "Networking and IP management (mDNS, DHCP)",
            "3D modeling (CAD software like SolidWorks, Fusion 360)",
            "3D printing",
            "Prototyping and iterative design"
    ]
      ,
      linkTo: () =>
        window.open(
          "https://www.youtube.com/c/JohnScript72",
          "_blank"
        ),
    },
    {
      id: 1,
      icon: <CiAirportSign1 />,
      title: "Fleet Tracking : DXB Airport ",
      description: <Readmore description={projectDescription2} />,
      techs: ["Three.js", "WebXR", "React"],
      linkTo: () =>
        window.open(
          "https://github.com/SirJohn72-script/DronesCustimizationSystem",
          "_blank"
        ),
    },
    {
      id: 2,
      icon: <IoMdPlanet />,
      title: "Noche de Estrellas",
      description: `This is a project I made for my university, I teach other students how to user the basics of WebXR / Hit Test and a little bit of Shaders with GLSL`,
      techs: [
        "Three.js",
        "WebXR",
        "Next.js",
        "GLSL",
        "TypeScript",
      ],
      linkTo: () =>
        window.open(
          "https://noche-estrellas.vercel.app/",
          "_blank"
        ),
    },
    {
      id: 3,
      icon: <BsFillPinMapFill />,
      title: "BUAP Map(No official)",
      description: `A map of my university BUAP and some indicators. This was one of my firsts projects using three.js and React.`,
      techs: ["Three.js", "WebXR", "Blender"],
      linkTo: () =>
        window.open(
          "https://github.com/SirJohn72-script/mapaBuap",
          "_blank"
        ),
    },
    {
      id: 4,
      icon: <MdCatchingPokemon />,
      title: "3D Pokedex",
      description: `The typical Pokedex API for beginners. But using three.js and React, the main idea behind this project is mixing 3d and HTML.`,
      techs: ["Three.js", "Next.js", "Blender"],
      linkTo: () =>
        window.open(
          "https://github.com/SirJohn72-script/pokedex_switch",
          "_blank"
        ),
    },
    {
      id: 5,
      icon: <GiMaterialsScience />,
      title: "Shaders with GLSL",
      description: `This is a template for using the basics of GLSL with Three.js and React(on updating).`,
      techs: ["Three.js", "React", "GLSL"],
      linkTo: () =>
        window.open(
          "https://github.com/SirJohn72-script/Shaders-Three.js",
          "_blank"
        ),
    },
  ]);

  return (
    <ConsoleSecction
      id='projects'
      border={true}
      branch='free-time'
      icon={<FaGamepad />}>
      <div className={clsx("flex w-full flex-wrap")}>
        <div id='projects_title' className={clsx("w-full")}>
          <HeaderLine>Projects</HeaderLine>
        </div>
        <div id='projects_items' className={clsx("w-full")}>
          <CommandLine command='ls' label='projects' />
          <div
            className={clsx(
              "w-full pt-8 lg:gap-0",
              "md:flex justify-between md:pl-[38px]",
              "flex flex-wrap gap-9"
            )}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={clsx(
                  "lg:w-full max-w-[340px]",
                  "md:w-[45%]",
                  "w-full"
                )}>
                <ProyectCard
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  techs={project.techs}
                  linkTo={project.linkTo}
                />
              </div>
            ))}

            {/* <div
              className={clsx(
                "lg:w-full max-w-[340px]",
                "md:w-[45%]",
                "w-full"
              )}>
              <ProyectCard
                image='/bg/bg-vivid_1.jpg'
                title='Drone it yourselft'
                description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia odit, dicta suscipit magni velit rem?`}
                techs={["Three.js", "WebXR", "React"]}
                linkTo='fff'
              />
            </div>
            <div
              className={clsx(
                "lg:w-full max-w-[340px]",
                "md:w-[45%]",
                "w-full"
              )}>
              <ProyectCard
                image='/bg/bg-vivid_1.jpg'
                title='Drone it yourselft'
                description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia odit, dicta suscipit magni velit rem?`}
                techs={["Three.js", "WebXR", "React"]}
                linkTo='fff'
              />
            </div> */}
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
