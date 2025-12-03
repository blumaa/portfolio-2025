import { Box, Text, Link } from "@mond-design-system/theme";
import { Education } from "../../globals/education";

const EducationCard = ({ school }: { school: Education }) => {
  const { name, link, linkTarget, degree, graduationYear } = school;

  return (
    <Box padding="2">
      <Text size="md" semantic="primary">
        <Link href={link || "#"} target={linkTarget} size="large">
          {name}
        </Link>
        {` ${degree}`}
        {graduationYear && ` ${graduationYear}`}
      </Text>
    </Box>
  );
};

export default EducationCard;
