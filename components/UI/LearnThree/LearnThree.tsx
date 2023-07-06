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
  const [HeroImages, setHeroImages] = useState<Array<React.ReactNode>>([]);
  const [CurrentHero, setCurrentHero] = useState<React.ReactNode | null>();

  useEffect(() => {
    const loadImage = (imagePath: string): Promise<React.ReactNode> => {
      return new Promise((resolve, reject) => {
        const image = new window.Image();
        image.src = imagePath;
        image.onload = () => resolve(<AnimatedImage image={imagePath} />);
        image.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      const imagesPromises = [];
      for (let i = 1; i < 61; i++) {
        const imagePath = `/images/rocket/${i < 10 ? "000" : "00"}${i}.svg`;
        imagesPromises.push(loadImage(imagePath));
      }
      try {
        const loadedImages = await Promise.all(imagesPromises);
        setHeroImages(loadedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAllImages();
  }, []);

  useEffect(() => {
    if (HeroImages.length === 0) {
      return; // Espera hasta que todas las imágenes estén cargadas
    }

    let currentIndex = 0;

    const updateCurrentHero = () => {
      setCurrentHero(HeroImages[currentIndex]);
      currentIndex = (currentIndex + 1) % HeroImages.length;
    };

    const intervalId = setInterval(updateCurrentHero, 60);

    return () => {
      clearInterval(intervalId);
    };
  }, [HeroImages]);

  return (
    <ConsoleSecction id='learn_three' border={true} icon={<Tb3DCubeSphere />} branch={"learn_three"}>
      <div
        className={clsx(
          "w-[100%] h-[fit-content]",
          "flex md:flex-nowrap items-center justify-between gap-5 md:flex-row",
          "flex-col-reverse flex-wrap"
        )}>
        <div className={clsx("md:w-[50%] flex flex-col gap-5", "w-full")}>
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
          <div className={clsx("w-[100%] h-[100%]")}>{}</div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
