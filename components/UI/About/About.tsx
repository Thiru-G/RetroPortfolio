import React from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import BodyLine from "@/components/common/consoles/console_lines/BodyLine";
import clsx from "clsx";
import Table_Console from "@/components/common/consoles/console_lines/Table_Console";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import { ImPacman } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { TbCoffee } from "react-icons/tb";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { GiPencilBrush } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";

export default function About() {
  const HobbiesData = {
    header: {
      label: "HOB",
      items: ["HOB", "LEVEL"],
    },
    description: {
      label: "Level",
      items: [
        {
          prefix: "coffee_lover",
          icon: <AiFillHeart />,
          label: "EXCELENT",
        },
        {
          prefix: "barista",
          icon: <TbCoffee />,
          label: "Good",
        },
        {
          prefix: "3d",
          icon: <HiOutlineCubeTransparent />,
          label: "Keep inproving",
        },
        {
          prefix: "pating",
          icon: <GiPencilBrush />,
          label: "Keep inproving",
        },
        {
          prefix: "drawing",
          icon: <FaPencilAlt />,
          label: "Keep inproving",
        },
      ],
    },
  };

  function openCV() {
    const fileUrl = "/cv/CV-English.pdf";
    window.open(fileUrl);
  }

  return (
    <ConsoleSecction
      id={"about"}
      border={true}
      branch={"about"}
      icon={<ImPacman />}>
      <div
        className={clsx(
          "md:w-full md:flex md:flex-nowrap gap-2",
          "flex-wrap"
        )}>
        <div
          id='about-resume'
          className={clsx(
            "md:w-[50%] md:max-w-[50%]",
            "w-full"
          )}>
          <HeaderLine>Juan gonzalez</HeaderLine>
          <CommandLine command='ls' label='_resume' />
          <BodyLine>
            Hello, I&apos;m a Full-Stack developer based in
            Mexico. I love working with Web Technologies and
            mix them with 3D to making pages with a
            different taste and feeling.
          </BodyLine>
          <BodyLine>
            In addition, I have worked with Back-End
            technologies, such as .NET, ASP.NET and SQL
            Server, and with Cloud services like Azure and
            Azure DevOps
          </BodyLine>
          <BodyLine>
            I&apos;m open to work with new technologies to
            solve new challenges and get new opportunities
          </BodyLine>
          <div
            className={clsx("py-3 pl-[20px] flex gap-3")}>
            <PrimaryButton event={() => openCV()}>
              Download CV
            </PrimaryButton>
          </div>
        </div>
        <div
          id='about-education'
          className={clsx(
            "md:w-[50%] md:max-w-[50%] gap-5",
            "w-full"
          )}>
          <div
            id='about-education-school'
            className='w-full'>
            <CommandLine command='echo' label='education' />
            <BodyLine>
              Benemerita Univeridad Autonoma De Puebla -
              BUAP
            </BodyLine>
          </div>

          <div
            id='about-education-table'
            className='w-full'>
            <CommandLine command='ls' label='hobbies' />
            <div className='w-full pl-[38px] pt-4'>
              <Table_Console
                headers={HobbiesData.header}
                descriptions={HobbiesData.description}
              />
            </div>
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
