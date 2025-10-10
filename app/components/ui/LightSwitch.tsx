"use client";

import { useAppTheme } from "../../hooks/useAppTheme";
import { Box, Icon } from "@mond-design-system/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function LightSwitch() {
  const { isDarkMode, toggleColorScheme } = useAppTheme();

  return (
    <Box pr="sm" cursor="pointer" isDarkMode={isDarkMode} onClick={toggleColorScheme}>
      {!isDarkMode ? (
        <Icon size="md" isDarkMode={isDarkMode}>
          <SunIcon />
        </Icon>
      ) : (
        <Icon size="md" isDarkMode={isDarkMode}>
          <MoonIcon />
        </Icon>
      )}
    </Box>
  );
}
