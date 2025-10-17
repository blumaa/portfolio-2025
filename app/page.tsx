"use client";

import { Box, Text, Heading, Divider, Label } from "@mond-design-system/theme";
import LightSwitch from "./components/ui/LightSwitch";
import HomePageLink from "./components/navigation/HomePageLink";
import SocialLink from "./components/ui/SocialLink";
import { Footer } from "./components/layout/Footer";
import { goodStuffLinks, myStuffLinks } from "./globals/links";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex" justifyContent="flex-end" pt={10} pr={10}>
        <LightSwitch />
      </Box>
      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex="1"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading size="4xl" semantic="primary" weight="light">
              aaron blum
            </Heading>
          </Box>
          <Box display="flex" pb={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={5}
            >
              <Label size="lg">my stuff</Label>
              <Box display="flex" flexDirection="column" gap={5}>
                {myStuffLinks.map((link) => (
                  <HomePageLink key={link} name={link} />
                ))}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={5}>
              <Label size="lg">good stuff</Label>
              {goodStuffLinks.map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
            </Box>
          </Box>
          <Divider variant="strong" />
          <Box display="flex" gap={2} justifyContent="flex-start" >
            <SocialLink
              href="https://bsky.app/profile/punkpoet.bsky.social"
              src="/bluesky.svg"
              alt="BlueSky"
            />
            <SocialLink
              href="https://desmondblume.substack.com/"
              src="/substack-icon.svg"
              alt="Blumenous Poetry"
            />
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
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
