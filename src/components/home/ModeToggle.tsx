"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || theme === undefined;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={
        "dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-700 rounded-full p-2 transition-opacity"
      }
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </button>
  );
}
