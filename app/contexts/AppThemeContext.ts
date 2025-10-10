import { createContext } from 'react';
import type { AppThemeContextValue } from '../types/theme';

export const AppThemeContext = createContext<AppThemeContextValue>({
  colorScheme: 'light',
  toggleColorScheme: () => {},
  isDarkMode: false
});
