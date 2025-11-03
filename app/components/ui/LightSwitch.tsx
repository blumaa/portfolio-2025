"use client";

import { useTheme } from "@mond-design-system/theme";
import { Box, Icon } from "@mond-design-system/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LightSwitch() {
  const { mode, toggleMode } = useTheme();
  const isDarkMode = mode === 'dark';

  return (
    <Box paddingRight={2} cursor="pointer" onClick={toggleMode}>
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
