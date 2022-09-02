import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && localStorage.theme) {
      setTheme(localStorage.theme);
      return;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
