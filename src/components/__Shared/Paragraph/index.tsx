import React from "react";
import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";

const Paragraph = ({
  children,
  size,
  textalign,
  color,
  margin,
  fontWeight,
  style,
  className,
}: ParagraphProps) => {
  return (
    <StyledParagraph
      className={className}
      size={size}
      textalign={textalign}
      style={style}
      margin={margin}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
