import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
