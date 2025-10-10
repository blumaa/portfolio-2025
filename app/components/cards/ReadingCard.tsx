"use client";

import Image from "next/image";
import { Box, Text, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Reading } from "../../globals/books";

const ReadingCard = ({ reading }: { reading: Reading }) => {
  const { title, link, linkTarget, author, description, type, imageUrl } = reading;
  const { isDarkMode } = useAppTheme();

  return (
    <Box width="50%" maxWidth="50%" isDarkMode={isDarkMode}>
      <Box
        p="sm"
        borderRadius="2px"
        transition="transform 0.3s ease-out"
        cursor="pointer"
        isDarkMode={isDarkMode}
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        <Box display="flex" flexDirection="column" isDarkMode={isDarkMode}>
          <Box display="flex" pt="sm" alignItems="flex-end" isDarkMode={isDarkMode}>
            {imageUrl && (
              <Box isDarkMode={isDarkMode}>
                <Image src={imageUrl} alt={title} width={100} height={100} />
              </Box>
            )}
            <Box p="sm" display="flex" justifyContent="center" flexDirection="column" isDarkMode={isDarkMode}>
              <Link href={link || "#"} target={linkTarget} isDarkMode={isDarkMode} size="large">
                {title}
              </Link>
              {author && (
                <Text variant="body-sm" semantic="secondary" isDarkMode={isDarkMode}>
                  {author}
                </Text>
              )}
            </Box>
          </Box>
          <Box py="sm" isDarkMode={isDarkMode}>
            <Text variant="body-md" semantic="primary" isDarkMode={isDarkMode}>
              {description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReadingCard;
