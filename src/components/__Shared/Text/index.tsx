import React from "react";
import { StyledText } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontweight,
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
      fontweight={fontweight}
      color={color}
    >
      {children}
    </StyledText>
  );
};

export default Text;
