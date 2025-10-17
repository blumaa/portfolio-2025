"use client";

import AnimationCard from "../components/cards/AnimationCard";
import { Box } from "@mond-design-system/theme";
import OctoDude from "../animation-gallery/animations/OctoDude";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="30%">
          <OctoDude />
      </Box>
    </Box>
  );
};
export default Stage;
