import styled, { css } from "styled-components";
import { BoxProps } from "./Box.types";

export const StyledBox = styled.div<BoxProps>`
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size === "xsmall"
        ? "0.6rem"
        : props.size === "small"
        ? "0.9rem"
        : props.size === "medium"
        ? "1.2rem"
        : props.size === "large"
        ? "1.8rem"
        : props.size === "xlarge"
        ? "2.5rem"
        : props.size};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color === "primary"
        ? props.theme.colors.primary
        : props.color === "secondary"
        ? props.theme.colors.secondary
        : props.color};
    `}

    ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight === "bold"
        ? 700
        : props.fontWeight === "semibold"
        ? 600
        : props.fontWeight === "normal"
        ? 400
        : props.fontWeight === "thin"
        ? 100
        : props.fontWeight === "bolder"
        ? 800
        : props.fontWeight};
    `}

    ${(props) =>
    props.textalign &&
    css`
      text-align: ${props.textalign};
    `}

    ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin === "none"
        ? 0
        : props.margin === "xsmall"
        ? "0.6rem"
        : props.margin === "medium"
        ? "1.5rem"
        : props.margin === "small"
        ? "1rem"
        : props.margin === "large"
        ? "2.5rem"
        : props.margin === "xlarge"
        ? "4rem"
        : props.margin};
    `}
`;
