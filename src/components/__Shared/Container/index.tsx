"use client"
import React from "react";
import { Container } from "./container.types";
import { StyledContainer } from "./container.style";

const Container = ({ children }: Container) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
