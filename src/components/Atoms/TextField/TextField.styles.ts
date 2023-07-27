import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSize.small};
  letter-spacing: 1.1px;
`;

export const StyledTextField = styled.input<{
  inputsize?: "small" | "medium" | "large";
  errormsg?: string;
}>`
  //common styles
  border: none;
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGray};
  font-family: inherit;
  display: block;
  width: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.colors.primary};
  background-color: inherit;
  letter-spacing: 1.1px;
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
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};

    &::placeholder {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  &::placeholder {
    color: ${(props) =>
      props.errormsg ? props.theme.colors.error : props.theme.colors.lightGray};
    letter-spacing: 1.1px;
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  ${(props) =>
    props.errormsg &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.colors.error};
    `}

  ${(props) =>
    props.inputsize === "small"
      ? css`
          padding: 0.3rem 0;
          font-size: ${(props) => props.theme.fontSize.small};
        `
      : props.inputsize === "medium"
      ? css`
          padding: 0.6rem 0;
          font-size: ${(props) => props.theme.fontSize.medium};
        `
      : props.inputsize === "large"
      ? css`
          padding: 1rem 0;
          font-size: ${(props) => props.theme.fontSize.large};
        `
      : props.inputsize}
`;
