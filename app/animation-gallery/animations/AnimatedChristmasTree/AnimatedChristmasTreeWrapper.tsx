"use client";
import { useState } from "react";
import AnimatedChristmasTree from "./AnimatedChristmasTree";
import AnimatedChristmasTreeSwitch from "./AnimatedChristmasTreeSwitch";
const AnimatedChristmasTreeWrapper = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex">
      <div className="w-1/4 flex items-center justify-center">
        <AnimatedChristmasTreeSwitch play={play} setPlay={setPlay} />
      </div>
      <div className="w-3/4 ">
        <AnimatedChristmasTree play={play} />
      </div>
    </div>
  );
};

export default AnimatedChristmasTreeWrapper;
