import NextLink from "next/link";
import { Box, Text, Link } from "@mond-design-system/theme";
import { CreativeThing } from "../../globals/creatives";

const CreativeCard = ({ creativeThing }: { creativeThing: CreativeThing }) => {
  const { name, link, linkTarget, description } = creativeThing;
  const isInternalLink = link?.startsWith('/');

  return (
    <Box
      width="100%"
      maxWidth="66.666667%"
      padding={4}
      borderRadius="8px"
    >
      <Text variant="body-md" semantic="primary">
        <Link
          as={isInternalLink ? NextLink : undefined}
          href={link || "#"}
          target={isInternalLink ? undefined : linkTarget}
          size="large"
        >
          {name}
        </Link>
        {typeof description() === "string" ? ` ${description()}` : description()}
      </Text>
    </Box>
  );
};

export default CreativeCard;
