import { Box, Link, Text, Divider } from "@mond-design-system/theme";
import { educations } from "../globals/education";
import EducationCard from "../components/cards/EducationCard";

export default function Education() {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={10}>
      {educations.map((school, index) => (
        <EducationCard key={`${school.name}-${index}`} school={school} />
      ))}
      <Divider />
      <Box p={2}>
        <Link href={"#"} >
        languages
        </Link>
        <Text variant="body-md" semantic="primary">
          &nbsp; native english - spanish c1 - german b1.2
        </Text>
      </Box>
    </Box>
  );
}
