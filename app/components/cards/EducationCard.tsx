"use client";

import { Box, Text, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Education } from "../../globals/education";

const EducationCard = ({ school }: { school: Education }) => {
  const { name, link, linkTarget, degree, graduationYear } = school;
  const { isDarkMode } = useAppTheme();

  return (
    <Box p="sm" isDarkMode={isDarkMode}>
      <Text variant="body-md" semantic="primary" isDarkMode={isDarkMode}>
        <Link href={link || "#"} target={linkTarget} isDarkMode={isDarkMode}>
          {name}
        </Link>
        {` ${degree}`}
        {graduationYear && ` ${graduationYear}`}
      </Text>
    </Box>
  );
};

export default EducationCard;
