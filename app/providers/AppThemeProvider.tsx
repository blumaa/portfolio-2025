'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mond-design-system/theme';
import type { AppThemeContextValue, ColorScheme } from '../types/theme';
import { AppThemeContext } from '../contexts/AppThemeContext';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for saved theme in localStorage or default to system preference
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setColorScheme(saved as ColorScheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorScheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Save theme preference whenever it changes
    if (mounted) {
      localStorage.setItem('portfolio-theme', colorScheme);
    }
  }, [colorScheme, mounted]);

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: AppThemeContextValue = {
    colorScheme,
    toggleColorScheme,
    isDarkMode: colorScheme === 'dark'
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeProvider colorScheme="light">
        <AppThemeContext.Provider value={{
          colorScheme: 'light',
          toggleColorScheme: () => {},
          isDarkMode: false
        }}>
          {children}
        </AppThemeContext.Provider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider colorScheme={colorScheme}>
      <AppThemeContext.Provider value={value}>
        {children}
      </AppThemeContext.Provider>
    </ThemeProvider>
  );
}
