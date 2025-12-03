import NextLink from "next/link";
import { Box, Link } from "@mond-design-system/theme";
import { LINKS } from "../../globals/links";

const HomePageLink = ({ name }: { name: string }) => {

  return (
    <Box display="flex" alignItems="center" gap="xs">
      {LINKS[name].icon()}
      <Link size="small" as={NextLink} href={LINKS[name].href as string}>
        {LINKS[name].title}
      </Link>
    </Box>
  );
};

export default HomePageLink;
