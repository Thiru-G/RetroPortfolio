import React from "react";
import Layout from "@/layouts/Layout";
import Hero from "@/components/UI/Hero/Hero";
import About from "@/components/UI/About/About";
import Experience from "@/components/UI/Stack/Experience";
import Projects from "@/components/UI/Projects/Projects";
import Contact from "@/components/UI/Contact/Contact";

export default function Home() {
  return (
    <>
      <Layout>
        <>
          <Hero />
          <Projects />
          <Experience />
          <About />
          <Contact />
        </>
      </Layout>
    </>
  );
}
