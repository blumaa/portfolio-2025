"use client";

import { useThemeContext } from "./context/theme";

export default function ThemeWrapper({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useThemeContext();

  const textColor = isDarkMode ? "text-slate-50" : "text-slate-900";
  const bgColor = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  return <body className={`${bgColor} ${textColor} h-screen`}>{children}</body>;
}
