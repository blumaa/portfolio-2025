"use client";

import { Box, Icon, Text } from "@mond-design-system/theme";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { TvIcon } from "@heroicons/react/24/solid";

export default function TelevisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header>
        <Box display="flex" alignItems="center" gap={10} pt={5}>
          <Icon size="md">
            <TvIcon />
          </Icon>
          <Text variant="title" semantic="primary">
            television
          </Text>
        </Box>
      </Header>
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}
