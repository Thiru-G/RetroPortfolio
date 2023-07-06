import React, { useState, useEffect } from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { Tb3DCubeSphere } from "react-icons/tb";
import clsx from "clsx";
import HeroText from "@/components/common/text/HeroText";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";
import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import BodyLine from "@/components/common/consoles/console_lines/BodyLine";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import AnimatedImage from "@/components/common/images/AnimatedImage";

export default function LearnThree() {
  const HeroImages: Array<React.ReactNode> = [];
  for (let i = 1; i < 61; i++) {
    if (i < 10) {
      HeroImages.push(<AnimatedImage image={`/images/rocket/000${i}.svg`} />);
    } else {
      HeroImages.push(<AnimatedImage image={`/images/rocket/00${i}.svg`} />);
    }
  }
  const [CurrentHero, setCurrentHero] = useState<React.ReactNode>(HeroImages[0]);

  useEffect(() => {
    let currentIndex = 0;

    const updateCurrentHero = () => {
      setTimeout(() => {
        setCurrentHero(HeroImages[currentIndex]);
        currentIndex = (currentIndex + 1) % HeroImages.length;
      }, 80);
    };

    const intervalId = setInterval(updateCurrentHero, 80);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ConsoleSecction id='learn_three' border={true} icon={<Tb3DCubeSphere />} branch={"learn_three"}>
      <div
        className={clsx(
          "w-[100%] h-[fit-content]",
          "flex md:flex-nowrap items-center justify-between gap-5 md:flex-row",
          "flex-col-reverse flex-wrap"
        )}>
        <div className={clsx("md:w-[50%] flex flex-col gap-5 items-baseline", "w-full")}>
          <HeaderLine>Wanna learn 3D in the web?</HeaderLine>
          <CommandLine label='show_info' command='cat' />
          <BodyLine>
            I&apos;ve created a YouTube Channel where I teach and show how to use 3D technologies like Blender and
            Three.js with React to create web pages with unique experiences.
          </BodyLine>
          <BodyLine>If you want to check it out, please click the button below</BodyLine>
          <div className={clsx("py-3 pl-[30px] flex flex-wrap gap-3")}>
            <PrimaryButton event={() => window.open("https://www.youtube.com/c/JohnScript72", "_blank")}>
              YouTube
            </PrimaryButton>
          </div>
        </div>
        <div className={clsx("md:w-[50%] h-[350px]", "w-[100%]")}>
          <div className={clsx("w-[100%] h-[100%]")}>{CurrentHero}</div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
