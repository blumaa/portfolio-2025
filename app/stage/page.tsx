"use client";

import { Box } from "@mond-design-system/theme";
import NoirCarChase from "../animation-gallery/animations/NoirCarChase";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box width="100%" overflow="visible" >
        <NoirCarChase />
      </Box>
    </Box>
  );
};
export default Stage;
