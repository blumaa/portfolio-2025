"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";
import AnimationCard from "../components/cards/AnimationCard";
import OctoDude from "./animations/OctoDude";
import AnimatedLamp from "./animations/AnimatedLamp";
import AlienMoon from "./animations/AlienMoon";
import AnimatedBeaverMoon from "./animations/AnimatedBeaverMoon";
import CityScapeWrapper from "./animations/CityScape/CityScapeWrapper";
import AnimatedSwitch2 from "./animations/AnimatedSwitch2";
import AnimatedLoadingAirplane from "./animations/AnimatedLoadingAirplane";
import AnimatedGearScene from "./animations/AnimatedGearScene";
import AnimatedChristmasTreeWrapper from "./animations/AnimatedChristmasTree/AnimatedChristmasTreeWrapper";

export default function AnimationGallery() {
  const { isDarkMode } = useAppTheme();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
      pt="md"
      gap={10}
      isDarkMode={isDarkMode}
    >
      {/* <AnimationCard codeLink="https://stackblitz.com/edit/animated-christmas-tree"> */}
      {/*   <AnimatedChristmasTreeWrapper /> */}
      {/* </AnimationCard> */}
      <AnimationCard>
        <div className="flex justify-center items-center h-full ">
          <AnimatedGearScene />
        </div>
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
        <AnimatedBeaverMoon width={"w-14"} />
      </AnimationCard>
      <AnimationCard>
        <AlienMoon />
      </AnimationCard>
      <AnimationCard>
        <AnimatedLamp />
      </AnimationCard>
      <AnimationCard>
        <OctoDude />
      </AnimationCard>
    </Box>
  );
}
