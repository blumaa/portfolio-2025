"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import AnimatedMoon from "./animations/AnimatedMoon";
import { AnimatedTitle } from "./animations/AnimatedTitle";

export default function AnimationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="surface.background" isDarkMode={isDarkMode}>
      <Header>
        <Box display="flex" alignItems="center" gap="sm" isDarkMode={isDarkMode}>
          <Box height="32px" isDarkMode={isDarkMode}>
            <AnimatedMoon />
          </Box>
          <AnimatedTitle />
        </Box>
      </Header>
      <Box flex="1" isDarkMode={isDarkMode}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
