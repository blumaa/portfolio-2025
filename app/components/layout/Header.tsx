"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import LightSwitch from "../ui/LightSwitch";
import HeaderMenu from "../navigation/HeaderMenu";

const Header = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useAppTheme();

  return (
    <Box as="nav" display="flex" alignItems="center" justifyContent="space-between" isDarkMode={isDarkMode} pb={10} px={10}>
      <HeaderMenu />
      <Box display="flex" alignItems="center" gap="sm" isDarkMode={isDarkMode}>
        {children}
      </Box>
      <LightSwitch />
    </Box>
  );
};

export { Header };
