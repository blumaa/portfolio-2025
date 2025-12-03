'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useTheme, UseThemeReturn } from '../hooks/useTheme';

const ThemeContext = createContext<UseThemeReturn | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const themeValue = useTheme();

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): UseThemeReturn {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
}
