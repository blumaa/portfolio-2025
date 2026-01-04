import { Box } from "@mond-design-system/theme";
import Lighthouse from "../animation-gallery/animations/Lighthouse";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1">
      <Box width="sm" className="overflow-visible">
        <Lighthouse />
      </Box>
    </Box>
  );
};
export default Stage;
