"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Box, Text, Button } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { Job, jobs } from "../globals/jobs";
import WorkCard from "../components/cards/WorkCard";

export default function Work() {
  const { isDarkMode } = useAppTheme();
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
    <Box display="flex" flexDirection="column" alignItems="center" gap="md" pt="md" isDarkMode={isDarkMode}>
      <Box
        width="100%"
        maxWidth="66.666667%"
        p="md"
        borderRadius="8px"
        isDarkMode={isDarkMode}
      >
        <Text variant="body-lg" isDarkMode={isDarkMode}>
          i put a little bit of illustration into my creative writing, a
          little bit of creative writing into my music, a little bit of music
          into my teaching, and a whole lot of all of these crafts into
          coding.
        </Text>
      </Box>
      <Box display="flex" alignItems="center" gap="sm" mb="sm" isDarkMode={isDarkMode}>
        <Button
          variant={filters.includes("coding") ? "primary" : "outline"}
          size="sm"
          onClick={() => {
            console.log("click");
            handleButtonClick("coding");
          }}
          isDarkMode={isDarkMode}
        >
          coding
        </Button>
        <Button
          variant={filters.includes("teaching") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("teaching")}
          isDarkMode={isDarkMode}
        >
          teaching
        </Button>
        <Button
          variant={filters.includes("coordinating") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("coordinating")}
          isDarkMode={isDarkMode}
        >
          coordinating
        </Button>
        <Button
          variant={filters.includes("organising") ? "primary" : "outline"}
          size="sm"
          onClick={() => handleButtonClick("organising")}
          isDarkMode={isDarkMode}
        >
          organising
        </Button>
      </Box>
      <AnimatePresence>
        {filteredJobs.map((job) => (
          <WorkCard key={job.companyName} job={job} />
        ))}
      </AnimatePresence>
    </Box>
  );
}
