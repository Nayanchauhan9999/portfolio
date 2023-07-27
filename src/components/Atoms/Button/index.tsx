import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  width = "fit-content",
  bgcolor = "blue",
  align = "center",
  onClick
}: ButtonProps) => {
  return (
    <StyledButton
      role="button"
      type="button"
      width={width}
      bgcolor={bgcolor}
      align={align}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
