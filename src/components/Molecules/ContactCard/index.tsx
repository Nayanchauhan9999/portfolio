import React from "react";
import { StyledContactCard, StyledContactDetails } from "./ContactCard.styles";
import Heading from "@/components/__Shared/Heading";
import { ContactCardProps } from "./ContactCard.types";
import Paragraph from "@/components/__Shared/Paragraph";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap, BiSolidPhone } from "react-icons/bi";
import IconWithCaption from "@/components/Atoms/IconWIthCaption";
import Link from "@/components/__Shared/Link";
import SocialMediaList from "../SocialMediaList";

const ContactCard = ({ cardTitle, cardDescription }: ContactCardProps) => {
  return (
    <StyledContactCard>
      <Heading variant="h3">{cardTitle}</Heading>
      <Paragraph>{cardDescription}</Paragraph>
      <StyledContactDetails>
        <Link href={"tel:9904392234"}>
          <IconWithCaption src={<BiSolidPhone />} caption={"+91-9904392234"} />
        </Link>
        <Link href={"mailto: nayanchauhan9999@gmail.com"}>
        <IconWithCaption
          src={<HiOutlineMail />}
          caption={"nayanchauhan9999@gmail.com"}
          />
          </Link>
        <IconWithCaption src={<BiMap />} caption={"Surendranagar,Gujarat"} />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d748.8066078136984!2d71.68543726951636!3d22.708376235857138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQyJzMwLjIiTiA3McKwNDEnMDkuOSJF!5e1!3m2!1sen!2sin!4v1689948915797!5m2!1sen!2sin" width="600" height="450" style={{border : 0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <SocialMediaList/>
      </StyledContactDetails>
    </StyledContactCard>
  );
};

export default ContactCard;
