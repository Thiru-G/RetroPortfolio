import HeroLine from "@/components/common/consoles/console_lines/HeroLine";
import ConsoleSecction from "../Container/ConsoleSecction";
import { AiOutlineHome } from "react-icons/ai";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AnimatedImage from "@/components/common/images/AnimatedImage";

export default function Hero() {
  const router = useRouter();

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
      }, 60);
    };

    const intervalId = setInterval(updateCurrentHero, 60);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ConsoleSecction id='hero' border={true} icon={<AiOutlineHome />} branch='Home'>
      <div
        className={clsx(
          "relative gap-6 h-fit",
          "md:flex md:gap-3 md:flex-nowrap md:flex-row md:justify-between md:items-center",
          "mobile flex flex-wrap flex-col-reverse"
          // "border-[1px] border-yellow-900"
        )}>
        <div
          id='hero_message'
          className={clsx(
            "w-full flex flex-col gap-2",
            "z-50",
            "md:w-[60%] lg:max-w-[600px]"
            // "border-[1px] border-yellow-900"
          )}>
          <HeroLine>front-end & </HeroLine>
          <HeroLine>back-end dev</HeroLine>
          <HeroLine>in just one</HeroLine>
          <div className={clsx("py-3 lg:pl-[45px] flex flex-wrap gap-3", "pl-[10px]")}>
            <PrimaryButton event={() => window.open("https://github.com/SirJohn72-script", "_blank")}>
              GitHub
            </PrimaryButton>
            <PrimaryButton event={() => window.open("/version3d", "_blank")}>3D Version</PrimaryButton>
          </div>
        </div>

        <div id='hero_image' className={clsx("md:w-[40%] w-[100%]", "flex justify-center")}>
          <div className={clsx("w-[100%] flex justify-center", "p-6")}>{CurrentHero}</div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
