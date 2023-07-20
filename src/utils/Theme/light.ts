import globals from "./gloabals";
import { DefaultTheme } from "styled-components"
const lightTheme: DefaultTheme = {
  theme : "light",
  colors: {
    primary: "#444444",
    secondary: "#2978b5",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    background: "#fcfcfc",
    text: "#555555;",
    backgroundLight: "#ffffff",
    boxShadowHoverColor: "rgba(41, 120, 181,0.4)"
  },
  ...globals,
};


export default lightTheme