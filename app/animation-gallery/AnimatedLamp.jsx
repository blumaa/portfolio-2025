"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  on: { opacity: 1, originY: 100 },
  off: { opacity: 0, originY: 0 },
};

const backgroundVariants = {
  on: { backgroundColor: "#fff" },
  off: { backgroundColor: "#000" },
};

const AnimatedLamp = () => {
  const [lampOn, setLampOn] = useState(false);
  return (
    <motion.div
      initial={{ backgroundColor: "#000" }}
      animate={lampOn ? "on" : "off"}
      variants={backgroundVariants}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className={`flex items-end justify-center h-full `}
    >
      <svg
        viewBox="0 0 300 300"
        id="Layer_1"
        version="1.1"
        height="100%"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_1-2">
          <path
            class="st0"
            d="M180,40L180,40c27.6,0,50,22.4,50,50v200"
            style={{
              fill: "none",
              stroke: "#2d3642",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={lampOn ? "on" : "off"}
            variants={variants}
            transition={{
              type: "spring",
              bounce: 1,
              duration: 1.5,
            }}
            fill="#e0d671"
            d="M10 300 110 80 170 80 160 300z"
          />
          <path
            class="st0"
            d="M90,80l53.9-62.8c3.9-4.6,9.6-7.2,15.6-7.2l0,0c11.3,0,20.6,9.2,20.6,20.5c0,0,0,0,0,0V80H90z"
            style={{
              fill: "none",
              stroke: "#2d3642",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
          <path
            class="st0"
            d="M280 290 180 290"
            style={{
              fill: "none",
              stroke: "#2d3642",
              strokeWidth: "20",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
          <motion.path
            animate={{ x: [0, 1, -1, 1, -1, 1, 0], y: [0, 1, -1, 1, -1, 1, 0] }}
            transition={{ duration: 0.5, repeat: 3, repeatDelay: 1 }}
            d="M260,200L260,200c0,5.5-4.5,10-10,10h-10l0,0v-20l0,0h10C255.5,190,260,194.5,260,200z"
            fill="#168c84"
            onClick={() => setLampOn(!lampOn)}
            whileHover={{ scale: 1.1 }}
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default AnimatedLamp;
