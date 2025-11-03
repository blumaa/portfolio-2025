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
      paddingBottom={10}
      paddingLeft={10}
      paddingRight={10}
    >
      <HeaderMenu />
      <Box display="flex" alignItems="center">
        {children}
      </Box>
      <Box display="flex" paddingTop={5}>
        <LightSwitch />
      </Box>
    </Box>
  );
};

export { Header };
