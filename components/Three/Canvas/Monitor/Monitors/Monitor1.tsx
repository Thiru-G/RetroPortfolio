import { useState, useRef } from "react";
import MonitorLayout from "../Layout/MonitorLayout";
import Login from "../Login/Login";
import BarraSaludos from "../BarraSaludos/BarraSaludos";
import { useLoginStage } from "../../../Store/ThreeState";
import Projects from "../Projects/Projects";

export default function Monitor1() {
  const isLogin = useLoginStage((state) => state.isLogged);
  return (
    <MonitorLayout
      label={"root/description:"}
      description={"loading data..."}
      showLogin={false}
      runAnimation={false}>
      {isLogin ? (
        <div className='h-full container-trans'>
          <Projects />
        </div>
      ) : (
        <Login />
      )}
    </MonitorLayout>
  );
}
