"use client";

import { Box, Button } from "@mond-design-system/theme";

const FILTER_OPTIONS = ["coding", "teaching", "coordinating", "organising"] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

interface WorkControlPanelProps {
  filters: string[];
  onFilterChange: (filter: string) => void;
}

const WorkControlPanel = ({ filters, onFilterChange }: WorkControlPanelProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      paddingTop="2"
      paddingBottom="2"
      border="default"
    >
      {FILTER_OPTIONS.map((filter) => (
        <Button
          key={filter}
          variant={filters.includes(filter) ? "primary" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </Box>
  );
};

export default WorkControlPanel;
