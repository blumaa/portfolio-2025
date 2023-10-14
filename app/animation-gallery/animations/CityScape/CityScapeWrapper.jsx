"use client";

import React, { useState } from "react";
import CityScape from "./CityScape";

const CityScapeWrapper = () => {
  // fetch the time of day from an api once every hour
  // and match the color of the sky to the correspondaing
  // light (color from an array of colors between
  // light blue of day and dark black of night)
  const [mode, setMode] = useState("night");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <button
        onClick={() => setMode(mode === "day" ? "night" : "day")}
        style={{
          flex: 1,
          backgroundColor: isHovered
            ? "#F082AC"
            : mode === "night"
            ? "#80deea"
            : "#37474f",
          color: mode === "day" ? "#80deea" : "#37474f",
          margin: "20px",
          borderRadius: "8px",
          borderStyle: "none",
          boxSizing: "border-box",
          cursor: "pointer",
          height: "30px",
          padding: "2px 6px",
          whiteSpace: "nowrap",
          transition: "color 100ms",
          userSelect: "none",
          touchAction: "manipulation",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Change to {mode === `day` ? `night` : `day`}
      </button>
      <CityScape mode={mode} />
    </div>
  );
};

export default CityScapeWrapper;
