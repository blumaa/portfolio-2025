"use client";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const title = "animation gallery";

const AnimatedTitle = () => {
  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="text-2xl whitespace-nowrap"
    >
      {title.split("").map((char, index) => {
        return (
          <motion.span key={char + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export { AnimatedTitle };
