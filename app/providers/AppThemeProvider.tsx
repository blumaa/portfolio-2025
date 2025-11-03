'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mond-design-system/theme';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

/**
 * AppThemeProvider - Wraps the app with the Mond Design System ThemeProvider
 *
 * Uses the MDS ThemeProvider with enableHooks for built-in theme management.
 * The MDS provider handles:
 * - Theme state management via useTheme hook
 * - localStorage persistence (key: 'mond-theme-mode')
 * - SSR-safe hydration
 *
 * Components can use `useTheme` from '@mond-design-system/theme' to access:
 * - mode: 'light' | 'dark'
 * - brand: 'default' | 'bsf'
 * - setMode, setBrand, toggleMode functions
 *
 * Note: We must wait for client-side mount before rendering children that use useTheme()
 * because the ThemeProvider's context is only available after mounting.
 */
export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider
      enableHooks
      colorScheme="dark"
      brand="default"
    >
      {mounted ? children : <div style={{ minHeight: '100vh' }} />}
    </ThemeProvider>
  );
}
