"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "@/utils/Theme/dark";
import lightTheme from "@/utils/Theme/light";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { GlobalStyles } from "@/utils/Styles/globalStyles";
import { ThemeContext } from "@/utils/Context";

const fontFam = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio-Nayan Chauhan",
  description: "Created By - Nayan Chauhan",
};

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
    <html lang="en">
      <ThemeContext.Provider value={toggleTheme}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <body className={fontFam.className}>{children}</body>
        </ThemeProvider>
      </ThemeContext.Provider>
    </html>
  );
}
