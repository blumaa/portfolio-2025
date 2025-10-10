"use client";

import { Box, Text, Divider, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { educations } from "../globals/education";
import EducationCard from "../components/cards/EducationCard";

export default function Education() {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="sm" pt="md" isDarkMode={isDarkMode}>
      {educations.map((school, index) => (
        <EducationCard key={`${school.name}-${index}`} school={school} />
      ))}
      <Divider width="16.666667%" mb="sm" isDarkMode={isDarkMode} />
      <Box p="sm" isDarkMode={isDarkMode}>
        <Text variant="body-md" semantic="primary" isDarkMode={isDarkMode}>
          <Link href="#" isDarkMode={isDarkMode}>
            languages
          </Link>
          &nbsp; native english - spanish c1 - german b1.2
        </Text>
      </Box>
    </Box>
  );
}
