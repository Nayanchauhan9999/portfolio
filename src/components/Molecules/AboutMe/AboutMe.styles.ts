import Paragraph from "@/components/__Shared/Paragraph";
import { styled } from "styled-components";

export const AboutMeContainer = styled.section``;
export const CareerObjective = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text};
  width: 50%;
  margin: auto;
  text-align: justify;

  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
