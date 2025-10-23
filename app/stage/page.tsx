"use client";

import { Box } from "@mond-design-system/theme";
import AnimatedLamp from "../animation-gallery/animations/AnimatedLamp";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="90%" overflow="visible" p={10}>
        <AnimatedLamp />
      </Box>
    </Box>
  );
};
export default Stage;
