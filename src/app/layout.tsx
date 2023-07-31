"use client";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "@/utils/Theme/dark";
import lightTheme from "@/utils/Theme/light";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { GlobalStyles } from "@/utils/Styles/globalStyles";
import { ThemeContext } from "@/utils/Context";
import StyledComponentsRegistry from "@/config/registry";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["500"],
});

export default function RootLayout({ children }: layoutProps) {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <html lang="en">
          <head>
            <title>Nayan Chauhan - Web developer</title>
            {/* <base href="https://nayan-chauhan-portfolio.vercel.app/" target="_blank" /> */}
            <meta
              name="description"
              content="portfolio website - Nayan chauhan"
            />
            <meta name="author" content="Nayan Chauhan" />
            <meta
              name="keywords"
              content="HTML, CSS, javascript, Nayan , Chauhan, Portfolio, portfolio example, portfolio site, personal website, portfolio website, react, reactjs, react website, nextjs, nextjs website, nextjs project, best portfolio websites, web developer portfolio, portfolio website design, web design portfolio, build a portfolio website, portfolio website templates, personal portfolio, freelance designer website, personal website templates"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="./apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="./favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="./favicon-16x16.png"
            />
            {/* <link rel="manifest" href="./site.webmanifest" /> */}
            <link rel="icon" href="./favicon.ico" sizes="any" />
          </head>
          <body className={mulish.className}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
