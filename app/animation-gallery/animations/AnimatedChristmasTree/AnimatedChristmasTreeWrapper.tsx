"use client";
import { useState } from "react";
import AnimatedChristmasTree from "./AnimatedChristmasTree";
import AnimatedChristmasTreeSwitch from "./AnimatedChristmasTreeSwitch";
const AnimatedChristmasTreeWrapper = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center justify-center h-full w-full">
        <div className="w-1/4 flex items-center justify-center">
          <AnimatedChristmasTreeSwitch play={play} setPlay={setPlay} />
        </div>
        <div className="w-2/5">
          <AnimatedChristmasTree play={play} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedChristmasTreeWrapper;
