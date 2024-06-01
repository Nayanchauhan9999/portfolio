/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AboutMeProps } from "./AboutMe.types";
import {
  AboutMeContainer,
  ButtonWrapper,
  CareerObjective,
} from "./AboutMe.styles";
import Container from "@/components/__Shared/Container";
import Heading from "@/components/__Shared/Heading";
import Box from "@/components/__Shared/Box";
import Text from "@/components/__Shared/Text";
import ButtonFill from "@/components/Atoms/ButtonFill";
import NavButton from "@/components/Atoms/NavButton";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const AboutMe = ({}: AboutMeProps) => {
  return (
    <AboutMeContainer>
      <Container>
        <Box>
          <Heading
            variant="h1"
            size="xlarge"
            fontWeight={"bold"}
            textalign="center"
            color="primary"
          >
            Hi, I am <Text color="secondary"> Nayan Chauhan</Text>
          </Heading>
          <Heading
            variant="h3"
            textalign="center"
            size="large"
            fontWeight={"semibold"}
            color="primary"
          >
            App Developer
          </Heading>
          <CareerObjective>
            Hello! I'm Nayan, a passionate React Native developer with 1 years
            of experience in building high-quality mobile applications. My
            journey in mobile development began with a desire to create
            seamless, intuitive, and visually appealing apps that provide
            exceptional user experiences. With a strong foundation in JavaScript
            and expertise in React Native, ReactJS, Next.js, and Node.js, I have
            successfully delivered numerous projects from concept to deployment.
          </CareerObjective>
          <ButtonWrapper>
            <ButtonFill
              url="https://drive.google.com/file/d/1DQdelemeX-gy-wK7P5mlPhX3T7qnXL-n/view?usp=drive_link"
              title="Resume"
              color="secondary"
            />
            <Box margin="xsmall">
              <NavButton url="https://github.com/Nayanchauhan9999">
                <AiOutlineGithub size={22} />
              </NavButton>
            </Box>
            <Box>
              <NavButton url="https://www.linkedin.com/in/chauhan-nayan">
                <AiFillLinkedin size={22} />
              </NavButton>
            </Box>
          </ButtonWrapper>
        </Box>
      </Container>
    </AboutMeContainer>
  );
};

export default AboutMe;
