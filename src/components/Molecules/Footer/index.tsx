import React from "react";
import { FooterSection, FooterWrapper, PersonalBranding } from "./Footer.styles";
import Container from "@/components/__Shared/Container";
import Heading from "@/components/__Shared/Heading";
import Box from "@/components/__Shared/Box";
import { Sacramento } from "next/font/google";
import Paragraph from "@/components/__Shared/Paragraph";
import { BsFillSuitHeartFill } from "react-icons/bs";
import SocialMediaList from "../SocialMediaList";

const SacramentoFont = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <FooterSection id="contact">
      <Container>
        <FooterWrapper>
          <SocialMediaList title="Find Me on Social Media" />

          <Box className={SacramentoFont.className}>
            <Heading
              variant="h3"
              size="xlarge"
              margin="none"
              color="secondary"
              textalign="center"
            >
              Nayan Chauhan
            </Heading>
            <Paragraph color="text" textalign="center" margin="none">
              Made With <BsFillSuitHeartFill color="red" />
            </Paragraph>
          </Box>
          <Box>
            <Paragraph color="primary" margin="none">
              No &copy; copyright issues.
            </Paragraph>
          </Box>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};
export default Footer;
