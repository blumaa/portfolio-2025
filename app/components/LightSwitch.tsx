"use client";

import { useThemeContext } from "../context/theme";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LightSwitch() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <div className="pr-2">
      {!isDarkMode ? (
        <SunIcon
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-6 text-yellow-500 hover:cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-6 hover:cursor-pointer`}
        />
      )}
    </div>
  );
}
