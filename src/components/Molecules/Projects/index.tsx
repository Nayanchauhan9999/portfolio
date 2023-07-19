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
            gitHubLink="https://github.com/Nayanchauhan9999/Nayan_Mart_ecommerce_site"
            demoLink="https://nayanchauhan9999.github.io/Nayan_Mart_ecommerce_site/"
          />
          <ProjectCard
            title="Ecommerece Project"
            description="This is very spacial project for me. Because after learning ReactJs, I start learning and exploring next js. This is my first nextjs project. This project is created using below skills."
            skills={[
              "ReactJS",
              "JavaScript",
              "NextJS",
              "Redux",
              "Tailwind CSS",
              "reduxjs/toolkit",
            ]}
            gitHubLink="https://github.com/Nayanchauhan9999/domo-Store"
            demoLink="https://demostore999.netlify.app/"
          />
          <ProjectCard
            title="ReactJS training report-card"
            description="This is one of my largest project ever. but not based on one thing. This project is create when i start learning reactjs to end of training period. There are serval mini projects has been included."
            skills={[
              "ReactJS",
              "JavaScript",
              "reduxjs/toolkit",
              "Redux",
              "Bootstrap",
            ]}
            gitHubLink="https://github.com/Nayanchauhan9999/first-react-app"
            demoLink="https://react-practice-nayan.netlify.app/"
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
