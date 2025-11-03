"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Box, Text, Button } from "@mond-design-system/theme";
import { Job, jobs } from "../globals/jobs";
import WorkCard from "../components/cards/WorkCard";

export default function Work() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState([
    "coding",
    "teaching",
    "coordinating",
    "organising",
  ]);

  const handleButtonClick = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  useEffect(() => {
    const updatedFilteredJobs = jobs.filter((job) =>
      filters.includes(job.category),
    );
    setFilteredJobs(updatedFilteredJobs);
  }, [filters]);

  return (
    <Box width="100%" maxWidth="66.666667%" padding={10} gap={40}>
      <Text variant="body-lg">
        i put a little bit of illustration into my creative writing, a little
        bit of creative writing into my music, a little bit of music into my
        teaching, and a whole lot of all of these crafts into coding.
      </Text>
      <Box
        display="flex"
        alignItems="center"
        gap={10}
        paddingTop={20}
        paddingBottom={20}
        justifyContent="center"
      >
        <Button
          variant={filters.includes("coding") ? "primary" : "outline"}
          size="sm"
          onClick={() => {
            handleButtonClick("coding");
          }}
        >
          coding
        </Button>
        <Button
          variant={filters.includes("teaching") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("teaching")}
        >
          teaching
        </Button>
        <Button
          variant={filters.includes("coordinating") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("coordinating")}
        >
          coordinating
        </Button>
        <Button
          variant={filters.includes("organising") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("organising")}
        >
          organising
        </Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={10}
        width="100%"
        justifyContent="center"
        padding={20}
      >
        <AnimatePresence>
          {filteredJobs.map((job) => (
            <WorkCard key={job.companyName} job={job} />
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
