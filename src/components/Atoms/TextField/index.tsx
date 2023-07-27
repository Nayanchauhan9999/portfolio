import React from "react";
import { StyledLabel, StyledTextField } from "./TextField.styles";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "./TextField.types";
import Box from "@/components/__Shared/Box";
import Paragraph from "@/components/__Shared/Paragraph";
import Text from "@/components/__Shared/Text";

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
  showReqSymbol
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onBlur, onChange, ref, value } }) => {
        return (
          <Box style={{ marginTop: "0.3rem", marginBottom: "0.3rem" }}>
            {label && (
              <StyledLabel htmlFor={id}>
                {label} {showReqSymbol && <Text color="error" size="small">*</Text>}
              </StyledLabel>
            )}
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
              <Paragraph color="error" margin="none" size="small">
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
