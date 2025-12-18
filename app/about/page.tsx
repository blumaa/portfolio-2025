"use client";

import {
  Box,
  Link,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@mond-design-system/theme";
import { educations } from "../globals/education";
import EducationCard from "../components/cards/EducationCard";

export default function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="md"
      paddingLeft="4"
      paddingRight="4"
    >
      {/* Bio Card */}
      <Card variant="elevated" hoverable>
        <CardBody>
          <Box display="flex" flexDirection="column" gap="md">
            <Text>
              I&apos;m a developer who came to code through teaching, community
              organizing, and the arts. Before programming, I spent years as an
              ESL teacher helping over 1,000 students learn English, organized
              neighborhood music festivals, and made things with words, sounds,
              and images.
            </Text>
            <Text>
              That background shaped how I build software. Teaching taught me to
              break complex ideas into understandable pieces. Organizing taught
              me to listen to what communities actually need. Making art taught
              me that craft matters in the details.
            </Text>
            <Text>
              Now I bring all of that to frontend development - building
              interfaces that are accessible, thoughtfully designed, and
              genuinely useful for the people who use them.
            </Text>
          </Box>
        </CardBody>
      </Card>

      {/* Philosophy Quote Card */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Heading size="2xl" semantic="secondary" align="center">
          &quot;i put a little bit of illustration into my creative writing, a
          little bit of creative writing into my music, a little bit of music
          into my teaching, and a whole lot of all of these crafts into
          coding.&quot;
        </Heading>
      </Box>
      {/* Education Card */}
      <Card variant="elevated" hoverable>
        <CardHeader>
          <Heading size="2xl">education</Heading>
        </CardHeader>
        <CardBody>
          <Box display="flex" flexDirection="column" gap="sm">
            {educations.map((school, index) => (
              <Box key={`${school.name}-${index}`}>
                <Text size="md" semantic="primary">
                  <Link
                    href={school.link || "#"}
                    target={school.linkTarget}
                    size="large"
                  >
                    {school.name}
                  </Link>
                  {` ${school.degree}`}
                  {school.graduationYear && ` ${school.graduationYear}`}
                </Text>
              </Box>
            ))}
          </Box>
        </CardBody>
      </Card>

      {/* Languages Card */}
      <Card variant="elevated" hoverable>
        <CardHeader>
          <Heading size="2xl">languages</Heading>
        </CardHeader>
        <CardBody>
          <Text size="md" semantic="primary">
            native english - spanish c1 - german b1.2
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
