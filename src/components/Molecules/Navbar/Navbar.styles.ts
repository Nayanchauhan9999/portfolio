import NavButton from "@/components/Atoms/NavButton";
import { styled } from "styled-components";

export const NavbarContainer = styled.header`
  padding: 1.7rem 0;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  position :sticky;
  @media screen and (max-width: 460px) {
    padding: 1.4rem 0;
  }
  top: 0;
  background-color : ${props => props.theme.colors.backgroundLight};
  z-index : 2;
`;

export const LogoWraper = styled.div``;
export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 460px) {
    display : none;
  }
`;
export const NavbarLinksMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 460px) {
    flex-direction: column;
    position:absolute;
    top :77px;
    background-color : ${props => props.theme.colors.background};
    left :0;
    width : 100%;
    box-shadow :${props => props.theme.colors.boxShadow};
    padding : 2rem 0;
  }
`;

export const NavbarIconGrop = styled.div`
  margin-left: 1rem;
  svg {
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
    transition: fill 0.5s;
    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
  .hamburger-menu {
    display: none;
  }
  @media screen and (max-width: 460px) {
    .hamburger-menu {
      display: block;
    }
  }
`;

export const StyledLogo = styled(NavButton)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.3rem;
  }
`;
