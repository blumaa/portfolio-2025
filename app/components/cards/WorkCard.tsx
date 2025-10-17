"use client";

import { motion } from "framer-motion";
import { Box, Text, Badge, Link, Icon } from "@mond-design-system/theme";
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        width="100%"
        borderRadius="8px"
      >
        <Text variant="body-md" semantic="primary">
          <Link href={link || "#"} target={link ? "_blank" : "_self"} size="large">
            {companyName}
          </Link>{" "}
          <Badge variant="primary" size="sm">{jobTitle}</Badge>
          {` ${location}, `}
          {`${timeSpan}. `}
          <Icon size="sm">
            <WrenchScrewdriverIcon />
          </Icon>
          {`${description}. `}
          {learning()}
        </Text>
      </Box>
    </motion.div>
  );
};

export default WorkCard;
