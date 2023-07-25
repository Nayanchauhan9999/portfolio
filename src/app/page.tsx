"use client";
import AboutMe from "@/components/Molecules/AboutMe";
import Contact from "@/components/Molecules/Contact";
import Footer from "@/components/Molecules/Footer";
import Navbar from "@/components/Molecules/Navbar";
import Projects from "@/components/Molecules/Projects";
import Skills from "@/components/Molecules/Skills";
export default function Home() {

  return (
      <main>
        <Navbar logoTitle="Nayan Chauhan" />
        <AboutMe />
        <Projects />
      <Skills />
      <Contact/>
        <Footer/>
      </main>
  );
}
