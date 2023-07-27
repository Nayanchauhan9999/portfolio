import styled from "styled-components";

export const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem 0;
  padding : 1rem;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  div {
    flex: none;
  }
`;
export const StyledContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 1rem;
  justify-content: center;

  & > a > div:hover,
  & > a > div:hover > p {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
