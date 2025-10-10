"use client";

import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { Box, Text, Icon } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function CreativeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="surface.background" isDarkMode={isDarkMode}>
      <Header>
        <Box display="flex" alignItems="center" gap="sm" isDarkMode={isDarkMode}>
          <Icon size="md" isDarkMode={isDarkMode}>
            <PaintBrushIcon />
          </Icon>
          <Text variant="body-lg" semantic="primary" isDarkMode={isDarkMode}>
            creative
          </Text>
        </Box>
      </Header>
      <Box flex="1" isDarkMode={isDarkMode}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
