'use client';

import React, { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mond-design-system/theme';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextValue {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
  mounted: boolean;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  colorScheme: 'dark',
  toggleColorScheme: () => {},
  mounted: false,
  isDarkMode: true,
});

export const useAppTheme = () => useContext(ThemeContext);

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setColorScheme(savedTheme);
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      // Default to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorScheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(prev => {
      const newScheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newScheme);
      return newScheme;
    });
  };

  const contextValue = useMemo(
    () => ({
      colorScheme,
      toggleColorScheme,
      mounted,
      isDarkMode: colorScheme === 'dark'
    }),
    [colorScheme, mounted]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider colorScheme={colorScheme} className="theme-wrapper">
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
