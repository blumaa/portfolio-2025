import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: Theme = 'dark';

/**
 * Gets the user's system color scheme preference
 */
function getSystemTheme(): Theme {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
}

/**
 * Gets the theme from localStorage or system preference (client-only)
 */
function getStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return getSystemTheme();
}

export interface UseThemeReturn {
  mode: Theme;
  isDarkMode: boolean;
  setMode: (theme: Theme) => void;
  toggleMode: () => void;
}

/**
 * Hook for managing theme (light/dark mode)
 *
 * Features:
 * - Persists theme preference to localStorage
 * - Respects system preference (prefers-color-scheme)
 * - Sets data-theme attribute on document root
 * - SSR-safe: uses consistent default during hydration
 */
export function useTheme(): UseThemeReturn {
  // Start with default theme to avoid hydration mismatch
  const [mode, setModeState] = useState<Theme>(DEFAULT_THEME);

  // After hydration, read the actual preference
  useEffect(() => {
    const actualTheme = getStoredTheme();
    setModeState(actualTheme);
  }, []);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((newTheme: Theme) => {
    setModeState(newTheme);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return {
    mode,
    isDarkMode: mode === 'dark',
    setMode,
    toggleMode,
  };
}
