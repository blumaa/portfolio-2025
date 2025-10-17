"use client";

import Image from "next/image";
import { Box, Text, Link } from "@mond-design-system/theme";
import { Reading } from "../../globals/readings";

const ReadingCard = ({ reading }: { reading: Reading }) => {
  const { title, link, linkTarget, author, description, type, imageUrl } = reading;

  return (
    <Box width="50%" maxWidth="50%">
      <Box
        p={10}
        border="1px solid"
        borderRadius="10px"
        transition="transform 0.3s ease-out"
        cursor="pointer"
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" pt={2} alignItems="flex-end">
            {imageUrl && (
              <Box>
                <Image src={imageUrl} alt={title} width={100} height={100} />
              </Box>
            )}
            <Box p={2} display="flex" justifyContent="center" flexDirection="column">
              <Link href={link || "#"} target={linkTarget} size="large">
                {title}
              </Link>
              {author && (
                <Text variant="body-sm" semantic="secondary">
                  {author}
                </Text>
              )}
            </Box>
          </Box>
          <Box py={2}>
            <Text variant="body-md" semantic="primary">
              {description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReadingCard;
