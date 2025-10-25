"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NoirCarChaseDepth() {
  const containerRef = useRef<SVGSVGElement>(null);
  const leadCarRef = useRef<SVGGElement>(null);
  const chaseCarRef = useRef<SVGGElement>(null);

  // Animate center lane lines and car weaving
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const centerLanes = containerRef.current.querySelectorAll(".lane-center");
      centerLanes.forEach((line, i) => {
        const delay = i * (2 / 6);
        gsap.fromTo(
          line,
          {
            attr: { x1: 1000, y1: 400, x2: 1000, y2: 401 },
            strokeWidth: 0.5,
            opacity: 0,
          },
          {
            attr: { x1: 1000, y1: 940, x2: 1000, y2: 1000 },
            strokeWidth: 6,
            opacity: 0.8,
            duration: 2,
            ease: "none",
            repeat: -1,
            delay,
          }
        );
      });

    },
    { scope: containerRef }
  );

  // Arc movement around vanishing point
  useEffect(() => {
    const VANISH_X = 1000;
    const VANISH_Y = 400;
    const LEAD_X = 700;
    const LEAD_Y = 600;
    const CHASE_X = 1300;
    const CHASE_Y = 750;

    // Calculate initial arc parameters
    const leadDX = LEAD_X - VANISH_X;
    const leadDY = LEAD_Y - VANISH_Y;
    const leadRadius = Math.sqrt(leadDX * leadDX + leadDY * leadDY);
    let leadAngle = Math.atan2(leadDY, leadDX) * (180 / Math.PI);

    const chaseDX = CHASE_X - VANISH_X;
    const chaseDY = CHASE_Y - VANISH_Y;
    const chaseRadius = Math.sqrt(chaseDX * chaseDX + chaseDY * chaseDY);
    let chaseAngle = Math.atan2(chaseDY, chaseDX) * (180 / Math.PI);

    // Weaving animation state
    let leadWeaveOffset = 0;
    let chaseWeaveOffset = 0;
    let time = 0;

    // Animate weaving using GSAP ticker
    const ticker = gsap.ticker.add(() => {
      time += 0.016; // ~60fps

      // Calculate weaving offsets (sine waves with different frequencies)
      leadWeaveOffset = Math.sin(time * 2) * 3; // 3 degree wobble
      chaseWeaveOffset = Math.sin(time * 1.7 + 0.4) * 2.5; // Slightly different

      // Update car positions with weaving
      updateCarOnArc(leadCarRef.current, LEAD_X, LEAD_Y, leadRadius, leadAngle + leadWeaveOffset);
      updateCarOnArc(chaseCarRef.current, CHASE_X, CHASE_Y, chaseRadius, chaseAngle + chaseWeaveOffset);
    });

    const updateCarOnArc = (
      element: SVGGElement | null,
      originX: number,
      originY: number,
      radius: number,
      angle: number
    ) => {
      if (!element) return;

      const angleRad = (angle * Math.PI) / 180;
      const newX = VANISH_X + Math.cos(angleRad) * radius;
      const newY = VANISH_Y + Math.sin(angleRad) * radius;

      // Calculate rotation to point at vanishing point from new position
      const dx = VANISH_X - newX;
      const dy = VANISH_Y - newY;
      const angleToVP = Math.atan2(dy, dx) * (180 / Math.PI);

      // Calculate the car's natural angle at its starting position
      const naturalDX = VANISH_X - originX;
      const naturalDY = VANISH_Y - originY;
      const naturalAngle = Math.atan2(naturalDY, naturalDX) * (180 / Math.PI);

      // Rotation needed is the difference from natural orientation
      const rotation = angleToVP - naturalAngle;

      // Set transform directly
      element.setAttribute(
        "transform",
        `translate(${newX - originX}, ${newY - originY}) rotate(${rotation}, ${originX}, ${originY})`
      );
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const STEP = 5;

      // Update base angles (weaving will be added on top)
      if (e.key.toLowerCase() === "a") {
        leadAngle -= STEP;
      }
      if (e.key.toLowerCase() === "d") {
        leadAngle += STEP;
      }
      if (e.key === "ArrowLeft") {
        chaseAngle -= STEP;
      }
      if (e.key === "ArrowRight") {
        chaseAngle += STEP;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 2000 1000"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "hidden", background: "#0a0a0a" }}
    >
      <defs>
        <radialGradient id="roadGradient" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </radialGradient>
      </defs>

      {/* Road */}
      <rect width="2000" height="1000" fill="url(#roadGradient)" />

      {/* Perspective guide lines */}
      <line x1="0" y1="1000" x2="1000" y2="400" stroke="#fff" strokeWidth="2" opacity="0.3" strokeDasharray="10 5" />
      <line x1="2000" y1="1000" x2="1000" y2="400" stroke="#fff" strokeWidth="2" opacity="0.3" strokeDasharray="10 5" />

      {/* Vanishing point */}
      <circle cx="1000" cy="400" r="5" fill="#ff0000" opacity="0.5" />

      {/* Center lane lines */}
      {Array.from({ length: 7 }, (_, i) => (
        <line
          key={i}
          className="lane-center"
          x1="1000"
          y1="1000"
          x2="1000"
          y2="1060"
          stroke="#ffff00"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}

      {/* Lead car - left of vanishing point */}
      <g ref={leadCarRef}>
        <path d="M 560 550 L 840 550 L 840 650 L 560 650 Z" fill="#3a3a3a" stroke="#6a6a6a" strokeWidth="2" />
        <path d="M 840 550 L 904 490 L 904 550 L 840 650 Z" fill="#4a4a4a" stroke="#6a6a6a" strokeWidth="2" />
        <path d="M 560 550 L 840 550 L 904 490 L 736 490 Z" fill="#5a5a5a" stroke="#6a6a6a" strokeWidth="2" />
      </g>

      {/* Chase car - right of vanishing point, closer to camera */}
      <g ref={chaseCarRef}>
        <path d="M 1125 687.5 L 1475 687.5 L 1475 812.5 L 1125 812.5 Z" fill="#3a3a3a" stroke="#6a6a6a" strokeWidth="2" />
        <path d="M 1125 687.5 L 1075 572.5 L 1075 647.5 L 1125 812.5 Z" fill="#4a4a4a" stroke="#6a6a6a" strokeWidth="2" />
        <path d="M 1125 687.5 L 1475 687.5 L 1285 572.5 L 1075 572.5 Z" fill="#5a5a5a" stroke="#6a6a6a" strokeWidth="2" />
      </g>
    </svg>
  );
}
