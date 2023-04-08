import React from "react";
import clsx from "clsx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface ConsoleLineProps {
  children: string;
}

export default function ConsoleLine({
  children,
}: ConsoleLineProps) {
  return (
    <div className='flex h-[30px] items-center'>
      <p className='header_console header_console--yellow'>
        <MdKeyboardDoubleArrowRight />
      </p>
      <p className='header_console header_console--aqua'>
        {children}
      </p>
    </div>
  );
}
