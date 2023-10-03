import AnimationCard from "./AnimationCard";
import OctoDude from "./animations/OctoDude";
import AnimatedLamp from "./animations/AnimatedLamp";
import AnimatedSwitch from "./animations/AnimatedSwitch";

export default function AnimationGallery() {
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row md:justify-center 
      md:space-x-4 items-center space-y-4 md:space-y-0 pt-4`}
    >
      <AnimationCard bgColor="white">
        <AnimatedSwitch />
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
