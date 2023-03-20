import GitConsole from "@/components/common/consoles/git/GitConsole";
import Navbar from "@/components/common/navbar/Navbar";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={clsx(
        "w-full bg-hero_bg bg-center bg-cover py-9 px-3",
        "scroll-smooth"
      )}>
      <div
        className={clsx(
          "w-full max-w-[1300px] mx-auto rounded-2xl relative"
        )}>
        <Navbar />
        <div className='dark_glass'>{children}</div>
      </div>
    </div>
  );
}
