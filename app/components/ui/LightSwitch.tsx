"use client";

import { useAppTheme } from "../../hooks/useAppTheme";
import { Box, Icon } from "@mond-design-system/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LightSwitch() {
  const { colorScheme, toggleColorScheme } = useAppTheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Box pr={2} cursor="pointer" onClick={toggleColorScheme}>
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
