import React from "react";
import { ContactWrapper, StyledContact } from "./Contact.styles";
import Container from "@/components/__Shared/Container";
import Heading from "@/components/__Shared/Heading";
import Paragraph from "@/components/__Shared/Paragraph";
import ContactCard from "../ContactCard";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container>
        <Heading
          variant="h2"
          textalign="center"
          color="primary"
          margin="large"
          size="xlarge"
        >
          CONTACT ME
        </Heading>
        <Paragraph textalign="center">
          Any questions? Just write me a message!
        </Paragraph>
        <ContactWrapper>
          <ContactCard
            cardTitle="Contact Information"
            cardDescription="Fill up the form i will back to you within 24 hours."
          />
          <ContactForm />
        </ContactWrapper>
      </Container>
    </StyledContact>
  );
};

export default Contact;
