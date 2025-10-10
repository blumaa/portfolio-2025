import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";
import type { Metadata } from "next";
import { AppThemeProvider } from "./providers/AppThemeProvider";

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
      <body>
        <AppThemeProvider>
          {children}
          <Analytics />
        </AppThemeProvider>
      </body>
    </html>
  );
}
