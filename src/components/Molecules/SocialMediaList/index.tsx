import Box from "@/components/__Shared/Box";
import Paragraph from "@/components/__Shared/Paragraph";
import React from "react";
import { SocialMediaGroup } from "./SocialMediaList.styles";
import NavButton from "@/components/Atoms/NavButton";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { SocialMediaListProps } from "./SocialMediaList.types";

const SocialMediaList = ({title}:SocialMediaListProps) => {
  return (
    <Box>
      <Paragraph textalign="center" margin="xsmall">
        {title}
      </Paragraph>
      <SocialMediaGroup>
        <NavButton url="https://github.com/Nayanchauhan9999">
          <AiOutlineGithub size={25} />
        </NavButton>
        <NavButton url="https://www.linkedin.com/in/chauhan-nayan">
          <AiFillLinkedin size={25} color="#0077b5" />
        </NavButton>
        <NavButton url="https://instagram.com/nayanchauhan9999?igshid=ZGUzMzM3NWJiOQ==">
          <AiOutlineInstagram size={25} color="#d62976" />
        </NavButton>
        <NavButton url="mailto: nayanchauhan9999@gmail.com">
          <HiOutlineMail size={25} color="#BB001B" />
        </NavButton>
      </SocialMediaGroup>
    </Box>
  );
};

export default SocialMediaList;
