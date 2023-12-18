import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";
import type { Metadata } from "next";
import { ThemeContextProvider } from "./context/theme";
import ThemeWrapper from "./ThemeWrapper";

export const metadata: Metadata = {
  title: "Aaron Blum",
  description: "this is my work as a coder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <ThemeWrapper>
          {children}
          <Analytics />
        </ThemeWrapper>
      </ThemeContextProvider>
    </html>
  );
}
