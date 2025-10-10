export type ColorScheme = 'light' | 'dark';

export interface AppThemeContextValue {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  isDarkMode: boolean;
}
