"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Box } from "@mond-design-system/theme";

function App() {
  const [isSelected, setSelected] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box
        width="64px"
        height="40px"
        display="flex"
        alignItems="center"
        bg={isSelected ? "#bbf7d0" : "#d1d5db"}
        borderRadius="9999px"
        p="4px"
        justifyContent={isSelected ? "flex-end" : "flex-start"}
        onClick={() => setSelected(!isSelected)}
        cursor="pointer"
      >
        <Box
          as={motion.div}
          layout
          width="32px"
          height="32px"
          borderRadius="9999px"
          bg={isSelected ? "#22c55e" : "#fff"}
          boxShadow={
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          }
        >
          <AnimatePresence>
            {isSelected && (
              <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircleIcon />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
