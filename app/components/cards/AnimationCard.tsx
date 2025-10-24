"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Box, Link } from "@mond-design-system/theme";

const AnimationCard = ({
  children,
  codeLink,
}: {
  children: React.ReactNode;
  codeLink?: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="300px"
      m={2}
      position="relative"
    >
      <Box
        overflow="hidden"
        border="1px solid"
        borderRadius="12px"
        height="200px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
      {codeLink && (
        <Box
          position="absolute"
          bottom="8px"
          left="8px"
          borderRadius="12px"
          p={1}
          border="1px solid"
        >
          <Box display="flex" justifyContent="center" position="relative">
            <Link
              href={codeLink}
              target="_blank"
              iconOnly
              icon={<CodeBracketIcon width={20} height={20} />}
            >
              <span />
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default AnimationCard;
