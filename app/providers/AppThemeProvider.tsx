'use client';

import React, { useState, createContext, useContext, useMemo } from 'react';
import { ThemeProvider } from '@mond-design-system/theme';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextValue {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  colorScheme: 'dark',
  toggleColorScheme: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const contextValue = useMemo(
    () => ({ colorScheme, toggleColorScheme }),
    [colorScheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider colorScheme={colorScheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
