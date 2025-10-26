"use client";

import { Box } from "@mond-design-system/theme";
import NoirCarChaseDepth from "../animation-gallery/animations/NoirCarChaseDepth";
import OctoDude from "../animation-gallery/animations/OctoDude";
import AnimatedBeaverMoon from "../animation-gallery/animations/AnimatedBeaverMoon";
import Bird from "../animation-gallery/animations/Bird";
import AnimatedEyeballWatching from "../animation-gallery/animations/AnimatedEyeballWatching";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box 
        // height="50%" 
        width="50%"
        overflow="hidden" 
        border="1px solid yellow"
      >
        <AnimatedEyeballWatching />
      </Box>
    </Box>
  );
};
export default Stage;
