import React from "react";
import MonitorLayout from "../Layout/MonitorLayout";
import Bloqued from "../Login/Bloqued";
import { useLoginStage } from "../../../Store/ThreeState";
import clsx from "clsx";
import ConsoleLine from "../Console/ConsoleLine";
import HeroLine from "../Console/HeroLine";

export default function Monitor2() {
  const isLogin = useLoginStage((state) => state.isLogged);

  return (
    <MonitorLayout
      label={"root:"}
      description={
        "welcome to my portfolio | Bienvenido a mi portafolio | 私のポートフォリオへようこそ"
      }
      showLogin={true}
      runAnimation={true}>
      {isLogin ? (
        <div className='container-trans'>
          <HeroLine></HeroLine>
          <ConsoleLine>Welcome</ConsoleLine>
          <ConsoleLine>My name is Juan Glez</ConsoleLine>
          <ConsoleLine>
            I'm a full stack developer based in Mexico
          </ConsoleLine>
          <ConsoleLine>_</ConsoleLine>
          <ConsoleLine>Menu</ConsoleLine>
          <ConsoleLine>Inicio</ConsoleLine>
          <ConsoleLine>Projects</ConsoleLine>
          <ConsoleLine>About</ConsoleLine>
          <ConsoleLine>Contact</ConsoleLine>
        </div>
      ) : (
        <Bloqued />
      )}
    </MonitorLayout>
  );
}
