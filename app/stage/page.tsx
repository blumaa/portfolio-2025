import { Box } from "@mond-design-system/theme";
import MuppetPodcaster from "../animation-gallery/animations/MuppetPodcaster";
import Modcast from "../modcast/Modcast";
import AnimationCard from "../components/cards/AnimationCard";
import CityScapeWrapper from "../animation-gallery/animations/CityScape/CityScapeWrapper";
import NuclearPhysics1 from "../animation-gallery/animations/NuclearPhysics1";

const Stage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex="1">
      <Box width="half" className="overflow-visible" border="default">
        {/* <AnimationCard> */}
          <NuclearPhysics1 />
        {/* </AnimationCard> */}
      </Box>
    </Box>
  );
};
export default Stage;
