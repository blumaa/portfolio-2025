"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Text, Link } from "@mond-design-system/theme";
import { goodStuffLinks, myStuffLinks } from "../../globals/links";
import HomePageLink from "./HomePageLink";
import { useAppTheme } from "../../hooks/useAppTheme";

const HeaderMenu = () => {
  const { isDarkMode } = useAppTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      isDarkMode={isDarkMode}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box pl="sm" isDarkMode={isDarkMode}>
        <Link href="/" isDarkMode={isDarkMode}>
          <Text as="span" variant="body-lg" semantic="primary" isDarkMode={isDarkMode}>
            aaron blum
          </Text>
        </Link>
      </Box>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Box
              position="absolute"
              width="130px"
              left="12px"
              top="24px"
              display="flex"
              flexDirection="column"
              p="xs"
              borderRadius="4px"
              zIndex={50}
              isDarkMode={isDarkMode}
            >
              {[...myStuffLinks, ...goodStuffLinks].map((link) => (
                <HomePageLink key={link} name={link} />
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HeaderMenu;
