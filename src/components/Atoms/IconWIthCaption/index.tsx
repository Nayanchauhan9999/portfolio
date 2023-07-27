import React from "react";
import { StyledIconWithCaption } from "./IconWithCaption.styles";
import { IconWIthCaptionProps } from "./IconWithCaption.types";
import Paragraph from "@/components/__Shared/Paragraph";

const IconWithCaption = ({ src, caption }: IconWIthCaptionProps) => {
  return (
    <StyledIconWithCaption>
      {src}
      <Paragraph margin="none" color="primary">{caption}</Paragraph>
    </StyledIconWithCaption>
  );
};

export default IconWithCaption;
