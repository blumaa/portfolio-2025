import { Box, Spinner } from "@mond-design-system/theme";
import AnimatedBeaverMoon from "./animation-gallery/animations/AnimatedBeaverMoon";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" className="h-screen">
      <Box height="half" className="overflow-visible">
        <Spinner size="lg" />
      </Box>
    </Box>
  );
};

export default Loading;
