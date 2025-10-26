"use client";

import { Box } from "@mond-design-system/theme";
import MuppetPodcaster from "../animation-gallery/animations/MuppetPodcaster";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box
        width="50%"
        overflow="visible"
        border="1px solid yellow"
      >
        <MuppetPodcaster />
      </Box>
    </Box>
  );
};
export default Stage;
