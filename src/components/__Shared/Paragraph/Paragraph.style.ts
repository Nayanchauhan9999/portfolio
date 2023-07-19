import styled, { css } from "styled-components";
import { ParagraphProps } from "./Paragraph.types";

export const StyledParagraph = styled.p<ParagraphProps>`
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
        : props.color === "text"
        ? props.theme.colors.text
        : props.color};
    `}

    ${(props) =>
    props.fontweight &&
    css`
      font-weight: ${props.fontweight === "bold"
        ? 700
        : props.fontweight === "semibold"
        ? 600
        : props.fontweight === "normal"
        ? 400
        : props.fontweight === "thin"
        ? 100
        : props.fontweight === "bolder"
        ? 800
        : props.fontweight};
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
