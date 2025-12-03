"use client";

import { useThemeContext } from "@/app/providers/ThemeContext";
import { Box, Icon } from "@mond-design-system/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LightSwitch() {
  const { mode, toggleMode } = useThemeContext();
  const isDarkMode = mode === 'dark';

  return (
    <Box paddingRight="2" onClick={toggleMode} className="cursor-pointer">
      {isDarkMode ? (
        <Icon size="md">
          <MoonIcon />
        </Icon>
      ) : (
        <Icon size="md">
          <SunIcon />
        </Icon>
      )}
    </Box>
  );
}
