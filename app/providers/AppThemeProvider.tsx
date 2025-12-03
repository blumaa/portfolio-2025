'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mond-design-system/theme';
import { ThemeContextProvider, useThemeContext } from './ThemeContext';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Inner component that uses the theme context to pass colorScheme to MDS ThemeProvider
 */
function ThemeProviderWithContext({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeContext();

  return (
    <ThemeProvider colorScheme={mode}>
      {children}
    </ThemeProvider>
  );
}

/**
 * AppThemeProvider - Wraps the app with theme management
 *
 * Uses local ThemeContext for theme state management and MDS ThemeProvider for CSS variables.
 *
 * Components can use `useThemeContext` from '../providers/ThemeContext' to access:
 * - mode: 'light' | 'dark'
 * - isDarkMode: boolean
 * - setMode, toggleMode functions
 */
export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeContextProvider>
      <ThemeProviderWithContext>
        {mounted ? children : <div style={{ minHeight: '100vh' }} />}
      </ThemeProviderWithContext>
    </ThemeContextProvider>
  );
}
