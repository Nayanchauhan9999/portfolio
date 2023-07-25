import React from "react";
import { HeadingProps } from "./Heading.types";
import { StyledHeading } from "./Heading.styles";
import { StyleSheetManager } from "styled-components";

const customProps = (prop: any) => !["textalign", "margin"].includes(prop);

const Heading = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontWeight,
  style,
  className,
  variant,
}: HeadingProps) => {
  return (
    <StyleSheetManager shouldForwardProp={customProps}>
      <StyledHeading
        className={className}
        size={size}
        textalign={textalign}
        style={style}
        margin={margin}
        fontWeight={fontWeight}
        color={color}
        as={variant}
      >
        {children}
      </StyledHeading>
    </StyleSheetManager>
  );
};

export default Heading;
