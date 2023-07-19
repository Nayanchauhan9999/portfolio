import React from "react";
import { ProjectCardWrapper, ProjectWrapper } from "./Projects.styles";
import Heading from "@/components/__Shared/Heading";
import Container from "@/components/__Shared/Container";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <ProjectWrapper>
      <Container>
        <Heading
          variant="h2"
          textalign="center"
          color="primary"
          margin="large"
          size="xlarge"
        >
          PROJECTS
        </Heading>
        <ProjectCardWrapper>
          <ProjectCard
            title="Html, css(vanila) Project"
            description="This is my first ever project after complete html, css with responsive design using media query. This Project is based on eccomerce."
            skills={["Html", "JavaScript", "css"]}
            gitHubLink="/"
            demoLink="/"
          />
          <ProjectCard
            title="Ecommerece Project"
            description="This is very spacial project for me. Because after learning ReactJs, I start learning and exploring next js. This is my first nextjs project. This prject is created using "
            skills={[
              "ReactJS",
              "JavaScript",
              "NextJS",
              "Redux",
              "Tailwind CSS",
              "reduxjs/toolkit",
            ]}
            gitHubLink="/"
            demoLink="/"
          />
          <ProjectCard
            title="ReactJS training ReportCard"
            description="This is one of my largest project ever. but not based on one thing. This project is create when i start learning reactjs to end of training period. There are serval mini projects has been included."
            skills={[
              "ReactJS",
              "JavaScript",
              "reduxjs/toolkit",
              "Redux",
              "Bootstrap",
            ]}
            gitHubLink="/"
            demoLink="/"
          />
          <ProjectCard
            title="Portfolio Site - Nayan Chauhan"
            description="This project is about my portfolio website. This project shows my actual ReactJs and typescript skills. In this project 90% components are extremely re-usable. And Project structure is Awesome. checkout my project structure using below link."
            skills={["ReactJS", "JavaScript", "nextJS", "styled-components"]}
            gitHubLink="/"
            demoLink="/"
          />
        </ProjectCardWrapper>
      </Container>
    </ProjectWrapper>
  );
};

export default Projects;
