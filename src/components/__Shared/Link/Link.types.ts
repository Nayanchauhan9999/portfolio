import { LinkProps } from "next/link";
import React from "react";

export interface LinkProp extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}
