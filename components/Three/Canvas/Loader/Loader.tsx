import React from "react";
import clsx from "clsx";
import Img from "next/image";
import { BsArrowsMove } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { useLoaderScene } from "../../Store/ThreeState";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import LoaderRobot from "./LoaderRobot";

export default function Loader() {
  const {
    isMusicLoaded,
    isSceneLoaded,
    setHideLoader,
    setPlayMusic,
    hideLoader,
  } = useLoaderScene((state) => state);

  if (hideLoader) {
    const loader = document.getElementById("three-loader");
    loader?.classList.add("fade-out-animation-loader");
    setTimeout(() => {
      loader!.style.display = "none";
    }, 1000);
  }

  return (
    <div
      id='three-loader'
      className={clsx(
        "fixed top-0 left-0",
        "w-[100%] h-[100vh] bg-grey-1000 z-50",
        "flex justify-center items-center flex-col gap-6"
      )}>
      {isMusicLoaded && isSceneLoaded ? (
        <div
          className={clsx(
            "flex justify-center items-center flex-col gap-6"
          )}>
          <div>
            <h1
              className={clsx(
                "text-white-1000 font-600 font-main text-32p uppercase"
              )}>
              Welcome to my 3d portfolio v1.0.0
            </h1>
            <p
              className={clsx(
                "text-yellow-700 font-300 font-main text-14p text-center"
              )}>
              Still under construction
            </p>
          </div>
          <div
            className={clsx(
              "flex w-[500px] justify-between "
            )}>
            <div
              className={clsx(
                "flex items-center gap-6",
                "text-white-1000 font-600 font-main text-16p"
              )}>
              <p>Move(AWSD):</p>
              <BsArrowsMove className='text-32p' />
            </div>
            <div
              className={clsx(
                "flex items-center gap-6",
                "text-white-1000 font-600 font-main text-16p"
              )}>
              <p>Hold Shift to run:</p>
              <BiRun className='text-32p' />
            </div>
          </div>
          <PrimaryButton
            key={1}
            event={() => {
              setHideLoader(true), setPlayMusic(true);
            }}>
            Enter
          </PrimaryButton>
        </div>
      ) : (
        <LoaderRobot />
      )}
    </div>
  );
}
