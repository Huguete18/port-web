"use client";
import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let localTheme = "light";
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        localTheme = "dark";
      }
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.theme = theme;
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      <main className={`${theme}`}> {children} </main>
    </ThemeContext.Provider>
  );
};
