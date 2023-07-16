"use client";
import AboutMe from "@/components/Molecules/AboutMe";
import Navbar from "@/components/Molecules/Navbar";
import Projects from "@/components/Molecules/Projects";
import Container from "@/components/__Shared/Container";

export default function Home() {
  return (
    <>
      <main>
        <Navbar logoTitle="Nayan Chauhan" />
        <AboutMe />
        <Projects/>
      </main>
    </>
  );
}
