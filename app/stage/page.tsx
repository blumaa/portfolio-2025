"use client";

import AnimationCard from "../components/cards/AnimationCard";
import { Box } from "@mond-design-system/theme";
import Bird from "../animation-gallery/animations/Bird";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="30%" overflow="visible" p={10}>
        <Bird />
      </Box>
    </Box>
  );
};
export default Stage;
