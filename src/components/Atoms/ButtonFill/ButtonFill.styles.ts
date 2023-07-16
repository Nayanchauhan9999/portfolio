import { styled } from "styled-components";
import Link from "next/link";

export const StyledButtonFill = styled(Link)<{
  borderwidth?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}>`
  text-decoration: none;
  color: ${(props) =>
    props.color === "secondary"
      ? props.theme.colors.secondary
      : props.theme.colors.text};
  text-transform: capitalize;
  width: fit-content;
  display: inline-block;
  transition: color 0.5s;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  border: 2px solid
    ${(props) =>
      props.color === "secondary"
        ? props.theme.colors.secondary
        : props.theme.colors.text};
  padding: 0.6rem 1.2rem;
  position: relative;

  &:hover{
    color : ${props => props.theme.colors.background};
    z-index: 2;
  }

  &::after {
    content: "";
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.secondary};
    left: 0;
    top: 0;
    width: 0%;
    z-index: -1;
    transition: width 0.3s;
  }
  &:hover::after{
    width: 100%;
  }

  @media screen and (max-width:768px){
      font-size : 0.9rem;
    padding : 0.3rem 0.8rem;
  }
  
`;
