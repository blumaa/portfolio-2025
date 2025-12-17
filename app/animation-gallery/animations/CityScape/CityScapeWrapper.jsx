"use client";

import React, { useState } from "react";
import CityScape from "./CityScape";
import { Box } from "@mond-design-system/theme";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CityScape mode={mode} />
      <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
        <Box>
          {mode === `day` ? (
            <MoonIcon
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setMode("night")}
              width="24px"
              height="24px"
              style={{ ...buttonStyles, cursor: "pointer" }}
            />
          ) : (
            <SunIcon
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ ...buttonStyles, cursor: "pointer" }}
              onClick={() => setMode("day")}
              width="24px"
              height="24px"
              color="#facc15"
            />
          )}
        </Box>
      </div>
    </div>
  );
};

export default CityScapeWrapper;
