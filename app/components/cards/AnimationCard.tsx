"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Box, Link } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";

const AnimationCard = ({
  children,
  codeLink,
}: {
  children: React.ReactNode;
  codeLink?: string;
}) => {
  const { isDarkMode } = useAppTheme();
  return (
    <Box display="flex" flexDirection="column" width="300px" m="sm" position="relative" isDarkMode={isDarkMode}>
      <Box
        overflow="hidden"
        border="1px solid"
        borderColor="border.primary"
        borderRadius="12px"
        height="200px"
        isDarkMode={isDarkMode}
      >
        {children}
      </Box>
      {codeLink && (
        <Box
          position="absolute"
          bottom="8px"
          left="8px"
          borderRadius="12px"
          p="xs"
          border="1px solid"
          borderColor="border.primary"
          isDarkMode={isDarkMode}
        >
          <Box display="flex" justifyContent="center" position="relative" isDarkMode={isDarkMode}>
            <Link href={codeLink} target="_blank" isDarkMode={isDarkMode} iconOnly icon={<CodeBracketIcon width={20} height={20} />}>
              <span />
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default AnimationCard;
