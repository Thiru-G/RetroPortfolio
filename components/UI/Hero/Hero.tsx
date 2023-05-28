import HeroLine from "@/components/common/consoles/console_lines/HeroLine";
import ConsoleSecction from "../Container/ConsoleSecction";
import { AiOutlineHome } from "react-icons/ai";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  return (
    <ConsoleSecction
      id='hero'
      border={true}
      icon={<AiOutlineHome />}
      branch='Home'>
      <div
        className={clsx(
          "relative gap-6 h-auto",
          "md:flex md:gap-3 md:flex-nowrap md:flex-row",
          "mobile flex flex-wrap flex-col-reverse"
        )}>
        <div
          id='hero_message'
          className={clsx(
            "w-full flex flex-col gap-2",
            "z-50"
          )}>
          <HeroLine>front-end & </HeroLine>
          <HeroLine>back-end dev</HeroLine>
          <HeroLine>in just one</HeroLine>
          <div
            className={clsx(
              "py-3 lg:pl-[40px] flex flex-wrap gap-3",
              "pl-[10px]"
            )}>
            <PrimaryButton
              event={() =>
                window.open(
                  "https://github.com/SirJohn72-script",
                  "_blank"
                )
              }>
              GitHub
            </PrimaryButton>
            <PrimaryButton
              event={() =>
                window.open("/version3d", "_blank")
              }>
              3D Version
            </PrimaryButton>
          </div>
        </div>

        <div
          id='hero_image'
          className={clsx(
            "md:absolute md:top-[0px] md:left-[50%]",
            "lg:w-[50%] md:h-[100%] lg:max-[50%] lg:justify-center",
            "md:w-[50%] md:justify-end",
            "w-[100%] relative h-[270px] flex justify-center"
          )}>
          <div
            className={clsx(
              "hero_image_container relative w-full h-full",
              "w-full max-w-[400px] h-[300px] max-h-[300px]"
            )}>
            <Image
              src='/images/pc.png'
              alt='johnscript-hero-image'
              placeholder='blur'
              blurDataURL='blur'
              fill
            />
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
