"use client";

import { Box, Icon, Text } from "@mond-design-system/theme";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export default function WindLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Header>
        <Box display="flex" alignItems="center" gap="xl" paddingTop="5">
          <Text size="xl" semantic="primary">
           Rustling Grass
          </Text>
        </Box>
      </Header>
      {children}
      <Footer />
    </Box>
  );
}
