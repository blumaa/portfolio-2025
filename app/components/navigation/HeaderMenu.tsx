"use client";
import NextLink from "next/link";
import { Box, Text, Link } from "@mond-design-system/theme";
import { Popover } from "@mond-design-system/theme/client";
import { goodStuffLinks, myStuffLinks } from "../../globals/links";
import HomePageLink from "./HomePageLink";

const HeaderMenu = () => {
  return (
    <Popover
      trigger="hover"
      placement="bottom-start"
      content={
        <Box display="flex" flexDirection="column">
          {[...myStuffLinks, ...goodStuffLinks].map((link) => (
            <HomePageLink key={link} name={link} />
          ))}
        </Box>
      }
    >
      <Link as={NextLink} href="/">
        <Text as="span" size="lg" semantic="primary">
          aaron blum
        </Text>
      </Link>
    </Popover>
  );
};

export default HeaderMenu;
