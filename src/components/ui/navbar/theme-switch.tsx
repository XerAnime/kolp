"use client";
import React from "react";
import { useTheme } from "next-themes";

import { MoonStar, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const isLightTheme = theme === "light";

  function handleThemeSwitch() {
    if (isLightTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div
      className="flex justify-between content-center w-full"
      onClick={handleThemeSwitch}
    >
      <h1>{isLightTheme ? "Dark" : "Light"}</h1>
      {isLightTheme ? <MoonStar size={17} /> : <Sun size={17} />}
    </div>
  );
};

export default ThemeSwitch;
