import AnimationCard from "./AnimationCard";
import OctoDude from "./animations/OctoDude";
import AnimatedLamp from "./animations/AnimatedLamp";
import AlienMoon from "./animations/AlienMoon";
import AnimatedBeaverMoon from "./animations/AnimatedBeaverMoon";
import CityScapeWrapper from "./animations/CityScape/CityScapeWrapper";
import AnimatedSwitch2 from "./animations/AnimatedSwitch2";
import AnimatedLoadingAirplane from "./animations/AnimatedLoadingAirplane";
import AnimatedGearScene from "./animations/AnimatedGearScene";

export default function AnimationGallery() {
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row justify-center
        items-center pt-4 w-full`}
    >
      <AnimationCard>
        <div className="flex justify-center items-center h-full ">
          <AnimatedGearScene />
        </div>
      </AnimationCard>
      <AnimationCard>
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
    </div>
  );
}
