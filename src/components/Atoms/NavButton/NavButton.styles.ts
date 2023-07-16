import { styled } from "styled-components";
import Link from "next/link";

export const StyledNavButton = styled(Link)<{
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

  &::after {
    content: "";
    display: block;
    width: 0%;
    margin: auto;
    margin-top: 0.2rem;
    height: ${(props) => props.borderwidth};
    background-color: ${(props) => props.theme?.colors?.secondary};
    transition: width 0.5s;
    border-radius: 2px;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    color: ${(props) => props.theme?.colors?.secondary};
  }
`;
