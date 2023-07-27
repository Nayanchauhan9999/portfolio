import { styled } from "styled-components";

export const StyledContact = styled.section`
  scroll-margin-top: 90px;
  
`;

export const ContactWrapper = styled.section`
  display: flex;
  gap: 2rem;
  div {
    flex: 1;
  }
  form {
    flex: 2;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 992px) {
    gap: 2rem;
    div,
    form {
      flex: 1;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
