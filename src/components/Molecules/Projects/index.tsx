import React from "react";
import { ProjectWrapper } from "./Projects.styles";
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
        <ProjectCard
          title="Ecommerece Project"
                  description="It is a web application to solve the problem of finding most important screenshot Keep your screenshot safe and easily accessible."
        skills={["ReactJS","JavaScript","NextJS","Redux","Yup","sass","formik"]}
        />
      </Container>
    </ProjectWrapper>
  );
};

export default Projects;
