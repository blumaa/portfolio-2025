"use client";

import { Box } from "@mond-design-system/theme";
import { useAppTheme } from "../hooks/useAppTheme";

const Pill = ({
  children,
  active,
  button,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  button?: boolean;
  onClick?: () => void;
}) => {
  const { isDarkMode } = useAppTheme();

  return (
    <Box
      as="span"
      onClick={onClick}
      px="xs"
      py="2px"
      borderRadius="6px"
      border="1px solid"
      borderColor={active ? "border.primary" : "#0EA5E9"}
      bg={active ? "#0369A1" : "transparent"}
      color={active ? "#DDE6ED" : "text.primary"}
      display="inline-block"
      cursor={button ? "pointer" : "default"}
      transition={button ? "transform 0.3s ease-out" : "none"}
      isDarkMode={isDarkMode}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        if (button) {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
        }
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        if (button) {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }
      }}
    >
      {children}
    </Box>
  );
};
export default Pill;
