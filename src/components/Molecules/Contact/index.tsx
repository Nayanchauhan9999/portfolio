import React from "react";
import { ContactWrapper, StyledContact } from "./Contact.styles";
import Container from "@/components/__Shared/Container";
import Heading from "@/components/__Shared/Heading";
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
          size="xlarge"
          margin="medium"
          // style={{ margin: "1rem 0" }}
        >
          CONTACT ME
        </Heading>
        {/* <Paragraph
          textalign="center"
          margin="none"
          style={{ marginBottom: "2rem" }}
        >
          Any questions? Just write me a message!
        </Paragraph> */}
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
