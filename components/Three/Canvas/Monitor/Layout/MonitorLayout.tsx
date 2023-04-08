import clsx from "clsx";
import React, { useEffect, useRef } from "react";
// import BarraSaludos from "./BarraSaludos/BarraSaludos";
// import Login from "./Login/Login";
// import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { useLoginStage } from "@/components/Three/Store/ThreeState";
import BarraSaludos from "../BarraSaludos/BarraSaludos";

interface MonitorLayoutProps {
  children: React.ReactNode;
  label: string;
  description: string;
  showLogin: boolean;
  runAnimation: boolean;
}

export default function MonitorLayout({
  children,
  label,
  description,
  showLogin = false,
  runAnimation = false,
}: MonitorLayoutProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const { isLogged } = useLoginStage((state) => state);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       const cont = container.current;
  //       if (cont) {
  //         cont.classList.remove("monitor_hidden");
  //         const center =
  //           cont.getElementsByClassName("center")[0];
  //         if (center) {
  //           setTimeout(() => {
  //             center.classList.remove("center_hidden");
  //           }, 300);
  //         }
  //       }
  //     }, 3000);
  //   }, []);

  return (
    <div className='monitor_container' ref={container}>
      {/* Monitor BG */}
      <div className='monitor_bg'>
        <img src='/models/Imgs/Window3.svg' alt='' />
      </div>
      {/* Admin console */}
      <div
        className={clsx(
          isLogged ? "flex" : "hidden",
          "flex w-full absolute top-[-20px] px-[30px] "
        )}>
        <BarraSaludos
          label={label}
          description={description}
          showLogin={showLogin}
          runAnimation={runAnimation}
        />
      </div>

      {/* Info center */}
      <div className='monitor_info'>
        <div
          className={clsx(
            "w-full h-[480px] mt-[60px]"
            // "border-[1px] border-yellow-900"
          )}>
          {children}
        </div>
      </div>

      {/* Date Button */}
      <div
        className={clsx(
          `${isLogged ? "flex" : "hidden"}`,
          "monitor_date w-full flex justify-between px-[45px]",
          "absolute bottom-[-10px]"
        )}>
        <div>
          <p className='header_console header_console--aqua'>
            {new Date().getDate()}/
            {new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </p>
        </div>
        <div className={clsx("flex")}>
          <p className='header_console header_console--aqua'>
            Monitor:
          </p>
          <p className='header_console header_console--green pl-2'>
            Online
          </p>
        </div>
      </div>
    </div>
  );
}
