"use client";
import React from "react";
import { ButtonFillNormalProps } from "./ButtonFill.types";
import { StyledButtonFillNormal } from "./ButtonFill.styles";
import { StyleSheetManager } from "styled-components";

const customProps = (props:any) => !["borderwidth"].includes(props);

const ButtonFillNormal = ({
  title,
  borderwidth = "2.6px",
  fontSize,
  fontWeight = "500",
  color,
  className,
  width = "fit-content",
  onClick
}: ButtonFillNormalProps) => {
  return (
    <StyleSheetManager shouldForwardProp={customProps}>
      <StyledButtonFillNormal
        className={className}
        borderwidth={borderwidth}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        width={width}
        onClick={onClick}
        type="button"
      >
        {title}
      </StyledButtonFillNormal>
    </StyleSheetManager>
  );
};

export default ButtonFillNormal;
