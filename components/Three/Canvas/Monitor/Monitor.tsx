import React, { useEffect, useRef } from "react";
import BarraSaludos from "./BarraSaludos/BarraSaludos";
import Login from "./Login/Login";
// import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

export default function Monitor() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const cont = container.current;
      if (cont) {
        cont.classList.remove("monitor_hidden");
        const center =
          cont.getElementsByClassName("center")[0];
        if (center) {
          setTimeout(() => {
            center.classList.remove("center_hidden");
          }, 300);
        }
      }
    }, 3000);
  }, []);

  return (
    <div className='monitor_container' ref={container}>
      {/* Monitor BG */}
      <div className='monitor_bg'>
        <img src='/models/Imgs/Window3.svg' alt='' />
      </div>

      {/* Login */}
      <div className='monitor_login'>
        <Login />
      </div>

      {/* Info center */}
      {/* <div className='monitor_info'>
        <BarraSaludos />
      </div> */}
      {/* Boder Top */}
      <div className='border border--top'></div>
      {/* Border Bottom */}
      <div className='border border--bottom'></div>
    </div>
  );
}
