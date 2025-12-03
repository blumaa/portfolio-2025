"use client";

import { Box, Heading, Divider, Label } from "@mond-design-system/theme";
import LightSwitch from "./components/ui/LightSwitch";
import HomePageLink from "./components/navigation/HomePageLink";
import SocialLink from "./components/ui/SocialLink";
import { Footer } from "./components/layout/Footer";
import { goodStuffLinks, myStuffLinks } from "./globals/links";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" className="min-h-screen">
      <Box
        display="flex"
        justifyContent="flex-end"
        paddingTop="10"
        paddingRight="10"
      >
        <LightSwitch />
      </Box>
      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex="1"
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading size="3xl" semantic="primary" weight="normal">
              aaron blum
            </Heading>
          </Box>
          <Box display="flex" gap="md">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Label size="md">my stuff</Label>
              <Box display="flex" flexDirection="column" gap="xxs">
                {myStuffLinks.map((link) => (
                  <HomePageLink key={link} name={link} />
                ))}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="xxs">
              <Label size="md">good stuff</Label>
              {goodStuffLinks.map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
            </Box>
          </Box>
          <Divider variant="default" />
          <Box display="flex" justifyContent="flex-start">
            <SocialLink
              href="https://github.com/blumaa"
              src="/github-logo.svg"
              alt="Github"
            />
            <SocialLink
              href="mailto:blumaa@gmail.com"
              src="/mail.svg"
              alt="blumaa@gmail.com"
            />
            <SocialLink
              href="https://www.linkedin.com/in/aaron-blum-0904/"
              src="/linkedin-logo.svg"
              alt="LinkedIn"
            />
            <SocialLink
              href="https://desmondblume.substack.com/"
              src="/substack-icon.svg"
              alt="Blumenous Poetry"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
