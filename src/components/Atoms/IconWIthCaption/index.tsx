import React from "react";
import { StyledIconWithCaption } from "./IconWithCaption.styles";
import { IconWIthCaptionProps } from "./IconWithCaption.types";
import Paragraph from "@/components/__Shared/Paragraph";
import { StyleSheetManager } from "styled-components";

const customProps = (props: string) => !["gap"].includes(props);

const IconWithCaption = ({
  src,
  caption,
  gap = "0.6rem",
}: IconWIthCaptionProps) => {
  return (
    <StyleSheetManager shouldForwardProp={customProps}>
      <StyledIconWithCaption gap={gap}>
        {src}
        <Paragraph margin="none" color="primary">
          {caption}
        </Paragraph>
      </StyledIconWithCaption>
    </StyleSheetManager>
  );
};

export default IconWithCaption;
