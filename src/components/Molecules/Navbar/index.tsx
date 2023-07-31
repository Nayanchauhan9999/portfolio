"use client";
import { useContext, useEffect, useState } from "react";
import NavbarProps from "./Navbar.types";
import NavButton from "@/components/Atoms/NavButton";
import { useTheme } from "styled-components";
import {
  LogoWraper,
  NavbarContainer,
  NavbarIconGrop,
  NavbarLinks,
  NavbarLinksMobile,
  StyledFlexContainer,
  StyledLogo,
} from "./Navbar.styles";
import { MdNightsStay, MdLightMode } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import Container from "@/components/__Shared/Container";
import { ThemeContext } from "@/utils/Context";
import Box from "@/components/__Shared/Box";

const Navbar = ({ logoTitle }: NavbarProps) => {
  const handleSetTheme = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    setOpenNav(false);
  }, []);
  const theme = useTheme();
  const handleNavbarMobile = () => {
    openNav ? setOpenNav(false) : setOpenNav(true);
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
          <Box style={{ display: "flex", alignItems: "center" }}>
            <NavbarLinks>
              <NavButton url="#projects">Projects</NavButton>
              <NavButton url="#skills">skills</NavButton>
              <NavButton url="#contact">Contact</NavButton>
              <NavButton url="/admin/login">Admin</NavButton>
            </NavbarLinks>
            {openNav && (
              <NavbarLinksMobile onClick={() => setOpenNav(false)}>
                <NavButton url="#projects" borderwidth="2px">
                  Projects
                </NavButton>
                <NavButton url="#skills" borderwidth="2px">
                  skills
                </NavButton>
                <NavButton url="#contact" borderwidth="2px">
                  Contact
                </NavButton>
                <NavButton url="/admin/login" borderwidth="2px">
                  Admin
                </NavButton>
              </NavbarLinksMobile>
            )}

            <NavbarIconGrop style={{ display: "flex", gap: "1rem" }}>
              {theme.theme === "dark" ? (
                <MdLightMode onClick={handleSetTheme} size={22} />
              ) : (
                <MdNightsStay onClick={handleSetTheme} size={22} />
              )}
              <TfiMenu
                size={22}
                onClick={handleNavbarMobile}
                className="hamburger-menu"
              />
            </NavbarIconGrop>
          </Box>
        </StyledFlexContainer>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
