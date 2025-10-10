"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { readings } from "../globals/books";
import ReadingCard from "../components/cards/ReadingCard";

export default function Books() {
  const { isDarkMode } = useAppTheme();

  return (
    <Box pt="md" isDarkMode={isDarkMode}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="sm" isDarkMode={isDarkMode}>
        {readings.map((reading) => (
          <ReadingCard key={reading.title} reading={reading} />
        ))}
      </Box>
    </Box>
  );
}
