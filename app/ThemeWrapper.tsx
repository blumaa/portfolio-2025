"use client";

import { useThemeContext } from "./context/theme";

export default function ThemeWrapper({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useThemeContext();

  const darkBg = "bg-[#27374D]"
  const darkText = "text-[#DDE6ED]/90"
  const lightBg = "bg-[#F2F3F4]"
  const lightText = "text-[#414A4C]"

  const textColor = isDarkMode ? darkText : lightText;
  const bgColor = isDarkMode ? darkBg : lightBg;
  return <body className={`${bgColor} ${textColor} h-screen`}>{children}</body>;
}
