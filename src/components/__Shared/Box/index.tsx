import React from "react";
import { BoxProps } from "./Box.types";
import { StyledBox } from "./Box.styles";
import { StyleSheetManager } from "styled-components";

const customProps = (prop: any) => !["textalign", "margin"].includes(prop);


const Box = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontWeight,
  style,
  className,
}: BoxProps) => {
  return (
    <StyleSheetManager shouldForwardProp={customProps}>
      <StyledBox
        className={className}
        size={size}
        textalign={textalign}
        style={style}
        margin={margin}
        fontWeight={fontWeight}
        color={color}
      >
        {children}
      </StyledBox>
    </StyleSheetManager>
  );
};

export default Box;
