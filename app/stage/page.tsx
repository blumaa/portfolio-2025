"use client";

import AnimationCard from "../components/cards/AnimationCard";
import { Box } from "@mond-design-system/theme";
import Bus from "../animation-gallery/animations/Bus";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="90%" overflow="visible" p={10}>
        {/* <AnimationCard> */}
          <Bus />
        {/* </AnimationCard> */}
      </Box>
    </Box>
  );
};
export default Stage;
