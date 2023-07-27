import styled from "styled-components";

export const StyledSuccessAlertModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 0px 4px 6px -2px, rgba(0, 0, 0, 0.3) 0px -1px 9px -2px;
  /* box-shadow: ${(props) => props.theme.colors.boxShadow}; */
  max-width: 28rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 7;

  @media screen and (max-width: 992px) {
    width: 91%;
  }
`;
export const StyledModalHeading = styled.header`
  position: relative;
  svg {
    position: absolute;
    top: -9px;
    right: 0;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: color 0.3s;
    border-radius: 0.375rem;
    padding: 0.3rem;
    &:hover {
      /* color: ${(props) => props.theme.colors.secondary}; */
      background-color: ${(props) => props.theme.colors.background};
      box-shadow: inset 0 0 3px 50px rgba(0, 0, 0, 0.06);
    }
  }
`;
export const StyledModalContent = styled.div``;
export const StyledModalFooter = styled.footer`
  text-align: center;
`;
