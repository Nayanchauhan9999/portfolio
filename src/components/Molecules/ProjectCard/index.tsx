import React from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import { ProjectCardWrapper, StyledSkillList } from "./ProjectCard.styles";
import Container from "@/components/__Shared/Container";
import Heading from "@/components/__Shared/Heading";
import Paragraph from "@/components/__Shared/Paragraph";
import NavButton from "@/components/Atoms/NavButton";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Text from "@/components/__Shared/Text";

const ProjectCard = ({
  title,
  description,
  skills,
  gitHubLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <ProjectCardWrapper>
      <Container>
        <Heading textalign="center">{title}</Heading>
        <Paragraph>{description}</Paragraph>
        {skills?.map((item, index) => {
          return (
            <StyledSkillList key={index}>
              {item}
            </StyledSkillList>
          );
        })}
        {gitHubLink && (
          <NavButton url={gitHubLink}>
            <AiOutlineGithub />
          </NavButton>
        )}
        {demoLink && (
          <NavButton url={demoLink}>
            <FiExternalLink />
          </NavButton>
        )}
      </Container>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
