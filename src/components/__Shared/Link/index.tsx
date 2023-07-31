import React from "react";
import { StyledLInk } from "./Link.styles";
import { LinkProp } from "./Link.types";

const Link = ({children,href,className}:LinkProp) => {
  return <StyledLInk href={href} className={className}>{children}</StyledLInk>;
};

export default Link;
