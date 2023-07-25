import styled from "styled-components";

export const StyledContactForm = styled.form``;

export const ContactFormWrapper = styled.div``;
export const InputFieldWrapper = styled.div`
  display: flex;
  gap: 2rem;

  div {
    flex: 1;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 0;
  }
`;
