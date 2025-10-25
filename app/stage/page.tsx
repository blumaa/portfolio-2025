"use client";

import { Box } from "@mond-design-system/theme";
import NoirCarChaseDepth from "../animation-gallery/animations/NoirCarChaseDepth";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="100%" overflow="visible" >
        <NoirCarChaseDepth />
      </Box>
    </Box>
  );
};
export default Stage;
