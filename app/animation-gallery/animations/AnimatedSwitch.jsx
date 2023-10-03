"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const isPointInsideCircle = (x, y, centerX, centerY, radius) => {
  // Calculate the distance between the point and the circle's center
  const distance = Math.sqrt(
    Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
  );

  // If the distance is less than or equal to the radius, the point is inside the circle
  return distance <= radius;
};

// Example usage
const circleCenterX = 60;
const circleCenterY = 25;
const circleRadius = 2;

const switchVariants = {
  on: {
    fill: "green",
  },
  off: {
    fill: "red",
  },
};
const AnimatedSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const constraintsRef = useRef(null);
  const targetRef = useRef(null);
  // console.log("switchOn", switchOn);

  return (
    <div className="flex items-center justify-center h-full border border-black border-solid">
        <motion.svg
          viewBox="0 0 64 34"
          xmlns="http://www.w3.org/2000/svg"
          ref={constraintsRef}
          style={{ overflow: "visible" }}
        >
          <path
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M 47,33 C 55.837,33 63,25.837 63,17 63,8.163 55.837,1 47,1 H 17 C 8.163,1 1,8.163 1,17 1,25.837 8.163,33 17,33 Z"
          />
          <motion.circle
            ref={targetRef}
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeMiterlimit="10"
            cx="46.122"
            cy="16.96"
            r="12"
          />
          <circle
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeMiterlimit="10"
            cx="17.591"
            cy="16.96"
            r="12"
          />
          <motion.path
            className="hover:cursor-pointer"
            initial="off"
            variants={switchVariants}
            animate={switchOn ? "on" : "off"}
            drag="x"
            whileDrag={{ scale: 1.2 }}
            dragMomentum={false}
            onDragEnd={(event, info) => {
              // console.log("event", event);
              // console.log("point x point y", info.point.x, info.point.y);
              // console.log("info", info);
              if (
                isPointInsideCircle(
                  info.point.x,
                  info.point.y,
                  circleCenterX,
                  circleCenterY,
                  circleRadius
                )
              ) {
                setSwitchOn(!switchOn);
                // console.log("The point is inside the circle.");
              } else {
                // console.log("The point is outside the circle.");
                setSwitchOn(!switchOn);
              }
            }}
            dragConstraints={{right: 64, bottom: 34}}
            d="M 15.664312,27.731538 C 12.364322,27.135106 9.3072264,24.827846 7.7956206,21.792856 5.7402554,17.66611 6.55553,12.596698 9.7991104,9.335068 14.132143,4.9779248 20.812862,4.9052464 25.210041,9.167416 c 2.377473,2.304477 3.559525,5.518353 3.25268,8.843704 -0.580023,6.285853 -6.581563,10.844034 -12.798409,9.720418 z"
            fill="red"
          />
        </motion.svg>
    </div>
  );
};

export default AnimatedSwitch;
