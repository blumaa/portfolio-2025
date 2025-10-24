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
  const [isChangingChannel, setIsChangingChannel] = useState(false);
  const [hasBeenPoweredOn, setHasBeenPoweredOn] = useState(false);

  const handlePowerClick = () => {
    setIsPoweredOn((prev) => !prev);
    if (!hasBeenPoweredOn) {
      setHasBeenPoweredOn(true);
    }
  };

  const handleChannelClick = () => {
    if (!isPoweredOn) return;

    setIsChangingChannel(true);
    setTimeout(() => {
      setCurrentChannel((prev) => (prev + 1) % ANIMATIONS.length);
      setIsChangingChannel(false);
    }, 500); // Static duration
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
          isChangingChannel={isChangingChannel}
          hasBeenPoweredOn={hasBeenPoweredOn}
        >
          {isPoweredOn && !isChangingChannel && CurrentAnimation && (
            <CurrentAnimation />
          )}
        </TelevisionFacade>
      </Box>
    </Box>
  );
}
