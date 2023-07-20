"use client";
import { useContext } from "react";
import NavbarProps from "./Navbar.types";
import NavButton from "@/components/Atoms/NavButton";
import { useTheme } from "styled-components";
import {
  LogoWraper,
  NavbarContainer,
  NavbarLinks,
  StyledFlexContainer,
  StyledLogo,
} from "./Navbar.styles";
import { MdNightsStay, MdLightMode } from "react-icons/md";
import Container from "@/components/__Shared/Container";
import { ThemeContext } from "@/utils/Context";

const Navbar = ({ logoTitle }: NavbarProps) => {
  const handleSetTheme = useContext(ThemeContext);
  const theme = useTheme()
  return (
    <NavbarContainer>
      <Container>
        <StyledFlexContainer>
          <LogoWraper>
            <StyledLogo
              url="/"
              fontWeight="600"
              borderwidth="2.5px"
              color="secondary"
            >
              {logoTitle}
            </StyledLogo>
          </LogoWraper>
          <NavbarLinks>
            <NavButton url="/projects">Projects</NavButton>
            <NavButton url="/skills">skills</NavButton>
            <NavButton url="/contact">Contact</NavButton>
            {theme.theme === "dark" ? (
              <MdLightMode onClick={handleSetTheme} />
            ) : (
              <MdNightsStay onClick={handleSetTheme} />
            )}
          </NavbarLinks>
        </StyledFlexContainer>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
