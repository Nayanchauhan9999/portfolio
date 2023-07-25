import React from "react";
import { StyledLabel, StyledTextField } from "./TextField.styles";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "./TextField.types";
import Box from "@/components/__Shared/Box";
import Paragraph from "@/components/__Shared/Paragraph";

const TextField = ({
  name,
  control,
  defaultValue = "",
  inputsize = "medium",
  placeholder,
  label,
  type = "text",
  as,
  id,
  errormsg,
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onBlur, onChange, ref, value } }) => {
        return (
          <Box style={{ marginTop: "0.3rem", marginBottom: "0.3rem" }}>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
            <StyledTextField
              onChange={onChange}
              errormsg={errormsg}
              onBlur={onBlur}
              value={value}
              ref={ref}
              inputsize={inputsize}
              placeholder={placeholder}
              type={type}
              autoComplete="on"
              as={as}
              id={id}
            />
            {errormsg && (
              <Paragraph color="error" margin="none">
                &#9888; {errormsg}
              </Paragraph>
            )}
          </Box>
        );
      }}
    />
  );
};

export default TextField;
