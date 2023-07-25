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
            A Web Developer
          </Heading>
          <CareerObjective>
            I am a self-taught programmer who believes in lifelong learning. I
            am very passionate about being a web developer. Being a web
            developer allows me to blend my creativity with my technical skills,
            enabling me to bring ideas to life in the digital realm. I love the
            process of turning a concept or design into a fully functional
            website, carefully crafting the user experience and ensuring that
            every element works seamlessly together.
          </CareerObjective>
          <ButtonWrapper>
            <ButtonFill
              url="https://drive.google.com/file/d/17ya3PFxsOKPOdgTcSHSRn3uM6GxasN8S/view?usp=drive_link"
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
