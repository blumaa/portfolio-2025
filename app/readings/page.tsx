import { Box } from "@mond-design-system/theme";
import { readings } from "../globals/readings";
import ReadingCard from "../components/cards/ReadingCard";

export default function Books() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="xxs"
        paddingLeft="4"
        paddingRight="4"
      >
        {readings.map((reading) => (
          <ReadingCard key={reading.title} reading={reading} />
        ))}
      </Box>
    </Box>
  );
}
