"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mond-design-system/theme";

export default function OctoDude() {
  return (
    <Box
      height="160px"
      position="relative"
      overflow="hidden"
    >
      {/* Wide bubbles that span the full card width */}
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [-5, 5, -3, 0],
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "10%",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [3, -4, 2, 0],
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
        style={{
          position: "absolute",
          left: "25%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [-4, 6, -2, 0],
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.4,
        }}
        style={{
          position: "absolute",
          right: "25%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [5, -3, 4, 0],
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.1,
        }}
        style={{
          position: "absolute",
          right: "10%",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [-3, 4, -2, 0],
          opacity: [0, 0.7, 0.7, 0]
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.8,
        }}
        style={{
          position: "absolute",
          left: "50%",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 30 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <svg
          viewBox="0 0 64 64"
          height="60%"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            overflow: "visible",
          }}
        >
          <g fill="none" fillRule="evenodd">
            <g stroke="#d650c7" strokeLinecap="round" strokeWidth="2">
              <motion.path
                animate={{ rotate: 25 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  transformBox: "view-box",
                  /* originX: "50%", */
                  originY: "50%",
                }}
                d="m17 41v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
              />
              <motion.g
                animate={{ rotate: -25 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  transformBox: "view-box",
                  originY: "50%",
                }}
              >
                <path
                  d="m57 41.5v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
                  transform="matrix(-1 0 0 1 102 0)"
                />
              </motion.g>
              <motion.path
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 1.5 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  transformBox: "fill-box",
                  originY: "0%",
                }}
                d="m31 40v18m-7-24v18m14-18v18"
                strokeLinejoin="round"
              />
            </g>
            <motion.path
              animate={{ scale: 1.2 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              d="m8 22c0-11.045695 8.9511199-20 20.0090152-20h5.9819696c11.0506739 0 20.0090152 8.9518764 20.0090152 20v20h-46z"
              fill="#ff78c7"
            />
            <motion.g
              animate={{ x: -5 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              <motion.circle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                cx="44"
                cy="24"
                fill="#595959"
                r="2"
              />
            </motion.g>
            <motion.g
              animate={{ x: 5 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.circle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  delay: 0.6,
                  repeatDelay: 1,
                }}
                cx="17.379"
                cy="24"
                fill="#595959"
                r="2"
              />
            </motion.g>
          </g>
        </svg>
      </motion.div>
      {/* Bubbles in front of octopus */}
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [4, -5, 3, 0],
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 3.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          position: "absolute",
          left: "15%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [-3, 5, -2, 0],
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        style={{
          position: "absolute",
          right: "20%",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
      <motion.div
        animate={{
          bottom: ["0%", "100%"],
          x: [2, -3, 4, 0],
          opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
          duration: 3.1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
        style={{
          position: "absolute",
          left: "60%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#7dd3fc",
        }}
      />
    </Box>
  );
}
