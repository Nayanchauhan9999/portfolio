import globals from "./gloabals";
import {DefaultTheme} from "styled-components"
const darkTheme: DefaultTheme = {
  theme: "dark",
  colors: {
    primary: "#cdcdff",
    secondary: "#90a0d9",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    background: "#23283e",
    text: "#bdbddd",
    backgroundLight: "#2a2f4c",
    boxShadowHoverColor: "rgba(144, 160, 217,0.16)",
    lightGray: "rgba(149, 165, 166)",
    error: "red",
  },
  ...globals,
};


export default darkTheme