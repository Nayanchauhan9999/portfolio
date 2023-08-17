import React from "react";
import { pad,margin } from "@/utils/Proptypes/proptypes";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  width?: string;
  bgcolor?: string;
  align?: "center" | "left" | "right";
  onClick?: () => void;
  pad?: pad;
  margin?: margin;
}
