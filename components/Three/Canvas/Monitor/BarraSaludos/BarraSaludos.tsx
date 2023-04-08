import { useState, useRef } from "react";
import { useLoginStage } from "@/components/Three/Store/ThreeState";
import clsx from "clsx";

interface BarraSaludosProps {
  label: string;
  description: string;
  showLogin: boolean;
  runAnimation: boolean;
}

export default function BarraSaludos({
  label,
  description,
  showLogin = false,
  runAnimation = false,
}: BarraSaludosProps) {
  const setLogged = useLoginStage(
    (state) => state.setIsLogged
  );

  const [words, setWords] = useState([
    "Welcome to my portfolio",
    "|",
    "Bienvenido a mi portafolio",
    "|",
    "私のポートフォリオへようこそ",
  ]);

  const containerRef = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   const containerWidth =
  //     containerRef.current!.offsetWidth;
  //   let animationInterval: number = 0;

  //   function startAnimation() {
  //     let currentPosition = 0;

  //     function step() {
  //       currentPosition = currentPosition - 1;
  //       if (currentPosition <= -containerWidth) {
  //         currentPosition = 0;
  //       }
  //       containerRef.current!.style.transform = `translateX(${currentPosition}px)`;
  //       animationInterval = requestAnimationFrame(step);
  //     }

  //     animationInterval = requestAnimationFrame(step);
  //   }

  //   startAnimation();

  //   return () => {
  //     cancelAnimationFrame(animationInterval);
  //   };
  // }, [words]);

  return (
    <div
      className='barra_saludos_container'
      ref={containerRef}>
      <div
        className='
      '>
        <div className='header_console header_console--white'>
          {label}
        </div>
        {/* <SiGamejolt /> */}
      </div>
      <div className='barra_saludos_container_text'>
        <div
          className={clsx(
            "barra_saludos_container_text_wrapper",
            runAnimation
              ? "barra_saludos_container_text_wrapper--animated"
              : ""
          )}>
          <p className='barra_saludo_text header_console header_console--orange'>
            {description}
          </p>
        </div>
      </div>
      <div
        className={clsx(
          showLogin ? "block" : "hidden",
          "barra_saludos_logout z-50"
        )}>
        <button
          className='btn btn_bordered--orange z-50 cursor-pointer'
          onClick={() => setLogged(false)}>
          Logout
        </button>
      </div>
    </div>
  );
}
