import React from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { Tb3DCubeSphere } from "react-icons/tb";
import clsx from "clsx";
import HeroText from "@/components/common/text/HeroText";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import BodyLine from "@/components/common/consoles/console_lines/BodyLine";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";

export default function LearnThree() {
  return (
    <ConsoleSecction
      id='learn_three_js'
      border={true}
      icon={<Tb3DCubeSphere />}
      branch={"learn_three_js"}>
      <div
        className={clsx(
          "w-[100%] flex justify-between gap-5"
        )}>
        <div
          className={clsx(
            "md:w-[50%] flex flex-col gap-5",
            "w-full"
          )}>
          <HeaderLine>
            Wanna learn 3D in the web?
          </HeaderLine>
          <CommandLine label='show_info' command='cat' />
          <BodyLine>
            I&apos;ve created a YouTube Channel where I
            teach and show how to use 3D technologies like
            Blender and Three.js with React to create web
            pages with unique experiences.
          </BodyLine>
          <BodyLine>
            If you want to check it out, please click the
            button below
          </BodyLine>
          <div
            className={clsx(
              "py-3 pl-[30px] flex flex-wrap gap-3"
            )}>
            <PrimaryButton
              event={() =>
                window.open(
                  "https://www.youtube.com/c/JohnScript72",
                  "_blank"
                )
              }>
              YouTube
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
