import clsx from "clsx";
import HeaderText from "../text/HeaderText";
// import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Link as LinkRS } from "react-scroll";

export default function Navbar() {
  const Links = [
    {
      label: "Home",
      to: "hero",
    },
    {
      label: "Projects",
      to: "projects",
    },
    {
      label: "Stack",
      to: "experience",
    },
    {
      label: "About Me",
      to: "about",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];

  const [showMobileMenu, setShowMobileMenu] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<number>(0);

  useEffect(() => {
    setIsMobile(window.innerWidth);
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth)
    );
  }, []);

  return (
    <div
      className={clsx(
        " bg-grey-900 bg-opacity-60 absolute z-50 rounded-tr-[30px] rounded-tl-[30px]",
        "w-[calc(100%-2px)] h-[60px] ml-[1px] mt-[1px] mr-[1px] px-[30px]",
        "flex justify-between items-center border-b-[1px] border-grey-300"
      )}>
      <div
        className={clsx(
          "w-full flex justify-between items-center"
        )}>
        <div
          className={clsx(
            "z-50",
            `${showMobileMenu ? "fixed" : "relative"}`
          )}>
          <HeaderText color={"text-white-1000"}>
            JG
          </HeaderText>
        </div>

        <ul
          className={clsx(
            "md:flex gap-3 ",
            "desktop lg:relative lg:flex lg:bg-opacity-0 lg:h-fit lg:flex-row lg:top-0 lg:left-0",
            "desktop lg:text-left lg:justify-start lg:w-fit",
            "mobile fixed top-[0px] w-full h-[calc(100vh)] bg-grey-900",
            "mobile flex justify-center flex-col text-center",
            `mobile ${
              showMobileMenu ? "left-[0px]" : "left-[-120%]"
            } transition-[left] duration-300 ease-in`
          )}>
          {Links.map((item, index) => (
            <li key={index}>
              <LinkRS
                to={item.to}
                smooth={true}
                onClick={() =>
                  isMobile < 768
                    ? setShowMobileMenu(!showMobileMenu)
                    : null
                }
                className={clsx(
                  "text-[18px] font-main text-grey-500 uppercase font-400",
                  "hover:text-white-1000 hover:underline"
                )}>
                {item.label}
              </LinkRS>
            </li>
          ))}
        </ul>

        <div
          id='mobile_icon'
          className={clsx(
            "lg:hidden",
            "text-32p text-grey-300 z-50",
            `${
              showMobileMenu
                ? "fixed right-[calc(32px)]"
                : "relative right-[calc(-11px)]"
            }`,
            "hover:text-white-1000"
          )}
          onClick={() =>
            setShowMobileMenu(!showMobileMenu)
          }>
          <CgMenuGridR />
        </div>
      </div>
    </div>
  );
}
