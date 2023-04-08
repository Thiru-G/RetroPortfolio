import React from "react";
import MonitorLayout from "../Layout/MonitorLayout";
import Bloqued from "../Login/Bloqued";
import { useLoginStage } from "@/components/Three/Store/ThreeState";

export default function Monitor3() {
  const isLogin = useLoginStage((state) => state.isLogged);

  return (
    <MonitorLayout
      label={"Root/Images:"}
      description={"Rendering..."}
      showLogin={false}
      runAnimation={false}>
      {isLogin ? (
        <div className='container-trans'>
          <h1 className='header_console header_console--green'>
            hola mundo
          </h1>
        </div>
      ) : (
        <Bloqued />
      )}
    </MonitorLayout>
  );
}
