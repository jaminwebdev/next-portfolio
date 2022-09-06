import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<string | undefined>();

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
