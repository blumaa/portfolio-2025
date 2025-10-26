"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mond-design-system/theme";
import TelevisionFacade from "./components/TelevisionFacade";
import { ANIMATIONS } from "./utils/animationRegistry";

/**
 * Television - Smart component that manages TV state and orchestrates behavior.
 * Handles power state, channel switching, and animation rendering.
 */
export default function Television() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [currentChannel, setCurrentChannel] = useState(0);
  const [showStatic, setShowStatic] = useState(false);
  const [hasBeenPoweredOn, setHasBeenPoweredOn] = useState(false);

  const handlePowerClick = () => {
    const newState = !isPoweredOn;
    setIsPoweredOn(newState);

    if (newState) {
      // Show static when turning on
      setShowStatic(true);
      setTimeout(() => setShowStatic(false), 1000);

      if (!hasBeenPoweredOn) {
        setHasBeenPoweredOn(true);
      }
    }
  };

  const handleChannelClick = () => {
    if (!isPoweredOn) return;

    setShowStatic(true);
    setTimeout(() => {
      setCurrentChannel((prev) => (prev + 1) % ANIMATIONS.length);
      setShowStatic(false);
    }, 500);
  };

  const CurrentAnimation = ANIMATIONS[currentChannel];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Box width="100%" maxWidth="1200px">
        <TelevisionFacade
          onPowerClick={handlePowerClick}
          onChannelClick={handleChannelClick}
          isPoweredOn={isPoweredOn}
          showStatic={showStatic}
          hasBeenPoweredOn={hasBeenPoweredOn}
        >
          {isPoweredOn && !showStatic && CurrentAnimation && (
            <CurrentAnimation />
          )}
        </TelevisionFacade>
      </Box>
    </Box>
  );
}
