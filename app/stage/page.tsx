import AnimationCard from "../animation-gallery/AnimationCard";
import AnimatedChristmasTreeWrapper from "../animation-gallery/animations/AnimatedChristmasTree/AnimatedChristmasTreeWrapper";
import { Header } from "../header/header";

const Stage = () => {
  return (
    <>
      <Header>Stage</Header>
      <div className="p-4 h-full flex items-center justify-center ">
        <AnimationCard codeLink="#">
          <AnimatedChristmasTreeWrapper />
        </AnimationCard>
      </div>
    </>
  );
};
export default Stage;
