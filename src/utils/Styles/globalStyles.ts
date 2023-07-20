import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    --scroll-behavior: smooth!important;
    scroll-behavior: smooth!important;
    }
    body{
    background-color: ${(props) => props.theme.colors.background};
    margin : 0;
    box-sizing:border-box;
    }
    &::selection{
    background-color: ${(props) => props.theme.colors.secondary};
    color : ${(props) => props.theme.colors.backgroundLight};
}
`;
