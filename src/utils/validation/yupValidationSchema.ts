import * as yup from "yup";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const ContactSchema = yup.object({
  fullName: yup.string().required("Please enter your full Name").trim(),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  company: yup.string().required("Please enter company name").trim(),
  mobile: yup
    .string()
    .required("Please enter your mobile no")
    .matches(phoneRegExp, "Mobile number is not valid"),
  message: yup.string().required("Please enter your message"),
});

export const AdminLoginFormSchema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
});
