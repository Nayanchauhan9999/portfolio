import React from "react";
import { StyledAdminLoginForm } from "./AdminLoginForm.styles";
import TextField from "@/components/Atoms/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminLoginFormValues } from "./AdminLoginForm.types";
import { AdminLoginFormSchema } from "@/utils/validation/yupValidationSchema";
import Button from "@/components/Atoms/Button";

const AdminLoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminLoginFormValues>({
    resolver: yupResolver(AdminLoginFormSchema),
    shouldFocusError: false,
    mode: "onSubmit",
  });

  const onSubmit = (data: AdminLoginFormValues) => {
    console.log(data);
  };

  return (
    <StyledAdminLoginForm>
      <TextField
        name="username"
        bordersides="all"
        control={control}
        placeholder="username"
        type="text"
        label="Username"
        id="adminUser"
        errormsg={errors?.username?.message}
        showReqSymbol
        radius="0.25rem"
        pad={{ horizontal: "1rem" }}
        margin={{ top: "0.4rem" }}
        borderwidth="1px"
      />
      <TextField
        name="password"
        bordersides="all"
        control={control}
        placeholder="password"
        type="password"
        label="Password"
        id="adminPassword"
        errormsg={errors?.password?.message}
        showReqSymbol
        radius="0.25rem"
        pad={{ start: "1rem" }}
        margin={{ top: "0.4rem" }}
        borderwidth="1px"
      />
      <Button bgcolor="blue" onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
    </StyledAdminLoginForm>
  );
};

export default AdminLoginForm;
