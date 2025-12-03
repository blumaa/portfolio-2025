"use client";
import { motion } from "framer-motion";
import { Text } from "@mond-design-system/theme";

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
      style={{ fontSize: "1.5rem", whiteSpace: "nowrap" }}
    >
      {title.split("").map((char, index) => {
        return (
          <motion.span
            key={char + index}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            <Text size="xl" semantic="primary" as="span">
              {char === " " ? "\u00A0" : char}
            </Text>
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export { AnimatedTitle };
