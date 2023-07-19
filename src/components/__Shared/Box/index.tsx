import React from "react";
import { BoxProps } from "./Box.types";
import { StyledBox } from "./Box.styles";

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
  );
};

export default Box;
