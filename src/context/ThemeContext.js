"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
        return storedTheme;
      } else {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
    }
    return "dark";
  });

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
