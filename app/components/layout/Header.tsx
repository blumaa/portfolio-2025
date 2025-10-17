"use client";

import { Box } from "@mond-design-system/theme";
import LightSwitch from "../ui/LightSwitch";
import HeaderMenu from "../navigation/HeaderMenu";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pb={10}
      px={10}
    >
      <HeaderMenu />
      <Box display="flex" alignItems="center">
        {children}
      </Box>
      <Box display="flex" pt={5}>
        <LightSwitch />
      </Box>
    </Box>
  );
};

export { Header };
