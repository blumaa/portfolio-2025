"use client";

import { Box, Text, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { CreativeThing } from "../../globals/creatives";

const CreativeCard = ({ creativeThing }: { creativeThing: CreativeThing }) => {
  const { name, link, linkTarget, description } = creativeThing;
  const { isDarkMode } = useAppTheme();

  return (
    <Box
      width="100%"
      maxWidth="66.666667%"
      p="md"
      borderRadius="8px"
      isDarkMode={isDarkMode}
    >
      <Text variant="body-md" semantic="primary" isDarkMode={isDarkMode}>
        <Link href={link || "#"} target={linkTarget} isDarkMode={isDarkMode}>
          {name}
        </Link>
        {typeof description(isDarkMode) === "string" ? ` ${description(isDarkMode)}` : description(isDarkMode)}
      </Text>
    </Box>
  );
};

export default CreativeCard;
