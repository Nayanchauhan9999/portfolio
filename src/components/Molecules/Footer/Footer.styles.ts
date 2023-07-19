import styled from "styled-components";

export const FooterSection = styled.footer`
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.colors.background};
`;
export const PersonalBranding = styled.div``;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  flex-wrap: wrap;
  gap : 1rem;
  div {
    flex: 1;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
