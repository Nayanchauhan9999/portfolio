import styled from "styled-components";

export const StyledIconWithCaption = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  font-family: inherit;
`;
