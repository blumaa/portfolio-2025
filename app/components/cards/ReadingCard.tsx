"use client";

import Image from "next/image";
import { Box, Text, Link, Card, CardBody } from "@mond-design-system/theme";
import { Reading } from "../../globals/readings";

const ReadingCard = ({ reading }: { reading: Reading }) => {
  const { title, link, linkTarget, author, description, imageUrl } = reading;

  return (
    <Card variant="elevated" hoverable>
      <CardBody>
        <Box>
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="flex-end">
              {imageUrl && (
                <Box>
                  <Image src={imageUrl} alt={title} width={100} height={100} />
                </Box>
              )}
              <Box
                padding="2"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Link href={link || "#"} target={linkTarget} size="large">
                  {title}
                </Link>
                {author && (
                  <Text size="sm" semantic="secondary">
                    {author}
                  </Text>
                )}
              </Box>
            </Box>
            <Box>
              <Text size="sm" semantic="primary">
                {description}
              </Text>
            </Box>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ReadingCard;
