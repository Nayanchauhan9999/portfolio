"use client";
import styled from "styled-components";

export const AdminPortalWrapper = styled.div`
  min-width: 14rem;
  min-height: 100vh;
  background-color: white;
  box-sizing: border-box;
  border-right: 1px solid #dddddd;
`;
export const AdminPortalSidebar = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding: 0.6rem;
    transition: all 0.3s;
    &.active {
      svg,
      p {
        color: ${(props) => props.theme.colors.blue};
      }
    }
    &:hover:not(.active) {
      font-weight: bold;
    }
  }
`;
