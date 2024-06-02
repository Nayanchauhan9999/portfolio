import { HTMLAttributeAnchorTarget } from "react";

export interface ButtonFillProps {
  title: string;
  url: string;
  borderwidth?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string | "secondary";
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}
