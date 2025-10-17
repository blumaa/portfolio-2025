"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface TelevisionFacadeProps {
  onPowerClick: () => void;
  onChannelClick: () => void;
  isPoweredOn: boolean;
  isChangingChannel?: boolean;
  hasBeenPoweredOn?: boolean;
  children?: ReactNode;
}

/**
 * TelevisionFacade - Presentational component that renders the TV SVG shell.
 * Handles no state, only renders the visual representation and forwards click events.
 * Accepts children to display content on the TV screen via foreignObject.
 */
export default function TelevisionFacade({
  onPowerClick,
  onChannelClick,
  isPoweredOn,
  isChangingChannel = false,
  hasBeenPoweredOn = false,
  children,
}: TelevisionFacadeProps) {
  const [channelRotation, setChannelRotation] = useState(0);

  const handleChannelClickInternal = () => {
    setChannelRotation((prev) => prev + 60);
    onChannelClick();
  };

  // Static effect component
  const StaticEffect = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.5, 0.4, 0.6, 0.3] }}
      transition={{ duration: 0.2, repeat: Infinity }}
      style={{
        width: "100%",
        height: "100%",
        background: `
          repeating-linear-gradient(
            0deg,
            #666 0px,
            #444 1px,
            #666 2px,
            #555 3px
          )
        `,
      }}
    />
  );
  return (
    <svg
      version="1.1"
      id="Layer_1"
      viewBox="0 0 496.2 496.2"
      xmlSpace="preserve"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))"
      }}
    >
      <defs id="defs18" />

      {/* TV Frame */}
      <path
        style={{ fill: "#774518" }}
        d="M415.7,377.4c0,5.4-4.4,9.7-9.7,9.7H90.2c-5.4,0-9.7-4.4-9.7-9.7V178.1c0-5.4,4.4-9.7,9.7-9.7H406  c5.4,0,9.7,4.4,9.7,9.7V377.4z"
        id="path2"
      />

      {/* Control Panel */}
      <rect
        x="362.1"
        y="286.3"
        style={{ fill: "#60320D" }}
        width="44.9"
        height="81.9"
        id="rect2"
      />

      {/* Speaker Grills */}
      <g id="g10">
        <path
          style={{ fill: "#774518" }}
          d="M401,296.2h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   S402.6,296.2,401,296.2z"
          id="path3"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,306.1h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   C404,304.7,402.6,306.1,401,306.1z"
          id="path4"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,315.7h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   S402.6,315.7,401,315.7z"
          id="path5"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,325.5h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   S402.6,325.5,401,325.5z"
          id="path6"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,334.9h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   S402.6,334.9,401,334.9z"
          id="path7"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,344.7h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   C404,343.4,402.6,344.7,401,344.7z"
          id="path8"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,354.4h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   C404,353.1,402.6,354.4,401,354.4z"
          id="path9"
        />
        <path
          style={{ fill: "#774518" }}
          d="M401,364.2h-33.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9H401c1.6,0,2.9,1.3,2.9,2.9   C404,362.9,402.6,364.2,401,364.2z"
          id="path10"
        />
      </g>

      {/* Screen Outer Frame */}
      <path
        style={{ fill: "#262625" }}
        d="M104.5,201.2c0-7.8,6.3-14.1,14.1-14.1h222.7c7.8,0,14.1,6.3,14.1,14.1v152.9  c0,7.8-6.3,14.1-14.1,14.1H118.6c-7.8,0-14.1-6.3-14.1-14.1V201.2z"
        id="path11"
      />

      {/* Screen Inner Area */}
      <path
        style={{ fill: "#3A3A38" }}
        d="M112.4,207.7c0-7.1,5.8-12.9,12.9-12.9h208.6c7.1,0,12.9,5.8,12.9,12.9v140.1  c0,7.1-5.8,12.9-12.9,12.9H125.3c-7.1,0-12.9-5.8-12.9-12.9C112.4,347.8,112.4,207.7,112.4,207.7z"
        id="path12"
      />

      {/* Screen Highlight */}
      <path
        style={{ fill: "#D8D8D7" }}
        d="M118.2,206.9c0-4.4,3.6-8,8-8h32.3c-13.7,7-31.5,12-40.3,53.6C118.2,252.5,118.2,206.9,118.2,206.9z"
        id="path13"
      />

      {/* Screen Content Area - foreignObject for React components */}
      <foreignObject x="112.3" y="194.8" width="234" height="165">
        <motion.div
          animate={{
            backgroundColor: isPoweredOn ? "#000" : "#3a3a38",
          }}
          transition={{ duration: 0.3 }}
          style={{
            // border: "2px solid green",
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isChangingChannel ? (
            <StaticEffect />
          ) : (
            children
          )}
        </motion.div>
      </foreignObject>

      {/* Power Button Group with Attention Animation */}
      <motion.g
        animate={
          !hasBeenPoweredOn
            ? {
                scale: [1, 1.15, 1, 1.1, 1],
                rotate: [0, -5, 5, -3, 0],
              }
            : { scale: 1, rotate: 0 }
        }
        transition={
          !hasBeenPoweredOn
            ? {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }
            : { duration: 0.3 }
        }
        style={{ transformOrigin: "384.9px 208.3px" }}
      >
        {/* Power Button Outer */}
        <circle
          style={{ fill: "#B79251", cursor: "pointer", transition: "fill 0.2s" }}
          cx="384.9"
          cy="208.3"
          r="18.8"
          id="power-button-outer"
          onClick={onPowerClick}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#D4A860")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#B79251")}
        />

        {/* Power Button Inner */}
        <circle
          style={{ fill: isPoweredOn ? "#4ade80" : "#3A3A38", transition: "fill 0.3s" }}
          cx="384.9"
          cy="208.3"
          r="12.5"
          id="power-button-inner"
          pointerEvents="none"
        />

        {/* Power Icon */}
        <path
          style={{ fill: "#B79251" }}
          d="M391.6,210.7l-9-9c-0.6-0.6-1.5-0.6-2.1,0l-2.2,2.2c-0.3,0.3-0.4,0.7-0.4,1.1c0,0.4,0.2,0.8,0.4,1.1   l9,9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l2.2-2.2c0.3-0.3,0.4-0.7,0.4-1.1S391.9,211,391.6,210.7z"
          id="path14"
          pointerEvents="none"
        />
      </motion.g>

      {/* Channel Button Group with Rotation */}
      <motion.g
        animate={{ rotate: channelRotation }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "384.9px 255.4px" }}
      >
        {/* Channel Button Outer */}
        <circle
          style={{ fill: "#B79251", cursor: "pointer", transition: "fill 0.2s" }}
          cx="384.9"
          cy="255.4"
          r="18.8"
          id="channel-button-outer"
          onClick={handleChannelClickInternal}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#D4A860")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#B79251")}
        />

        {/* Channel Button Inner */}
        <circle
          style={{ fill: "#3a3a38" }}
          cx="384.9"
          cy="255.4"
          r="12.5"
          id="channel-button-inner"
          pointerEvents="none"
        />

        {/* Channel Icon (Up Arrow) */}
        <path
          style={{ fill: "#b79251" }}
          d="m 382.6,262.1 9,-9 c 0.6,-0.6 0.6,-1.5 0,-2.1 l -2.2,-2.2 c -0.3,-0.3 -0.7,-0.4 -1.1,-0.4 -0.4,0 -0.8,0.2 -1.1,0.4 l -9,9 c -0.3,0.3 -0.4,0.7 -0.4,1.1 0,0.4 0.1,0.8 0.4,1.1 l 2.2,2.2 c 0.3,0.3 0.7,0.4 1.1,0.4 0.4,-0.1 0.8,-0.2 1.1,-0.5 z"
          id="path16"
          pointerEvents="none"
        />
      </motion.g>

      {/* Antenna */}
      <g id="g18" style={{ display: "inline" }}>
        <path
          style={{ fill: "#3a3a38" }}
          d="M 309.9,78.2 C 309,77.5 307.7,77.7 307,78.6 L 246.2,158.7 185,78.6 c -0.7,-0.9 -2,-1.1 -2.9,-0.4 -0.9,0.7 -1.1,2 -0.4,2.9 l 62,84 c 0.6,0.8 1.5,1.2 2.3,1.2 0.1,0 0.2,0 0.2,0 0.1,0 0.2,0 0.2,0 0.9,0 1.8,-0.4 2.3,-1.2 l 61.6,-84 c 0.7,-0.9 0.6,-2.2 -0.4,-2.9 z"
          id="path17"
        />
        <circle
          style={{ fill: "#3a3a38" }}
          cx="308.7"
          cy="78.6"
          r="5.5"
          id="circle17"
        />
        <circle
          style={{ fill: "#3a3a38" }}
          cx="182.4"
          cy="78.6"
          r="5.5"
          id="circle18"
        />
      </g>

      {/* Antenna Base */}
      <ellipse
        style={{ display: "inline", fill: "#774518" }}
        cx="248.1"
        cy="170.5"
        rx="26.1"
        ry="12"
        id="ellipse18"
      />
    </svg>
  );
}
