import { useState } from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { FaGamepad } from "react-icons/fa";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import clsx from "clsx";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import ProyectCard from "@/components/common/cards/ProyectCard";
import { useRouter } from "next/router";
import { GiDeliveryDrone, GiGalaxy } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import Logo from "@/components/common/icons/Logo";

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([
    {
      id: 1,
      icon: <GiDeliveryDrone />,
      title: "Drone-It YourSelf",
      description: `This is a little project made in React and Three.js, where I explore the capabilities of Three.js for change a scene in hot reload(still working).`,
      techs: ["Three.js", "WebXR", "React"],
      linkTo: () =>
        router.push(
          "https://github.com/SirJohn72-script/DronesCustimizationSystem"
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
        router.push(
          "https://github.com/SirJohn72-script/noche_estrellas_web"
        ),
    },
    {
      id: 3,
      icon: <Logo />,
      title: "JohnScript YouTube",
      description: `I started a YouTube Channel, where I teach how to start and use Three.js mainly with React, also a little bit of WebXR. `,
      techs: [
        "Three.js",
        "React-Three-Fiber",
        "WebXR",
        "React",
        "Typescript",
        "Blender",
      ],
      linkTo: () =>
        router.push(
          "https://www.youtube.com/c/JohnScript72"
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
