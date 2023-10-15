"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function App() {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className={`flex items-center justify-center h-full`}>
      <div>
        <div
          className={`cursor-pointer	w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 ${
            isSelected ? "bg-green-200 justify-end" : "justify-start"
          }`}
          onClick={() => setSelected(!isSelected)}
        >
          <motion.div
            layout
            className={`w-8 h-8 rounded-full shadow-md  ${
              isSelected ? "bg-green-500" : "bg-white"
            }`}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  // transition={{ duration: 2 }}
                >
                  <CheckCircleIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
