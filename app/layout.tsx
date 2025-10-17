'use client';

import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";
import { AppThemeProvider, useAppTheme } from "./providers/AppThemeProvider";
import { useThemeContext } from "@mond-design-system/theme";

function ThemedBody({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useAppTheme();
  const { theme } = useThemeContext();

  const backgroundColor = theme('surface.background');
  const textColor = theme('text.primary');

  return (
    <body
      style={{
        margin: 0,
        padding: 0,
        backgroundColor,
        color: textColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
      <Analytics />
    </body>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppThemeProvider>
        <ThemedBody>{children}</ThemedBody>
      </AppThemeProvider>
    </html>
  );
}
