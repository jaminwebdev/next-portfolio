import { useEffect, useState } from "react";

function useDarkMode() {
  const initialTheme = () => {
    if (typeof window !== "undefined" && localStorage.theme) {
      return localStorage.theme;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    const opposingTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(opposingTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
