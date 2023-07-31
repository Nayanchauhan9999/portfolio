import styled from "styled-components";

export const StyledAdminLogin = styled.main`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const LoginFormWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  width: 40%;
  padding: 3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 650px) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const BackToHomepageButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  color: gray;
  svg {
    transition: fill 0.3s;
  }
  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.blue};
    }
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
