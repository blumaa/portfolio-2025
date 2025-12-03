import NextLink from "next/link";
import { Box, Text, Link, Card, CardBody } from "@mond-design-system/theme";
import { CreativeThing } from "../../globals/creatives";

const CreativeCard = ({ creativeThing }: { creativeThing: CreativeThing }) => {
  const { name, link, linkTarget, description } = creativeThing;
  const isInternalLink = link?.startsWith("/");

  return (
    <Box>
      <Card variant="elevated" hoverable>
        <CardBody>
          <Text size="sm" semantic="primary">
            <Link
              as={isInternalLink ? NextLink : undefined}
              href={link || "#"}
              target={isInternalLink ? undefined : linkTarget}
              size="large"
            >
              {name}
            </Link>
            {typeof description() === "string"
              ? ` ${description()}`
              : description()}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CreativeCard;
