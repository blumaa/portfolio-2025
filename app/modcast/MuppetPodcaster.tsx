"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface MuppetPodcasterProps {
  mode?: "talk" | "listenToMusic";
  mouthState?: "closed" | "half" | "open";
  bpm?: number;
  isMuted?: boolean;
  isPlaying?: boolean;
  isLoading?: boolean;
  onModeChange?: (mode: "talk" | "listenToMusic") => void;
  onMuteToggle?: () => void;
  onPlayPause?: () => void;
  onSkip?: () => void;
}

export default function MuppetPodcaster({
  mode: externalMode,
  mouthState: externalMouthState,
  bpm = 120,
  isMuted: externalIsMuted,
  isPlaying = false,
  isLoading = false,
  onModeChange,
  onMuteToggle,
  onPlayPause,
  onSkip,
}: MuppetPodcasterProps = {}) {
  const containerRef = useRef<SVGSVGElement>(null);
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const paperRef = useRef<SVGGElement>(null);
  const headAnimationRef = useRef<gsap.core.Tween | null>(null);

  // Store blink delayedCall in ref so it persists and can be killed reliably
  const blinkCallbackRef = useRef<gsap.core.Tween | null>(null);

  // Internal mode state - use external if provided, otherwise internal
  const [internalMode, setInternalMode] = useState<"talk" | "listenToMusic">(
    "talk",
  );
  const mode = externalMode ?? internalMode;

  // Internal mouth state - use external if provided, otherwise internal
  const [internalMouthState, setInternalMouthState] = useState<
    "closed" | "half" | "open"
  >("closed");
  const mouthState = externalMouthState ?? internalMouthState;

  // For internal animations that need to update mouth state
  const setMouthState =
    externalMouthState !== undefined ? () => {} : setInternalMouthState;

  // Audio mute state - use external if provided, otherwise internal
  const [internalIsMuted, setInternalIsMuted] = useState(false);
  const isMuted = externalIsMuted ?? internalIsMuted;

  const handleModeToggle = () => {
    const newMode = mode === "talk" ? "listenToMusic" : "talk";
    if (onModeChange) {
      onModeChange(newMode);
    } else {
      setInternalMode(newMode);
    }
  };

  const handleMuteToggle = () => {
    if (onMuteToggle) {
      onMuteToggle();
    } else {
      setInternalIsMuted((prev) => !prev);
    }
  };

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !leftEyeRef.current ||
        !rightEyeRef.current ||
        !headRef.current ||
        !paperRef.current
      )
        return;

      // Paper animation based on mode
      if (mode === "listenToMusic") {
        gsap.to(paperRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(paperRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      // Kill existing eye animations
      if (blinkCallbackRef.current) {
        blinkCallbackRef.current.kill();
        blinkCallbackRef.current = null;
      }
      gsap.killTweensOf([leftEyeRef.current, rightEyeRef.current]);

      // Eye state based on mode
      if (mode === "listenToMusic") {
        gsap.set([leftEyeRef.current, rightEyeRef.current], {
          scaleY: 0.6,
          transformOrigin: "center",
        });
      } else {
        gsap.set([leftEyeRef.current, rightEyeRef.current], {
          scaleY: 1,
          transformOrigin: "center",
        });

        const blinkEyes = () => {
          if (mode !== "talk") return;

          const blinkTimeline = gsap.timeline();
          blinkTimeline
            .to([leftEyeRef.current, rightEyeRef.current], {
              scaleY: 0.1,
              duration: 0.08,
              ease: "power2.in",
              transformOrigin: "center",
            })
            .to([leftEyeRef.current, rightEyeRef.current], {
              scaleY: 1,
              duration: 0.08,
              ease: "power2.out",
            });

          if (mode === "talk") {
            blinkCallbackRef.current = gsap.delayedCall(
              gsap.utils.random(2, 5),
              blinkEyes,
            );
          }
        };

        blinkCallbackRef.current = gsap.delayedCall(1, blinkEyes);
      }

      // Reset head position
      gsap.set(headRef.current, {
        rotation: 0,
        y: 0,
        transformOrigin: "center bottom",
      });

      // Head animation - BPM-synced bob for music, gentle bob for talk
      if (mode === "listenToMusic") {
        // Calculate duration from BPM: duration = 30 / bpm
        // This gives us half a beat (down and up = one full beat)
        const bobDuration = 30 / bpm;

        const headAnimation = gsap.to(headRef.current, {
          rotation: 12,
          y: 10,
          duration: bobDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "center bottom",
        });

        headAnimationRef.current = headAnimation;
      } else {
        const headAnimation = gsap.to(headRef.current, {
          y: 5,
          rotation: 2,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "center bottom",
        });
        headAnimationRef.current = headAnimation;
      }

      // Mouth animation cycle - only in talk mode
      let mouthCycle: gsap.core.Timeline | null = null;

      if (mode === "talk") {
        mouthCycle = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
        mouthCycle
          .call(() => setMouthState("half"), [], 0)
          .to({}, { duration: 0.15 })
          .call(() => setMouthState("open"), [], 0.15)
          .to({}, { duration: 0.2 })
          .call(() => setMouthState("half"), [], 0.35)
          .to({}, { duration: 0.15 })
          .call(() => setMouthState("closed"), [], 0.5)
          .to({}, { duration: 0.8 });
      } else {
        setMouthState("closed");
      }

      // Cleanup
      return () => {
        if (headAnimationRef.current) headAnimationRef.current.kill();
        if (mouthCycle) mouthCycle.kill();
        if (blinkCallbackRef.current) {
          blinkCallbackRef.current.kill();
          blinkCallbackRef.current = null;
        }
        gsap.killTweensOf([leftEyeRef.current, rightEyeRef.current]);
      };
    },
    { scope: containerRef, dependencies: [mode] },
  );

  // Pause/resume head animation based on isPlaying in listenToMusic mode
  useEffect(() => {
    if (mode === "listenToMusic" && headAnimationRef.current) {
      if (isPlaying) {
        headAnimationRef.current.resume();
      } else {
        headAnimationRef.current.pause();
      }
    }
  }, [isPlaying, mode]);

  return (
    <svg
      ref={containerRef}
      viewBox="0 180 800 720"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
    >
      {/* Gradients and Patterns */}
      <defs>
        {/* Wallpaper pattern */}
        <pattern
          id="wallpaperPattern"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <rect width="60" height="60" fill="#e8d5c4" />
          {/* Damask-style floral motif */}
          <circle cx="30" cy="30" r="8" fill="#d4c4b0" opacity="0.5" />
          <ellipse cx="30" cy="20" rx="4" ry="8" fill="#d4c4b0" opacity="0.4" />
          <ellipse cx="30" cy="40" rx="4" ry="8" fill="#d4c4b0" opacity="0.4" />
          <ellipse cx="20" cy="30" rx="8" ry="4" fill="#d4c4b0" opacity="0.4" />
          <ellipse cx="40" cy="30" rx="8" ry="4" fill="#d4c4b0" opacity="0.4" />
          {/* Corner accents */}
          <circle cx="0" cy="0" r="3" fill="#d4c4b0" opacity="0.3" />
          <circle cx="60" cy="0" r="3" fill="#d4c4b0" opacity="0.3" />
          <circle cx="0" cy="60" r="3" fill="#d4c4b0" opacity="0.3" />
          <circle cx="60" cy="60" r="3" fill="#d4c4b0" opacity="0.3" />
        </pattern>

        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b7355" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        <radialGradient id="furGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#6bb3e0" />
          <stop offset="50%" stopColor="#5b9bd5" />
          <stop offset="100%" stopColor="#4a8bc2" />
        </radialGradient>
        <filter id="furTexture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      {/* Background - wallpaper */}
      <rect width="800" height="900" fill="url(#wallpaperPattern)" />

      {/* Framed sailboat picture on wall */}
      <g transform="translate(50, 380)">
        <g transform="scale(1.4)">
          {/* Frame - ornate wooden frame */}
          <rect x="0" y="0" width="120" height="150" fill="#654321" rx="2" />
          <rect x="3" y="3" width="114" height="144" fill="#8b7355" rx="2" />
          <rect x="8" y="8" width="104" height="134" fill="#f5f5f0" />

          {/* Painting - sailboat scene */}
          <g>
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87ceeb" />
                <stop offset="70%" stopColor="#b0d8f0" />
                <stop offset="100%" stopColor="#e0f0ff" />
              </linearGradient>
              <linearGradient id="seaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a90b8" />
                <stop offset="100%" stopColor="#2c5f7f" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect x="10" y="10" width="100" height="80" fill="url(#skyGrad)" />

            {/* Sea */}
            <rect x="10" y="90" width="100" height="50" fill="url(#seaGrad)" />

            {/* Distant clouds */}
            <ellipse
              cx="30"
              cy="25"
              rx="12"
              ry="6"
              fill="#ffffff"
              opacity="0.7"
            />
            <ellipse
              cx="85"
              cy="35"
              rx="15"
              ry="7"
              fill="#ffffff"
              opacity="0.6"
            />

            {/* Sailboat */}
            <g transform="translate(60, 85)">
              {/* Hull */}
              <path d="M -15 0 L -18 15 L 18 15 L 15 0 Z" fill="#8b4513" />
              {/* Mast */}
              <rect x="-1" y="-35" width="2" height="35" fill="#654321" />
              {/* Main sail */}
              <path
                d="M 0 -35 L 0 -5 L 25 -15 Z"
                fill="#ffffff"
                stroke="#ddd"
                strokeWidth="0.5"
              />
              {/* Front sail */}
              <path
                d="M 0 -30 L 0 -8 L -20 -12 Z"
                fill="#f8f8f8"
                stroke="#ddd"
                strokeWidth="0.5"
              />
              {/* Reflection hint */}
              <ellipse
                cx="0"
                cy="20"
                rx="12"
                ry="3"
                fill="#ffffff"
                opacity="0.2"
              />
            </g>

            {/* Water waves */}
            <g opacity="0.3" stroke="#ffffff" strokeWidth="1" fill="none">
              <path d="M 10 100 Q 20 98 30 100 Q 40 102 50 100" />
              <path d="M 60 105 Q 70 103 80 105 Q 90 107 100 105" />
              <path d="M 15 115 Q 25 113 35 115 Q 45 117 55 115" />
              <path d="M 65 120 Q 75 118 85 120 Q 95 122 105 120" />
            </g>

            {/* Sun reflection on water */}
            <ellipse
              cx="60"
              cy="95"
              rx="8"
              ry="2"
              fill="#ffeb9c"
              opacity="0.5"
            />
          </g>

          {/* Frame inner shadow for depth */}
          <rect
            x="8"
            y="8"
            width="104"
            height="134"
            fill="none"
            stroke="#3a2818"
            strokeWidth="1"
            opacity="0.3"
            rx="1"
          />

          {/* Small brass hook at top for hanging */}
          <circle cx="60" cy="-5" r="3" fill="#c9a961" />
        </g>
      </g>

      {/* Body - simple organic muppet body (behind desk) */}
      <g>
        {/* Main body - rounded */}
        <ellipse
          cx="400"
          cy="680"
          rx="120"
          ry="160"
          fill="url(#furGrad)"
          filter="url(#furTexture)"
        />
      </g>

      {/* Simple desk edge at bottom */}
      <rect y="750" width="800" height="150" fill="url(#deskGrad)" />

      {/* Paper on desk - with perspective (trapezoid shape for depth) - animated based on mode */}
      <g ref={paperRef} transform="translate(300, 805) rotate(-8)">
        {/*
          Perspective calculation:
          - Paper lying flat on desk, viewed from above-front angle
          - Top edge (farther): 70% width of bottom edge (closer)
          - Trapezoid vertices calculated to create natural foreshortening
          - Top: -35 to +35 (70px), Bottom: -50 to +50 (100px)
          - Height: 140px vertical span
        */}

        {/* Paper shadow - slightly offset trapezoid for depth */}
        <polygon points="-37,-70 37,-70 52,70 -52,70" fill="#f5f5f5" />

        {/* Main paper surface - trapezoid with perspective */}
        <polygon points="-35,-68 35,-68 48,68 -48,68" fill="#ffffff" />

        {/* Paper border following perspective */}
        <polygon
          points="-35,-68 35,-68 48,68 -48,68"
          fill="none"
          stroke="#ddd"
          strokeWidth="1.5"
        />

        {/* Text lines on paper - following perspective trapezoid
            Each line gets progressively wider from top (far) to bottom (near)
            Line widths interpolate between top width (70px) and bottom width (96px)
        */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          // Calculate Y position for this line
          const yPos = -55 + i * 14;
          // Interpolate line width based on depth (top narrow, bottom wide)
          // Progress from 0 (top) to 1 (bottom)
          const progress = (yPos + 55) / 123; // 123 = total text area height
          // Top text width: 60px, Bottom text width: 76px
          const topWidth = 60;
          const bottomWidth = 76;
          const lineWidth = topWidth + (bottomWidth - topWidth) * progress;
          const halfWidth = lineWidth / 2;

          return (
            <line
              key={i}
              x1={-halfWidth}
              y1={yPos}
              x2={halfWidth}
              y2={yPos}
              stroke="#999"
              strokeWidth="1.5"
              opacity="0.6"
            />
          );
        })}

        {/* Subtle fold/crease following perspective width at that depth */}
        <line
          x1="-42"
          y1="-30"
          x2="42"
          y2="-30"
          stroke="#e8e8e8"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>

      {/* Arms */}
      <g>
        {/* Left arm and hand - angled outward */}
        <g transform="rotate(15 310 570)">
          <ellipse
            cx="310"
            cy="650"
            rx="25"
            ry="80"
            fill="url(#furGrad)"
            filter="url(#furTexture)"
          />
          {/* Left hand palm */}
          <ellipse cx="310" cy="730" rx="35" ry="25" fill="url(#furGrad)" />
          <ellipse cx="310" cy="730" rx="30" ry="20" fill="#5b9bd5" />
          {/* Fingers - larger and more distinct */}
          <ellipse
            cx="285"
            cy="745"
            rx="10"
            ry="25"
            fill="#5b9bd5"
            transform="rotate(-15 285 745)"
          />
          <ellipse cx="302" cy="750" rx="10" ry="28" fill="#5b9bd5" />
          <ellipse cx="318" cy="750" rx="10" ry="28" fill="#5b9bd5" />
          <ellipse
            cx="335"
            cy="745"
            rx="10"
            ry="25"
            fill="#5b9bd5"
            transform="rotate(15 335 745)"
          />
          {/* Thumb - on right side of left hand */}
          <ellipse
            cx="340"
            cy="735"
            rx="12"
            ry="22"
            fill="#5b9bd5"
            transform="rotate(110 340 735)"
          />
        </g>

        {/* Right arm and hand - angled outward */}
        <g transform="rotate(-15 490 570)">
          <ellipse
            cx="490"
            cy="650"
            rx="25"
            ry="80"
            fill="url(#furGrad)"
            filter="url(#furTexture)"
          />
          {/* Right hand palm */}
          <ellipse cx="490" cy="730" rx="35" ry="25" fill="url(#furGrad)" />
          <ellipse cx="490" cy="730" rx="30" ry="20" fill="#5b9bd5" />
          {/* Fingers - larger and more distinct */}
          <ellipse
            cx="465"
            cy="745"
            rx="10"
            ry="25"
            fill="#5b9bd5"
            transform="rotate(-15 465 745)"
          />
          <ellipse cx="482" cy="750" rx="10" ry="28" fill="#5b9bd5" />
          <ellipse cx="498" cy="750" rx="10" ry="28" fill="#5b9bd5" />
          <ellipse
            cx="515"
            cy="745"
            rx="10"
            ry="25"
            fill="#5b9bd5"
            transform="rotate(15 515 745)"
          />
          {/* Thumb - on left side of right hand */}
          <ellipse
            cx="460"
            cy="735"
            rx="12"
            ry="22"
            fill="#5b9bd5"
            transform="rotate(-110 460 735)"
          />
        </g>
      </g>

      {/* Head group - for bob/tilt animation */}
      <g ref={headRef}>
        {/* Neck */}
        <ellipse cx="400" cy="520" rx="30" ry="25" fill="#5b9bd5" />

        {/* Main head - more round/circular */}
        <ellipse
          cx="400"
          cy="375"
          rx="145"
          ry="145"
          fill="url(#furGrad)"
          filter="url(#furTexture)"
        />

        {/* Eyes container - taller oval, tilted inward at top */}
        <g>
          {/* Left eye white - tall oval tilted inward at top */}
          <g ref={leftEyeRef} transform="translate(345, 330) rotate(8)">
            <ellipse cx="0" cy="0" rx="32" ry="55" fill="#ffffff" />
            {/* Pupil - looking more towards center/slightly cross-eyed */}
            <ellipse cx="6" cy="12" rx="18" ry="26" fill="#000000" />
            {/* Highlight */}
            <ellipse cx="11" cy="3" rx="8" ry="12" fill="#ffffff" />
          </g>

          {/* Right eye white - tall oval tilted inward at top */}
          <g ref={rightEyeRef} transform="translate(455, 330) rotate(-8)">
            <ellipse cx="0" cy="0" rx="32" ry="55" fill="#ffffff" />
            {/* Pupil - looking more towards center/slightly cross-eyed */}
            <ellipse cx="-6" cy="12" rx="18" ry="26" fill="#000000" />
            {/* Highlight */}
            <ellipse cx="-11" cy="3" rx="8" ry="12" fill="#ffffff" />
          </g>
        </g>

        {/* Mouth states - controlled by state variable and mode */}
        <g>
          {mode === "talk" ? (
            <>
              {/* Talk mode - animated mouth states */}
              {/* Closed mouth */}
              {mouthState === "closed" && (
                <path
                  d="M 330 460 Q 400 475 470 460"
                  fill="none"
                  stroke="#2a1810"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              )}

              {/* Half open mouth - much wider */}
              {mouthState === "half" && (
                <g>
                  <ellipse
                    cx="400"
                    cy="475"
                    rx="65"
                    ry="32"
                    fill="#c41e3a"
                  />
                  <ellipse
                    cx="400"
                    cy="470"
                    rx="65"
                    ry="32"
                    fill="#1a0a08"
                  />
                </g>
              )}

              {/* Open mouth - huge and very expressive */}
              {mouthState === "open" && (
                <g>
                  <ellipse
                    cx="400"
                    cy="485"
                    rx="75"
                    ry="55"
                    fill="#c41e3a"
                  />
                  <ellipse
                    cx="400"
                    cy="480"
                    rx="75"
                    ry="55"
                    fill="#1a0a08"
                  />
                  {/* Tongue */}
                  <ellipse cx="400" cy="500" rx="45" ry="25" fill="#ff6b7a" />
                  {/* Bottom lip curve for depth */}
                  <path
                    d="M 335 520 Q 400 535 465 520"
                    fill="none"
                    stroke="#c41e3a"
                    strokeWidth="4"
                    opacity="0.6"
                  />
                </g>
              )}
            </>
          ) : (
            <>
              {/* Listen to music mode - huge happy smile */}
              <path
                d="M 320 460 Q 400 510 480 460"
                fill="none"
                stroke="#2a1810"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </>
          )}
        </g>

        {/* Pink round nose - rendered after mouth so it appears on top, vertically oriented */}
        <ellipse cx="400" cy="425" rx="38" ry="45" fill="#ff69b4" />
        <ellipse cx="400" cy="430" rx="33" ry="40" fill="#ff9fd6" />
        {/* Nose highlight */}
        <ellipse cx="408" cy="415" rx="11" ry="14" fill="#ffcce6" opacity="0.8" />
      </g>

      {/* Microphone stand and mic (foreground layer) */}
      <g opacity="1">
        {/* Stand pole - thicker and more visible */}
        <rect x="680" y="480" width="12" height="270" fill="#2a2a2a" rx="3" />
        <rect
          x="680"
          y="480"
          width="12"
          height="270"
          fill="#3a3a3a"
          rx="3"
          opacity="0.5"
        />
        {/* Base - larger */}
        <ellipse cx="686" cy="750" rx="45" ry="10" fill="#1a1a1a" />
        <ellipse cx="686" cy="748" rx="40" ry="8" fill="#2a2a2a" />
        {/* Arm extending toward muppet - thicker */}
        <rect
          x="540"
          y="474"
          width="150"
          height="12"
          fill="#2a2a2a"
          rx="3"
          transform="rotate(10 680 480)"
        />
        <rect
          x="540"
          y="474"
          width="150"
          height="12"
          fill="#3a3a3a"
          rx="3"
          opacity="0.5"
          transform="rotate(10 680 480)"
        />
        {/* Microphone head - larger and more prominent */}
        <ellipse cx="570" cy="460" rx="35" ry="50" fill="#3a3a3a" />
        <ellipse cx="570" cy="460" rx="30" ry="45" fill="#1a1a1a" />
        {/* Mic mesh texture - larger */}
        <g opacity="0.4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <line
              key={i}
              x1="540"
              y1={420 + i * 8}
              x2="600"
              y2={420 + i * 8}
              stroke="#666"
              strokeWidth="1.5"
            />
          ))}
        </g>
        {/* Mic highlight for depth */}
        <ellipse
          cx="575"
          cy="450"
          rx="12"
          ry="20"
          fill="#4a4a4a"
          opacity="0.6"
        />
      </g>

      {/* Mode toggle button in lower right corner */}
      <g onClick={handleModeToggle} style={{ cursor: "pointer" }} opacity="0.8">
        {mode === "talk" ? (
          <>
            {/* Music note icon for switching to listenToMusic mode */}
            <circle cx="735" cy="845" r="25" fill="#5b9bd5" opacity="0.3" />
            <ellipse cx="720" cy="850" rx="8" ry="10" fill="#3a3a3a" />
            <rect x="728" y="830" width="3" height="20" fill="#3a3a3a" />
            <path
              d="M 728 830 Q 745 825 745 840 L 745 855"
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="3"
            />
            <ellipse cx="745" cy="855" rx="8" ry="10" fill="#3a3a3a" />
          </>
        ) : (
          <>
            {/* Microphone icon for switching back to talk mode */}
            <circle cx="735" cy="845" r="25" fill="#ffb6c1" opacity="0.3" />
            <rect
              x="725"
              y="830"
              width="20"
              height="25"
              rx="10"
              fill="#3a3a3a"
            />
            <rect x="733" y="855" width="4" height="15" fill="#3a3a3a" />
            <rect x="725" y="868" width="20" height="3" fill="#3a3a3a" />
          </>
        )}
      </g>

      {/* Volume/Mute icon in lower left corner */}
      <g onClick={handleMuteToggle} style={{ cursor: "pointer" }} opacity="0.8">
        {/* Speaker */}
        <rect x="40" y="835" width="15" height="20" fill="#3a3a3a" rx="2" />
        <path d="M 55 835 L 70 825 L 70 865 L 55 855 Z" fill="#3a3a3a" />

        {/* Sound waves (visible when not muted) */}
        {!isMuted && (
          <g>
            <path
              d="M 75 835 Q 80 835 80 845 Q 80 855 75 855"
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 82 830 Q 90 830 90 845 Q 90 860 82 860"
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* X through speaker when muted */}
        {isMuted && (
          <g>
            <line
              x1="75"
              y1="830"
              x2="95"
              y2="860"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="95"
              y1="830"
              x2="75"
              y2="860"
              stroke="#ff4444"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
      </g>

      {/* Playback controls - centered at bottom */}
      {onPlayPause && onSkip && (
        <g transform="translate(400, 850)">
          {/* Play/Pause button - large center button */}
          <g
            onClick={onPlayPause}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
            opacity={isLoading ? 0.4 : 0.9}
          >
            {/* Button background */}
            <circle
              cx="0"
              cy="0"
              r="35"
              fill={isPlaying ? "#ff6b6b" : "#4ecdc4"}
              stroke="#fff"
              strokeWidth="3"
            />

            {isPlaying ? (
              /* Pause icon */
              <g>
                <rect
                  x="-10"
                  y="-15"
                  width="8"
                  height="30"
                  fill="#fff"
                  rx="2"
                />
                <rect x="2" y="-15" width="8" height="30" fill="#fff" rx="2" />
              </g>
            ) : (
              /* Play icon */
              <path d="M -8 -15 L -8 15 L 15 0 Z" fill="#fff" />
            )}
          </g>

          {/* Skip button - to the right */}
          <g
            onClick={onSkip}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
            opacity={isLoading ? 0.4 : 0.9}
            transform="translate(70, 0)"
          >
            {/* Button background */}
            <circle
              cx="0"
              cy="0"
              r="28"
              fill="#95a5a6"
              stroke="#fff"
              strokeWidth="3"
            />

            {/* Skip forward icon (double triangle) */}
            <g fill="#fff">
              <path d="M -10 -12 L -10 12 L 5 0 Z" />
              <path d="M 0 -12 L 0 12 L 15 0 Z" />
            </g>
          </g>
        </g>
      )}
    </svg>
  );
}
