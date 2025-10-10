"use client";

import { motion } from "framer-motion";
import { Box, Text, Badge, Link, Icon } from "@mond-design-system/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Job } from "../../globals/jobs";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const WorkCard = ({ job }: { job: Job }) => {
  const {
    companyName,
    category,
    link,
    jobTitle,
    timeSpan,
    description,
    learning,
    location,
  } = job;
  const { isDarkMode } = useAppTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        width="100%"
        maxWidth="66.666667%"
        p="md"
        borderRadius="8px"
        isDarkMode={isDarkMode}
      >
        <Text variant="body-md" semantic="primary" isDarkMode={isDarkMode}>
          <Link href={link || "#"} target={link ? "_blank" : "_self"} isDarkMode={isDarkMode}>
            {companyName}
          </Link>{" "}
          <Badge variant="primary" size="sm" isDarkMode={isDarkMode}>{jobTitle}</Badge>
          {` ${location}, `}
          {`${timeSpan}. `}
          <Icon size="sm" isDarkMode={isDarkMode}>
            <WrenchScrewdriverIcon />
          </Icon>
          {`${description}. `}
          {learning(isDarkMode)}
        </Text>
      </Box>
    </motion.div>
  );
};

export default WorkCard;
