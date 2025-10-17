"use client";

import { Box, Text, Link } from "@mond-design-system/theme";

const Footer = () => {
  return (
    <Box as="footer">
      <Box pl={10} pb={10}>
        <Text variant="caption" semantic="secondary">
          © 2025{" "}
          <Link href="mailto:blumaa@gmail.com" size="small">
            Aaron Blum
          </Link>
          {" "}
          made with the
          {" "}
          <Link href="https:github.com/blumaa/mond-design-system" size="small" target="_blank">
            Mond Design System
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export { Footer };
