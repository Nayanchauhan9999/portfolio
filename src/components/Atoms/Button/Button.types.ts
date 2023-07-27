import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  width?: string;
  bgcolor?: string;
  align?: "center" | "left" | "right";
  onClick?: () => void;
}
