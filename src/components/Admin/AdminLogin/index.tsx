import AdminLoginForm from "@/components/Molecules/AdminLoginForm";
import {
  BackToHomepageButton,
  LoginFormWrapper,
  StyledAdminLogin,
} from "./AdminLogin.styles";
import Heading from "@/components/__Shared/Heading";
import { Poppins } from "next/font/google";
import { IoIosArrowRoundBack } from "react-icons/io";
import Text from "@/components/__Shared/Text";
import Link from "@/components/__Shared/Link";
import Paragraph from "@/components/__Shared/Paragraph";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const AdminLogin = () => {
  return (
    <StyledAdminLogin className={poppins.className}>
      <LoginFormWrapper>
        <Heading variant="h1" textalign="center" color="secondary" size="large">
          Admin Login
        </Heading>
        <AdminLoginForm />
      </LoginFormWrapper>
      <Link href="/">
        <BackToHomepageButton>
          <IoIosArrowRoundBack size={35} color="grey" />
          <Text>Home</Text>
        </BackToHomepageButton>
      </Link>
      <Paragraph textalign="justify">
        Admin dashboard is currently under development, Check after some time.
        you can also checkout current status of admin dashbord from
        <Link href={"/admin/portal"}>
          {" "}
          <Text color="blue">here</Text>.
        </Link>
      </Paragraph>
    </StyledAdminLogin>
  );
};

export default AdminLogin;
