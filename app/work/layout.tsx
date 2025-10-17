"use client";

import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function WorkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header>
        <Box display="flex" alignItems="center" gap={10} pt={5}>
          <Icon size="md">
            <WrenchScrewdriverIcon />
          </Icon>
          <Text variant="title" semantic="primary">
            work
          </Text>
        </Box>
      </Header>
      <Box flex="1" display="flex" flexDirection="column" alignItems="center">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
