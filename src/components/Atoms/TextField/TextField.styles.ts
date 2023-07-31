import styled, { css } from "styled-components";
import { margin, pad } from "@/utils/Proptypes/proptypes";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSize.small};
  letter-spacing: 1.1px;
  font-family:inherit;
`;

export const StyledTextField = styled.input<{
  inputsize?: "small" | "medium" | "large";
  errormsg?: string;
  radius?: string;
  bordersides?: "top" | "right" | "bottom" | "left" | "all";
  pad?: pad;
  margin?: margin;
  borderwidth?: string;
}>`
  //common styles
  border: none;
  outline: none;
  font-family: inherit;
  display: block;
  width: 100%;
  border-radius: ${(props) => props.radius};
  max-width: 100%;
  color: ${(props) => props.theme.colors.primary};
  background-color: inherit;
  letter-spacing: 1.1px;
  box-sizing: border-box;
  padding: 0.6rem 0;
  line-height: 1rem;
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
    props.bordersides === "bottom"
      ? css`
          border-bottom: ${props.borderwidth} solid
            ${(props) => props.theme.colors.lightGray};
        `
      : props.bordersides === "all"
      ? css`
          border: ${props.borderwidth} solid
            ${(props) => props.theme.colors.lightGray};
        `
      : props.bordersides}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.colors.primary};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px inherit;
  }

  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.secondary} !important;
  }

  &:focus {
    color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};

    &::placeholder {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  &::placeholder {
    color: ${(props) =>
      props.errormsg ? props.theme.colors.error : props.theme.colors.lightGray};
    font-size: inherit;
  }
  ${(props) =>
    props.errormsg &&
    css`
      border-color: ${(props) => props.theme.colors.error};
    `}
`;
