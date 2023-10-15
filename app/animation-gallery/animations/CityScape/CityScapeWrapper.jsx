"use client";

import React, { useState } from "react";
import CityScape from "./CityScape";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

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

  const buttonStyles = {
    backgroundColor: isHovered ? "#F082AC" : "",
    borderRadius: "30%",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        height: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <CityScape mode={mode} />
      <div className="flex justify-end overflow-visible h-0">
        <div style={{ paddingRight: "15px", alignSelf: "flex-end" }}>
          {mode === `day` ? (
            <MoonIcon
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setMode("night")}
              className={`w-6 text-white hover:cursor-pointer`}
              style={{ ...buttonStyles }}
            />
          ) : (
            <SunIcon
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ ...buttonStyles }}
              onClick={() => setMode("day")}
              className="w-6 text-yellow-400 hover:cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CityScapeWrapper;
