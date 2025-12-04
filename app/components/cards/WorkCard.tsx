"use client";

import {
  Text,
  Badge,
  Link,
  Icon,
  Card,
  CardBody,
  CardHeader,
  Box,
} from "@mond-design-system/theme";
import { Job } from "../../globals/jobs";
import { HeartIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const WorkCard = ({ job }: { job: Job }) => {
  const {
    companyName,
    link,
    jobTitle,
    timeSpan,
    description,
    learning,
    location,
  } = job;

  return (
    <Card variant="elevated" hoverable>
      <CardHeader>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Link
              href={link || "#"}
              target={link ? "_blank" : "_self"}
              size="large"
            >
              {companyName}
            </Link>{" "}
            <Text size="2xs">{timeSpan}</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box>
              <Badge variant="primary" size="sm">
                {jobTitle}
              </Badge>
            </Box>
            <Text size="2xs">{location}</Text>
          </Box>
        </Box>
      </CardHeader>
      <CardBody>
        <Box display="flex" alignItems="flex-start" gap="xxs">
          <Box paddingTop="1">
            <Icon size="sm">
              <WrenchScrewdriverIcon />
            </Icon>
          </Box>
          <Text size="sm">{description}</Text>
        </Box>
        <Box display="flex" alignItems="flex-start">
          <Box paddingTop="1">
            <Icon size="sm">
              <HeartIcon />
            </Icon>
          </Box>
          <Text size="sm">{learning()}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default WorkCard;
