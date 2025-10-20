"use client";

import { Box } from "@mond-design-system/theme";
import AnimationCard from "../components/cards/AnimationCard";
import OctoDude from "./animations/OctoDude";
import AnimatedLamp from "./animations/AnimatedLamp";
import AlienMoon from "./animations/AlienMoon";
import AnimatedBeaverMoon from "./animations/AnimatedBeaverMoon";
import CityScapeWrapper from "./animations/CityScape/CityScapeWrapper";
import AnimatedSwitch2 from "./animations/AnimatedSwitch2";
import AnimatedLoadingAirplane from "./animations/AnimatedLoadingAirplane";
import AnimatedGearScene from "./animations/AnimatedGearScene";
import NuclearPhysics1 from "./animations/NuclearPhysics1";
import Bird from "./animations/Bird";
import AnimatedEyeball from "./animations/AnimatedEyeball";
import RustlingGrass from "./animations/RustlingGrass";
import Bus from "./animations/Bus";

export default function AnimationGallery() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      {/* <AnimationCard> */}
      {/*   <AnimatedGearScene /> */}
      {/* </AnimationCard> */}
      <AnimationCard>
        <Bus />
      </AnimationCard>
      <AnimationCard>
        <RustlingGrass />
      </AnimationCard>
      <AnimationCard>
        <OctoDude />
      </AnimationCard>
      <AnimationCard>
        <NuclearPhysics1 />
      </AnimationCard>
      <AnimationCard>
        <Bird />
      </AnimationCard>
      <AnimationCard>
        <AnimatedEyeball />
      </AnimationCard>
      <AnimationCard codeLink="https://stackblitz.com/edit/animatedloadingairplane?file=app%2FAnimatedLoadingAirplane.tsx">
        <AnimatedLoadingAirplane />
      </AnimationCard>
      <AnimationCard>
        <AnimatedSwitch2 />
      </AnimationCard>
      <AnimationCard>
        <CityScapeWrapper />
      </AnimationCard>
      <AnimationCard>
        <AnimatedBeaverMoon width="56px" />
      </AnimationCard>
      <AnimationCard>
        <AlienMoon />
      </AnimationCard>
      <AnimationCard>
        <AnimatedLamp />
      </AnimationCard>
    </Box>
  );
}
