"use client";

import { Box } from "@mond-design-system/theme";
import LightSwitch from "../components/ui/LightSwitch";

export default function StageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box as="nav" display="flex" justifyContent="flex-end" pb={10} px={10}>
        <Box display="flex" pt={5}>
          <LightSwitch />
        </Box>
      </Box>
      {children}
    </Box>
  );
}
