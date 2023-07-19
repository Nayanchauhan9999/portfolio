import React from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import { ProjectCardWrapper, ProjectLinksWrapper, SkillWrapper, StyledSkillList } from "./ProjectCard.styles";
import Heading from "@/components/__Shared/Heading";
import Paragraph from "@/components/__Shared/Paragraph";
import NavButton from "@/components/Atoms/NavButton";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Box from "@/components/__Shared/Box";

const ProjectCard = ({
  title,
  description,
  skills,
  gitHubLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <ProjectCardWrapper>
      <Heading
        textalign="center"
        fontweight={"semibold"}
        color="primary"
        variant="h2"
      >
        {title}
      </Heading>
      <Paragraph color="text" textalign="center">
        {description}
      </Paragraph>
      <SkillWrapper>
        {skills?.map((item, index) => {
          return (
            <StyledSkillList as={"code"} key={index}>
              {item}
            </StyledSkillList>
          );
        })}
      </SkillWrapper>
      <ProjectLinksWrapper>
        {gitHubLink && (
          <NavButton url={gitHubLink}>
            <AiOutlineGithub size={25} />
          </NavButton>
        )}
        {demoLink && (
          <NavButton url={demoLink} >
            <FiExternalLink size={25} />
          </NavButton>
        )}
      </ProjectLinksWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
