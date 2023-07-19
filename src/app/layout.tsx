"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../utils/Styles/gobals.css";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "@/utils/Theme/dark";
import lightTheme from "@/utils/Theme/light";
import { layoutProps } from "@/utils/Proptypes/proptypes";
import { Body } from "@/components/Atoms/Body/Body.styles";

const fontFam = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio-Nayan Chauhan",
  description: "Created By - Nayan Chauhan",
};

const ThemeContext = createContext<string | null>(null);
const SetThemeContext = createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);

export default function RootLayout({ children }: layoutProps) {
  const [theme, setTheme] = useState<string>("light");
  return (
    <html lang="en">
      <ThemeContext.Provider value={theme}>
        <SetThemeContext.Provider value={setTheme}>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Body className={fontFam.className}>{children}</Body>
          </ThemeProvider>
        </SetThemeContext.Provider>
      </ThemeContext.Provider>
    </html>
  );
}

export { ThemeContext, SetThemeContext };
