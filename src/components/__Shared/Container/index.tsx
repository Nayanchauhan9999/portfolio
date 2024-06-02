"use client"
import React from "react";
import type { Container } from "./container.types";
import { StyledContainer } from "./container.style";

const Container = ({ children }: Container) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
