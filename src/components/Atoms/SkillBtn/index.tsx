import React from "react";
import { StyledSkillBtn } from "./SkillBtn.styles";
import { SkillBtnProps } from "./SkillBtn.types";

const SkillBtn = ({ children }: SkillBtnProps) => {
  return <StyledSkillBtn>{children}</StyledSkillBtn>;
};

export default SkillBtn;
