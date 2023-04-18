import React from "react";
import Layout from "@/layouts/Layout";
import Hero from "@/components/UI/Hero/Hero";
import About from "@/components/UI/About/About";
import Experience from "@/components/UI/Stack/Experience";
import Projects from "@/components/UI/Projects/Projects";
import Contact from "@/components/UI/Contact/Contact";
import { useLoaderScene } from "@/components/Three/Store/ThreeState";
import LineSeparator from "@/components/common/separator/LineSeparator";

export default function Home() {
  const { setMusicLoaded, setSceneLoaded, setHideLoader } =
    useLoaderScene((state) => state);

  React.useEffect(() => {
    setMusicLoaded(false);
    setMusicLoaded(false);
    setHideLoader(false);
    console.log("");
  }, []);

  return (
    <>
      <Layout>
        <>
          <Hero />
          <LineSeparator />
          <Projects />
          <LineSeparator />
          <Experience />
          <LineSeparator />
          <About />
          <LineSeparator />
          <Contact />
        </>
      </Layout>
    </>
  );
}
