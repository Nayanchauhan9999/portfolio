import React from "react";
import { HeadingProps } from "./Heading.types";
import { StyledHeading } from "./Heading.styles";

const Heading = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontweight,
  style,
  className,
  variant
}: HeadingProps) => {
  return (
    <StyledHeading
      className={className}
      size={size}
      textalign={textalign}
      style={style}
      margin={margin}
      fontweight={fontweight}
      color={color}
      as={variant}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
