import { Box } from "@mond-design-system/theme";
import RustlingGrass from "../animation-gallery/animations/RustlingGrass";

const Wind = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1">
      <Box width="half" className="overflow-visible" padding="10">
        <RustlingGrass />
      </Box>
    </Box>
  );
};
export default Wind;
