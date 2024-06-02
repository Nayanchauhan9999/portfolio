"use client";
import React from "react";
import { ButtonFillProps } from "./ButtonFill.types";
import { StyledButtonFill } from "./ButtonFill.styles";

const ButtonFill = ({
  title,
  url,
  borderwidth = "2.6px",
  fontSize,
  fontWeight = "500",
  color,
  className,
  target,
}: ButtonFillProps) => {
  return (
    <StyledButtonFill
      className={className}
      href={url}
      borderwidth={borderwidth}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      target={target}
    >
      {title}
    </StyledButtonFill>
  );
};

export default ButtonFill;
