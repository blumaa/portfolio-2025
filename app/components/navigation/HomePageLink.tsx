"use client";

import { Box, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { LINKS } from "../../globals/links";

const HomePageLink = ({ name }: { name: string }) => {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" alignItems="center" gap="sm" isDarkMode={isDarkMode}>
      {LINKS[name].icon(isDarkMode)}
      <Link href={LINKS[name].href as string} isDarkMode={isDarkMode}>
        {LINKS[name].title}
      </Link>
    </Box>
  );
};

export default HomePageLink;
