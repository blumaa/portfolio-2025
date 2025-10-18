"use client";

import AnimationCard from "../components/cards/AnimationCard";
import { Box } from "@mond-design-system/theme";
import RustlingGrass from "../animation-gallery/animations/RustlingGrass";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="50%" overflow="visible" p={10}>
        {/* <AnimationCard> */}
          <RustlingGrass />
        {/* </AnimationCard> */}
      </Box>
    </Box>
  );
};
export default Stage;
