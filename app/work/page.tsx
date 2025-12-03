"use client";

import { useMemo, useState } from "react";
import { Box, Text, Button } from "@mond-design-system/theme";
import { jobs } from "../globals/jobs";
import WorkCard from "../components/cards/WorkCard";

const CATEGORIES = ["all", "coding", "teaching", "coordinating", "organising"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredJobs = useMemo(() => {
    if (selectedCategory === "all") {
      return jobs;
    }
    return jobs.filter((job) => job.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Box paddingLeft="4" paddingRight="4">
      <Box display="flex" flexDirection="column" alignItems="center" gap="md">
        <Text>
          i put a little bit of illustration into my creative writing, a little
          bit of creative writing into my music, a little bit of music into my
          teaching, and a whole lot of all of these crafts into coding.
        </Text>
        <Box display="flex" justifyContent="center" paddingBottom="2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        display="grid"
        gap="md"
        width="full"
        className="work-grid"
      >
        {filteredJobs.map((job) => (
          <WorkCard key={job.companyName} job={job} />
        ))}
      </Box>
    </Box>
  );
}
