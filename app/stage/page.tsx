import AnimatedChristmasTreeWrapper from "../animation-gallery/animations/AnimatedChristmasTree/AnimatedChristmasTreeWrapper";

const Stage = () => {
  return (
    <div className="p-4 h-full flex items-center justify-center ">
      <div className="w-2/5 border border-sky-500 rounded-3xl overflow-hidden">
        <AnimatedChristmasTreeWrapper />
      </div>
    </div>
  );
};
export default Stage;
