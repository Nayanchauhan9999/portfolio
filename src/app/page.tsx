"use client";
import AboutMe from "@/components/Molecules/AboutMe";
import Contact from "@/components/Molecules/Contact";
import Footer from "@/components/Molecules/Footer";
import Navbar from "@/components/Molecules/Navbar";
import Projects from "@/components/Molecules/Projects";
import Skills from "@/components/Molecules/Skills";
import { ApiClient } from "@/utils/http";
import { useEffect } from "react";
import { StyleSheetManager } from "styled-components";

export default function Home() {
  const customProps = (props: string) =>
    !["bgcolor", "wordwrap"].includes(props);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    try {
      const getUsersList = await new ApiClient().get("/v1/users");
      console.log(getUsersList);
    } catch (error) {
      console.log(error);
    }
  };

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
