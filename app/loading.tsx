import { Box } from "@mond-design-system/theme";
import AnimatedBeaverMoon from "./animation-gallery/animations/AnimatedBeaverMoon";

const Loading = () => {
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box height="50%" overflow="visible">
        <AnimatedBeaverMoon />
      </Box>
    </Box>
  );
};

export default Loading;
