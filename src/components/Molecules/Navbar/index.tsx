"use client";
import { useContext } from "react";
import NavbarProps from "./Navbar.types";
import Box from "@/components/__Shared/Box";
import NavButton from "@/components/Atoms/NavButton";
import {
  LogoWraper,
  NavbarContainer,
  NavbarLinks,
  StyledFlexContainer,
  StyledLogo,
} from "./Navbar.styles";
import { MdNightsStay, MdLightMode } from "react-icons/md";
import { SetThemeContext, ThemeContext } from "@/app/layout";
import Container from "@/components/__Shared/Container";

const Navbar = ({ logoTitle }: NavbarProps) => {
  const setTheme: any = useContext(SetThemeContext);
  const theme = useContext(ThemeContext);
  const handleSetTheme = (): void => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };
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
            {theme === "dark" ? (
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
