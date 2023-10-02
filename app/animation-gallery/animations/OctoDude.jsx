"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OctoDude() {
  return (
    <>
      <motion.div
        className="flex items-center justify-center h-40"
        initial={{ y: -20 }}
        animate={{ y: 30 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
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
    </>
  );
}
