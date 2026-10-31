"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  function toggleTheme() {
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
    >
      <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>

      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
