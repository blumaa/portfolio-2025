"use client";

import { Box, Text, Heading, Divider } from "@mond-design-system/theme";
import { useAppTheme } from "./hooks/useAppTheme";
import LightSwitch from "./components/ui/LightSwitch";
import HomePageLink from "./components/navigation/HomePageLink";
import SocialLink from "./components/ui/SocialLink";
import { Footer } from "./components/layout/Footer";
import { goodStuffLinks, myStuffLinks } from "./globals/links";

export default function Home() {
  const { isDarkMode } = useAppTheme();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="surface.background" isDarkMode={isDarkMode}>
      <Box display="flex" justifyContent="flex-end" pt="xs" isDarkMode={isDarkMode}>
        <LightSwitch />
      </Box>
      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex="1"
        isDarkMode={isDarkMode}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" isDarkMode={isDarkMode}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb="lg" isDarkMode={isDarkMode}>
            <Heading size="4xl" semantic="primary" isDarkMode={isDarkMode}>aaron blum</Heading>
          </Box>
          <Box display="flex" gap="xl" pb="lg" flexWrap="wrap" isDarkMode={isDarkMode}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" isDarkMode={isDarkMode}>
              <Text variant="body-lg" semantic="primary" isDarkMode={isDarkMode}>my stuff</Text>
              <Box display="flex" flexDirection="column" isDarkMode={isDarkMode}>
                {myStuffLinks.map((link) => (
                  <HomePageLink key={link} name={link} />
                ))}
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" isDarkMode={isDarkMode}>
              <Text variant="body-lg" semantic="primary" isDarkMode={isDarkMode}>good stuff</Text>
              {goodStuffLinks.map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
            </Box>
          </Box>
          <Divider mb="lg" width="100%" isDarkMode={isDarkMode} />
          <Box display="flex" gap="sm" width="50%" isDarkMode={isDarkMode}>
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
