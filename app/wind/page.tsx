"use client";

import { Box } from "@mond-design-system/theme";
import RustlingGrass from "../animation-gallery/animations/RustlingGrass";

const Wind = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="50%" overflow="visible" p={10}>
        <RustlingGrass />
      </Box>
    </Box>
  );
};
export default Wind;
