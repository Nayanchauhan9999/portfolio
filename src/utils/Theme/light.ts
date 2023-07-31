import globals from "./gloabals";
import { DefaultTheme } from "styled-components";
const lightTheme: DefaultTheme = {
  theme: "light",
  colors: {
    primary: "#444444",
    secondary: "#2978b5",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    background: "#f7f5fc",
    text: "#555555;",
    backgroundLight: "#ffffff",
    boxShadowHoverColor: "rgba(41, 120, 181,0.4)",
    lightGray: "rgba(149, 165, 166)",
    error: "rgb(220, 53, 69)",
    success: "rgb(25, 135, 84)",
    warning: "rgb(255, 193, 7)",
    dark: "rgb(33, 37, 41)",
    blue: "#0070f3",
  },
  ...globals,
};

export default lightTheme;
