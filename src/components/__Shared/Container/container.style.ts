import { styled } from "styled-components";

export const StyledContainer = styled.div`
  padding : 0 1rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing:border-box;
  
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
