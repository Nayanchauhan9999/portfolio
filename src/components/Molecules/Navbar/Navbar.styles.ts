import NavButton from "@/components/Atoms/NavButton";
import { styled } from "styled-components";

export const NavbarContainer = styled.header`
  padding: 1.7rem 0;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
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

  svg {
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
    transition: fill 0.5s;
    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const StyledLogo = styled(NavButton)`
  font-size : 1.8rem;

  @media screen and (max-width:768px){
  font-size : 1.5rem;
  }
  @media screen and (max-width:540px){
  font-size : 1.3rem;
  }
`
