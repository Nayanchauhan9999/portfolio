import React from "react";
import { InputFieldWrapper } from "./ContactForm.styles";
import TextField from "@/components/Atoms/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import ButtonFillNormal from "@/components/Atoms/ButtonFillNormal";
import Box from "@/components/__Shared/Box";
import { ContactFormValues } from "./ContactForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "@/utils/validation/yupValidationSchema";

const ContactForm: SubmitHandler<ContactFormValues> = () => {
  //using useForm hook
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(ContactSchema),
    shouldFocusError: false,
    mode: "all",
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    reset();
  };
  return (
    <form>
      <InputFieldWrapper>
        <TextField
          name="fullName"
          placeholder="Full Name"
          control={control}
          label="Full Name"
          id="fullname"
          errormsg={errors.fullName?.message}
        />

        <TextField
          name="company"
          placeholder="Company"
          control={control}
          label="Company"
          type="text"
          id="company"
          errormsg={errors.company?.message}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <TextField
          name="email"
          placeholder="Email"
          control={control}
          label="Email"
          type="email"
          id="email"
          errormsg={errors.email?.message}
        />
        <TextField
          name="mobile"
          placeholder="Mobile No"
          control={control}
          label="Mobile No"
          type="tel"
          id="mobile"
          errormsg={errors.mobile?.message?.toString()}
        />
      </InputFieldWrapper>
      <TextField
        name="message"
        placeholder="write me message..."
        control={control}
        label="Message"
        type="text"
        as="textarea"
        id="message"
        errormsg={errors.message?.message}
      />
      <Box style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <ButtonFillNormal
          title="Submit"
          color="secondary"
          width="full"
          fontWeight="500"
          onClick={handleSubmit(onSubmit)}
        />
      </Box>
    </form>
  );
};

export default ContactForm;
