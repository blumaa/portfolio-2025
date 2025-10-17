import { useThemeContext } from '@mond-design-system/theme';

export function useAppTheme() {
  const { colorScheme } = useThemeContext();
  return {
    colorScheme,
    isDarkMode: colorScheme === 'dark',
    toggleColorScheme: () => {}, // Deprecated - use useToggleTheme instead
  };
}
