import Container from "@/components/__Shared/Container";
import React from "react";
import { SkillSection, SkillSectionWrapper } from "./Skills.styles";
import SkillBtn from "@/components/Atoms/SkillBtn";
import Heading from "@/components/__Shared/Heading";

const skillArray: string[] = [
  "ReactJS",
  "NextJS",
  "Javascript",
  "Typescript",
  "HTML5",
  "CSS3",
  "Redux",
  "Redux/toolkit",
  "Bootstrap",
  "TailwindCSS",
  "React-hook-form",
  "Yup",
  "Git/Github",
  "Styled-components",
  "React Native",
  "React Query",
  "NodeJs",
  "MongoDB"
];

const Skills = () => {
  return (
    <SkillSection id="skills">
      <Container>
        <Heading
          variant="h2"
          textalign="center"
          color="primary"
          margin="large"
          size="xlarge"
        >
          SKILLS
        </Heading>
        <SkillSectionWrapper>
          {skillArray.map((item, index) => {
            return <SkillBtn key={index}>{item}</SkillBtn>;
          })}
        </SkillSectionWrapper>
      </Container>
    </SkillSection>
  );
};

export default Skills;
