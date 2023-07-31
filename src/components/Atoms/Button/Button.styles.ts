import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.bgcolor === "error"
      ? props.theme.colors.error
      : props.bgcolor === "blue"
      ? props.theme.colors.blue
      : props.bgcolor === "success"
      ? props.theme.colors.success
      : props.bgcolor === "warning"
      ? props.theme.colors.warning
      : props.bgcolor === "secondary"
      ? props.theme.colors.secondary
      : props.bgcolor};
  opacity: 0.9;
  border: none;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2), -3px -3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  cursor: pointer;
  color: #ffffff;
  line-height: 2.5rem;
  height: 2.5rem;
  padding: 0 2rem;
  display: block;
  width: ${(props) => (props.width === "full" ? "100%" : props.width)};
  font-family: inherit;
  letter-spacing: 2px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

  ${(props) =>
    props.align === "center"
      ? css`
          margin-left: auto;
          margin-right: auto;
        `
      : props.align === "left"
      ? css`
          margin-right: auto;
        `
      : props.align === "right"
      ? css`
          margin-left: auto;
        `
      : props.align}
`;
