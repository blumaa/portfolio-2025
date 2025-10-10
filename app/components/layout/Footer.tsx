"use client";

import { Box, Text, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";

const Footer = () => {
  const { isDarkMode } = useAppTheme();

  return (
    <Box as="footer" isDarkMode={isDarkMode}>
      <Box p="md" isDarkMode={isDarkMode}>
        <Text variant="caption" semantic="secondary" isDarkMode={isDarkMode}>
          © 2025{" "}
          <Link href="mailto:blumaa@gmail.com" isDarkMode={isDarkMode} size="small">
            Aaron Blum
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export { Footer };
