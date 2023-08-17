"use client";
import styled from "styled-components";

export const AdminPortalWrapper = styled.div`
  width:20vw;
  background-color: white;
  border-right: 1px solid #dddddd;
  height: 100vh;
  box-sizing: border-box;
  position:fixed;
  left:0;
  top: 0;
  overflow-y:auto;
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
