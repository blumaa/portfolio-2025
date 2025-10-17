"use client";

import { Box } from "@mond-design-system/theme";
import { readings } from "../globals/readings";
import ReadingCard from "../components/cards/ReadingCard";

export default function Books() {
  return (
    <Box pt={4}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={10}>
        {readings.map((reading) => (
          <ReadingCard key={reading.title} reading={reading} />
        ))}
      </Box>
    </Box>
  );
}
