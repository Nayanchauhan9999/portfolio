"use client";
import AboutMe from "@/components/Molecules/AboutMe";
import Contact from "@/components/Molecules/Contact";
import Footer from "@/components/Molecules/Footer";
import Navbar from "@/components/Molecules/Navbar";
import Projects from "@/components/Molecules/Projects";
import Skills from "@/components/Molecules/Skills";
import { StyleSheetManager } from "styled-components";
export default function Home() {
  const customProps = (props: string) =>
    !["bgcolor", "wordwrap"].includes(props);

  return (
    <main>
      <StyleSheetManager shouldForwardProp={customProps}>
        <Navbar logoTitle="Nayan Chauhan" />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </StyleSheetManager>
    </main>
  );
}
