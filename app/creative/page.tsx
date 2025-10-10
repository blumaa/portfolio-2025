"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { creatives } from "../globals/creatives";
import CreativeCard from "../components/cards/CreativeCard";

export default function Work() {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="md" pt="md" isDarkMode={isDarkMode}>
      {creatives.map((thing) => (
        <CreativeCard key={thing.name} creativeThing={thing} />
      ))}
    </Box>
  );
}
