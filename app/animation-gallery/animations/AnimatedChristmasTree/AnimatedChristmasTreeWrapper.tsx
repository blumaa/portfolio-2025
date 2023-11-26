"use client";
import { useState } from "react";
import AnimatedChristmasTree from "./AnimatedChristmasTree";
import AnimatedChristmasTreeSwitch from "./AnimatedChristmasTreeSwitch";
const AnimatedChristmasTreeWrapper = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex items-center justify-center border border-violet-300 h-full">
      <div className="flex items-center justify-center border border-yellow-400 h-full w-full">
        <div className="w-1/4 flex items-center justify-center">
          <AnimatedChristmasTreeSwitch play={play} setPlay={setPlay} />
        </div>
        <div className="w-1/2">
          <AnimatedChristmasTree play={play} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedChristmasTreeWrapper;
