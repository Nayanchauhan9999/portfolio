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
    </StyledAdminLogin>
  );
};

export default AdminLogin;
