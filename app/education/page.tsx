"use client";

import { Box, Link, Text, Divider } from "@mond-design-system/theme";
import { educations } from "../globals/education";
import EducationCard from "../components/cards/EducationCard";

export default function Education() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="xxs"
      paddingLeft="4"
      paddingRight="4"
    >
      {educations.map((school, index) => (
        <EducationCard key={`${school.name}-${index}`} school={school} />
      ))}
      <Divider />
      <Box padding="2" gap="xs" display="flex">
        <Link href={"#"}>languages</Link>
        <Text size="md" semantic="primary">
          &nbsp; native english - spanish c1 - german b1.2
        </Text>
      </Box>
    </Box>
  );
}
