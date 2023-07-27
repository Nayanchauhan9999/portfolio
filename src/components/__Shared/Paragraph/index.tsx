import React from "react";
import { ParagraphProps } from "./Paragraph.types";
import { StyledParagraph } from "./Paragraph.style";
import { StyleSheetManager } from "styled-components";

const customProps = (prop: any) => !["textalign", "margin"].includes(prop);

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
    <StyleSheetManager shouldForwardProp={customProps}>
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
    </StyleSheetManager>
  );
};

export default Paragraph;
