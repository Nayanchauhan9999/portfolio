import React from "react";
import { StyledLInk } from "./Link.styles";
import { LinkProp } from "./Link.types";

const Link = ({children,href}:LinkProp) => {
  return <StyledLInk href={href}>{children}</StyledLInk>;
};

export default Link;
