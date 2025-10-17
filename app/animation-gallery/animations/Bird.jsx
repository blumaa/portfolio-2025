"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mond-design-system/theme";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Bird() {
  const birdRef = useRef(null);

  useEffect(() => {
    if (!birdRef.current) return;

    const ctx = gsap.context(() => {
      // Eye blinking animation
      const blinkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      blinkTimeline.to("#bird-eye", {
        scaleY: 0.1,
        duration: 0.1,
        ease: "power2.inOut",
      }).to("#bird-eye", {
        scaleY: 1,
        duration: 0.1,
        ease: "power2.inOut",
      });

      // Main hopping and flipping animation
      const hopTimeline = gsap.timeline({ repeat: -1 });

      // Hop right from center
      hopTimeline
        .to("#bird-body", {
          y: -40,
          duration: 0.4,
          ease: "power2.out",
        })
        .to("#bird-body", {
          scaleY: 0.85,
          scaleX: 1.1,
          duration: 0.1,
          ease: "power2.in",
        }, "-=0.1")
        .to("#bird-body", {
          y: 0,
          scaleY: 1,
          scaleX: 1,
          duration: 0.3,
          ease: "bounce.out",
        })
        .to("#bird-body", {
          x: 60,
          duration: 0.7,
          ease: "none",
        }, "-=0.7")

        // Pause
        .to({}, { duration: 0.5 })

        // Hop back to center and flip
        .to("#bird-body", {
          y: -40,
          duration: 0.4,
          ease: "power2.out",
        })
        .to("#bird-body", {
          scaleY: 0.85,
          scaleX: 1.1,
          duration: 0.1,
          ease: "power2.in",
        }, "-=0.1")
        .to("#bird-body", {
          y: 0,
          scaleY: 1,
          scaleX: 1,
          duration: 0.3,
          ease: "bounce.out",
        })
        .to("#bird-body", {
          x: 0,
          duration: 0.7,
          ease: "none",
        }, "-=0.7")
        .to("#bird-body", {
          scaleX: -1,
          duration: 0.2,
        })

        // Pause
        .to({}, { duration: 0.5 })

        // Hop left from center
        .to("#bird-body", {
          y: -40,
          duration: 0.4,
          ease: "power2.out",
        })
        .to("#bird-body", {
          scaleY: 0.85,
          scaleX: -1.1,
          duration: 0.1,
          ease: "power2.in",
        }, "-=0.1")
        .to("#bird-body", {
          y: 0,
          scaleY: 1,
          scaleX: -1,
          duration: 0.3,
          ease: "bounce.out",
        })
        .to("#bird-body", {
          x: -60,
          duration: 0.7,
          ease: "none",
        }, "-=0.7")

        // Pause
        .to({}, { duration: 0.5 })

        // Hop back to center and flip
        .to("#bird-body", {
          y: -40,
          duration: 0.4,
          ease: "power2.out",
        })
        .to("#bird-body", {
          scaleY: 0.85,
          scaleX: -1.1,
          duration: 0.1,
          ease: "power2.in",
        }, "-=0.1")
        .to("#bird-body", {
          y: 0,
          scaleY: 1,
          scaleX: -1,
          duration: 0.3,
          ease: "bounce.out",
        })
        .to("#bird-body", {
          x: 0,
          duration: 0.7,
          ease: "none",
        }, "-=0.7")
        .to("#bird-body", {
          scaleX: 1,
          duration: 0.2,
        })

        // Pause
        .to({}, { duration: 1 });

      // Wing flapping (subtle rotation for both wings)
      gsap.to("#bird-wing-blue", {
        rotation: -10,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "left center",
      });

      gsap.to("#bird-wing-teal", {
        rotation: 8,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });

    }, birdRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="visible"
      height="100%"
      ref={birdRef}
    >
      {/* Air particles - appear and disappear only */}
      <motion.div
        animate={{
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "20%",
          bottom: "30%",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        style={{
          position: "absolute",
          right: "25%",
          bottom: "40%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(200, 220, 255, 0.6)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.5, 0.5, 0]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "20%",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        style={{
          position: "absolute",
          left: "15%",
          bottom: "50%",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          backgroundColor: "rgba(220, 240, 255, 0.7)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.8, 0.8, 0]
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.0,
        }}
        style={{
          position: "absolute",
          right: "30%",
          bottom: "25%",
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.5, 0.5, 0]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        style={{
          position: "absolute",
          left: "40%",
          bottom: "35%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "rgba(200, 220, 255, 0.6)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 2.9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          position: "absolute",
          right: "15%",
          bottom: "45%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        style={{
          position: "absolute",
          left: "35%",
          bottom: "15%",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: "rgba(240, 250, 255, 0.6)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3.1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        style={{
          position: "absolute",
          right: "40%",
          bottom: "55%",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0, 0.5, 0.5, 0]
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.7,
        }}
        style={{
          position: "absolute",
          left: "60%",
          bottom: "40%",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "rgba(210, 230, 255, 0.6)",
        }}
      />

      {/* Falling leaves */}
      <motion.div
        animate={{
          top: ["-10%", "120%"],
          x: [-20, 20, -15, 15, -10, 0],
          rotate: [0, 360],
          opacity: [0, 0.8, 0.8, 0.5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
        style={{
          position: "absolute",
          left: "25%",
          top: "-10%",
          width: "15px",
          height: "15px",
          borderRadius: "40% 0 40% 0",
          backgroundColor: "#DE7B56",
        }}
      />
      <motion.div
        animate={{
          top: ["-10%", "120%"],
          x: [15, -20, 12, -15, 8, 0],
          rotate: [0, -360],
          opacity: [0, 0.7, 0.7, 0.4, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        style={{
          position: "absolute",
          right: "30%",
          top: "-10%",
          width: "18px",
          height: "18px",
          borderRadius: "40% 0 40% 0",
          backgroundColor: "#D4A574",
        }}
      />
      <motion.div
        animate={{
          top: ["-10%", "120%"],
          x: [-18, 18, -12, 10, -8, 0],
          rotate: [0, 360],
          opacity: [0, 0.6, 0.6, 0.3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 6,
        }}
        style={{
          position: "absolute",
          left: "60%",
          top: "-10%",
          width: "16px",
          height: "16px",
          borderRadius: "40% 0 40% 0",
          backgroundColor: "#C89B6C",
        }}
      />

      <svg
        viewBox="-800 0 1824 1024"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        <g id="bird-body">
          <path id="bird-wing-blue" d="M484.32 375.24C575.25 255.5 857.87 527.6 788.67 581.07c-94.76 73.21-491.01 39.99-304.35-205.83z" fill="#1C80AA" />
          <path d="M401.03 749.89l-4.85 133.8-77.69 21.37h66.36l19.42 35.27 4.86-35.27 40.46 6.14-38.84-25.89 8.09-114.91-17.81-20.51zM524.36 771.23l10.48 133.48-74.73 30.11 65.92-7.59 23.33 32.82 0.79-35.6 40.89 1.48-41.54-21.28-5.11-115.08-20.03-18.34z" fill="#3B5174" />
          <path d="M224.73 264.77l-24 50.19a21.7 21.7 0 0 1-37.73 2.5l-31.57-48.27a21.7 21.7 0 0 1 17.41-33.57l55.61-1.92a21.7 21.7 0 0 1 20.28 31.07z" fill="#DE7B56" />
          <path d="M900.53 638.76c-18.3 86.91-221.86 208.13-478 171.54C150.46 771.44 26 281.88 315 103.56c161.25-99.49 326.71 5 356.8 130.37C713 405.47 583.15 534.58 749.57 609c86.91 38.91 164.43-34.33 150.96 29.76z" fill="#FDD2BE" />
          <g id="bird-eye">
            <circle cx="365.86" cy="264.78" r="32.45" fill="#000000" />
          </g>
          <path id="bird-wing-teal" d="M512.24 366c137.48-60.86 253.34 314 166.92 327.31C560.81 711.56 230 490.92 512.24 366z" fill="#22B0C3" />
          <path d="M223.3 530c-9.34-2.6-17.2-12.8-23.94-31a195 195 0 0 1-7.64-27 7.28 7.28 0 0 1 14.3-2.79c4.79 24.5 15 46.44 21.91 46.93 1.12 0.08 11.43-0.5 27.23-45.51a7.28 7.28 0 1 1 13.74 4.82c-13.61 38.77-27 56.31-42 55.22a18.18 18.18 0 0 1-3.6-0.67zM340.8 590.36c-9.63 1.14-20.77-5.32-33.92-19.63a195 195 0 0 1-17.32-22.11 7.28 7.28 0 0 1 12.17-8c13.73 20.85 31.53 37.27 38.07 35.12 1.07-0.35 10.38-4.8 7.93-52.44a7.28 7.28 0 1 1 14.55-0.75c2.11 41-3.59 62.33-17.95 67a18.18 18.18 0 0 1-3.53 0.81zM261.5 659.71c-9-0.19-18.35-7.55-28.56-22.35a180.41 180.41 0 0 1-13-22.49 6.74 6.74 0 0 1 12.18-5.77c9.9 20.88 24.1 38.21 30.37 37.08 1-0.18 10.13-3.07 14-47a6.74 6.74 0 1 1 13.43 1.18c-3.34 37.87-11.31 56.66-25.07 59.12a16.82 16.82 0 0 1-3.35 0.23zM389.28 722.29c-9.26 2.85-21.38-1.51-36.89-13.22a195 195 0 0 1-21-18.64 7.28 7.28 0 0 1 10.53-10.06c17.25 18.05 37.7 31 43.75 27.71 1-0.54 9.35-6.59-1.61-53a7.28 7.28 0 1 1 14.17-3.35c9.44 40 7.65 62-5.63 69.16a18.18 18.18 0 0 1-3.32 1.4z" fill="#22B0C3" />
        </g>
      </svg>
    </Box>
  );
}
