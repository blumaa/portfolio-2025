import AnimatedGearScene from "../animation-gallery/animations/AnimatedGearScene";

const Stage = () => {
  return (
    <div className="p-4 h-full flex items-center justify-center ">
      <div className="w-4/6 border border-sky-500 rounded-3xl overflow-hidden">
        <AnimatedGearScene />
      </div>
    </div>
  );
};
export default Stage;
