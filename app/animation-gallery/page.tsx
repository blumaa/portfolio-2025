import AnimationCard from "./AnimationCard";
import OctoDude from "./animations/OctoDude";
import AnimatedLamp from "./animations/AnimatedLamp";
import AlienMoon from "./animations/AlienMoon";
import AnimatedBeaverMoon from "./animations/AnimatedBeaverMoon";
import CityScapeWrapper from "./animations/CityScape/CityScapeWrapper";

export default function AnimationGallery() {
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row md:justify-center
      md:space-x-4 items-center space-y-4 pt-4`}
    >
      <AnimationCard>
        <CityScapeWrapper />
      </AnimationCard>
      <AnimationCard>
        <AnimatedBeaverMoon />
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
