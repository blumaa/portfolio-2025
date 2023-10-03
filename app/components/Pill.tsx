"use client";

import { useThemeContext } from "../context/theme";

const Pill = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  return (
    <span
      className={`${isDarkMode ? "bg-[#f2f3f4]" : "bg-[#27374d]"} ${
        isDarkMode ? "text-[#27374d]" : "text-[#f2f3f4]"
      } py-1 px-2 rounded-full`}
    >
      {children}
    </span>
  );
};
export default Pill;
