"use client";
import React from "react";
import { StyledNavButton } from "./NavButton.styles";
import { NavButtonProps } from "./NavButton.types";

const NavButton = ({
  url,
  borderwidth = "2.6px",
  fontSize,
  fontWeight = "500",
  color,
  className,
  children
}: NavButtonProps) => {
  return (
    <StyledNavButton
      scroll={true}
      className={className}
      href={url}
      borderwidth={borderwidth}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
  {children}
    </StyledNavButton>
  );
};

export default NavButton;
