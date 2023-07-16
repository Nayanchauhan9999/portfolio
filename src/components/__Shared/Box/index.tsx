import React from "react";
import { BoxProps } from "./Box.types";
import { StyledBox } from "./Box.styles";


const Box = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontweight,
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
      fontweight={fontweight}
      color={color}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
