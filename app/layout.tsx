"use client";

import { Analytics } from "@vercel/analytics/react";
import { Box } from "@mond-design-system/theme";
import "../styles/global.css";
import { AppThemeProvider } from "./providers/AppThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <Box
            display="flex"
            flexDirection="column"
            className="min-h-screen"
          >
            {children}
            <Analytics />
          </Box>
        </AppThemeProvider>
      </body>
    </html>
  );
}
