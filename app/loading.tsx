"use client";

import { Box } from "@mond-design-system/theme";
import AnimatedBeaverMoon from "./animation-gallery/animations/AnimatedBeaverMoon";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className="h-screen">
      <Box height="half" className="overflow-visible">
        <AnimatedBeaverMoon />
      </Box>
    </Box>
  );
};

export default Loading;
