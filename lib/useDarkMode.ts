import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );

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
