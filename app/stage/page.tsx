"use client";

import AnimationCard from "../components/cards/AnimationCard";
import { Box } from "@mond-design-system/theme";
import CityScapeWrapper from "../animation-gallery/animations/CityScape/CityScapeWrapper";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1} >
      <Box width="30%">
        <CityScapeWrapper />
      </Box>
    </Box>
  );
};
export default Stage;
