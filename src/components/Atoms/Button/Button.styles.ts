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
  padding: 0.6rem 1rem;
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
    props.pad?.all !== undefined
      ? css`
          padding: ${props.pad.all};
        `
      : props.pad?.vertical !== undefined
      ? css`
          padding-top: ${props.pad.vertical};
          padding-bottom: ${props.pad.vertical};
        `
      : props.pad?.horizontal !== undefined
      ? css`
          padding-left: ${props.pad.horizontal};
          padding-right: ${props.pad.horizontal};
        `
      : props.pad?.top !== undefined
      ? css`
          padding-top: ${props.pad.top};
        `
      : props.pad?.bottom !== undefined
      ? css`
          padding-bottom: ${props.pad.bottom};
        `
      : props.pad?.start !== undefined
      ? css`
          padding-left: ${props.pad.start};
        `
      : props.pad?.end !== undefined
      ? css`
          padding-right: ${props.pad.end};
        `
      : null}

  ${(props) =>
    props.margin?.all !== undefined
      ? css`
          margin: ${props.margin.all};
        `
      : props.margin?.vertical !== undefined
      ? css`
          margin-top: ${props.margin.vertical};
          margin-bottom: ${props.margin.vertical};
        `
      : props.margin?.horizontal !== undefined
      ? css`
          margin-left: ${props.margin.horizontal};
          margin-right: ${props.margin.horizontal};
        `
      : props.margin?.top !== undefined
      ? css`
          margin-top: ${props.margin.top};
        `
      : props.margin?.bottom !== undefined
      ? css`
          margin-bottom: ${props.margin.bottom};
        `
      : props.margin?.start !== undefined
      ? css`
          margin-left: ${props.margin.start};
        `
      : props.margin?.end !== undefined
      ? css`
          margin-right: ${props.margin.end};
        `
      : null}


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
