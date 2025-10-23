import { Analytics } from "@vercel/analytics/react";
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
          {children}
          <Analytics />
        </AppThemeProvider>
      </body>
    </html>
  );
}
