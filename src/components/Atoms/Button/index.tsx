import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { StyleSheetManager } from "styled-components";

const customProps = (props: string) => !["bgcolor"].includes(props);

const Button = ({
  children,
  width = "fit-content",
  bgcolor = "blue",
  align = "center",
  onClick,
  pad,
  margin
}: ButtonProps) => {
  return (
    <StyleSheetManager shouldForwardProp={customProps}>
      <StyledButton
        role="button"
        type="button"
        width={width}
        bgcolor={bgcolor}
        align={align}
        onClick={onClick}
        pad={pad}
        margin={margin}
      >
        {children}
      </StyledButton>
    </StyleSheetManager>
  );
};

export default Button;
