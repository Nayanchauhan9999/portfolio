import React from "react";
import { StyledText } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontWeight,
  style,
  className,
}: TextProps) => {
  return (
    <StyledText
      className={className}
      size={size}
      textalign={textalign}
      style={style}
      margin={margin}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </StyledText>
  );
};

export default Text;
