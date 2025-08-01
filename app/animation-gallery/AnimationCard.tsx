"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { useThemeContext } from "@/app/context/theme";

const AnimationCard = ({
  children,
  codeLink,
}: {
  children: React.ReactNode;
  codeLink?: string;
}) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`flex flex-col w-3/4 md:w-1/4 m-2 relative`}>
      <div
        className={`overflow-hidden border border-sky-500 ${
          isDarkMode ? "bg-gray-900" : "bg-slate-300"
        } 
      ${isDarkMode ? "shadow-slate-900" : "shadow-lg"}
        rounded-xl shadow-lg h-48 
        `}
      >
        {children}
      </div>
      {codeLink && (
        <>
          <div
            className={`hover:scale-105 absolute bottom-2 left-2 rounded-xl p-1 shadow-lg border group
      ${isDarkMode ? "border-white" : "border-black"} 
       `}
          >
            <div className="relative flex justify-center">
              <Link href={codeLink} target="_blank">
                <CodeBracketIcon width={20} height={20} />
              </Link>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                  className="absolute w-24 left-8 bottom-[-5px] scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-50"
                >
                  ✨ click to see the code!
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default AnimationCard;
