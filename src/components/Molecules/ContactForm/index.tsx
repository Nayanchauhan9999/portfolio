import React, { useState } from "react";
import { InputFieldWrapper, StyledContactForm } from "./ContactForm.styles";
import TextField from "@/components/Atoms/TextField";
import { useForm } from "react-hook-form";
import ButtonFillNormal from "@/components/Atoms/ButtonFillNormal";
import Box from "@/components/__Shared/Box";
import { ContactFormValues } from "./ContactForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "@/utils/validation/yupValidationSchema";
import Heading from "@/components/__Shared/Heading";
import SuccessAlertModal from "../Models/SuccessAlertModal";
import Paragraph from "@/components/__Shared/Paragraph";
import Link from "@/components/__Shared/Link";
import Text from "@/components/__Shared/Text";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<ContactFormValues | undefined>();
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

  const onSubmit = async (data: ContactFormValues) => {
    setUserData(data);
    reset();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error)
    }

    setOpen(true);
  };

  return (
    <StyledContactForm>
      <SuccessAlertModal
        open={open}
        title="Form Submited"
        description={
          <>
            <Paragraph>
              Thank you for contacting me{" "}
              {userData && <Text color="secondary">{userData?.fullName}</Text>}.
              Congratulations, form has been submited Successfully.
            </Paragraph>
            <Paragraph>
              I will try to contact you within 2 bussiness days. You can also
              mail me on my given below email for faster response{" "}
              <Link href="mailto: nayanchauhan9999@gmail.com">
                <Text color="secondary">nayanchauhan9999@gmail.com.</Text>
              </Link>
            </Paragraph>
            <Paragraph>Meanwhile stay safe and take care.</Paragraph>
          </>
        }
        onClose={() => setOpen(false)}
      />
      <Heading
        variant="h3"
        color="secondary"
        margin="none"
        textalign="center"
        style={{ marginBottom: "1rem" }}
      >
        Contact Form
      </Heading>
      <InputFieldWrapper>
        <TextField
          name="fullName"
          placeholder="Full Name"
          control={control}
          label="Full Name"
          id="fullname"
          errormsg={errors.fullName?.message}
          showReqSymbol
        />

        <TextField
          name="company"
          placeholder="Company"
          control={control}
          label="Company"
          type="text"
          id="company"
          errormsg={errors.company?.message}
          showReqSymbol
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
          showReqSymbol
        />
        <TextField
          name="mobile"
          placeholder="Mobile No"
          control={control}
          label="Mobile No"
          type="tel"
          id="mobile"
          errormsg={errors.mobile?.message?.toString()}
          showReqSymbol
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
        showReqSymbol
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
    </StyledContactForm>
  );
};

export default ContactForm;
