"use client";
import { useThemeContext } from "@/app/context/theme";

const AnimationCard = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div
      className={`overflow-hidden border border-sky-500 ${
        isDarkMode ? "bg-gray-900" : "bg-slate-300"
      } 
        rounded-3xl shadow-lg h-48 w-3/4 md:w-1/4 m-2 `}
    >
      {children}
    </div>
  );
};
export default AnimationCard;
