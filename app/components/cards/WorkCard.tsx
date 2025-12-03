"use client";

import {
  Text,
  Badge,
  Link,
  Icon,
  Card,
  CardBody,
} from "@mond-design-system/theme";
import { Job } from "../../globals/jobs";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

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
      <CardBody>
        <Text size="sm">
          <Link
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            size="large"
          >
            {companyName}
          </Link>{" "}
          <Badge variant="primary" size="sm">
            {jobTitle}
          </Badge>
          {` ${location}, `}
          {`${timeSpan}. `}
          <Icon size="sm">
            <WrenchScrewdriverIcon />
          </Icon>
          {`${description}. `}
          {learning()}
        </Text>
      </CardBody>
    </Card>
  );
};

export default WorkCard;
