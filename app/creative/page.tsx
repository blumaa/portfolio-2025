import { Box } from "@mond-design-system/theme";
import { creatives } from "../globals/creatives";
import CreativeCard from "../components/cards/CreativeCard";

export default function Work() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="xxs" paddingLeft="4" paddingRight="4">
      {creatives.map((thing) => (
        <CreativeCard key={thing.name} creativeThing={thing} />
      ))}
    </Box>
  );
}
