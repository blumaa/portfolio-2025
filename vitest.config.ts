import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'vitest.setup.ts',
        '**/*.config.ts',
        '**/*.d.ts',
        '**/types/**',
        '**/__tests__/**',
        '**/animations/**',
      ],
    },
    server: {
      deps: {
        inline: ['@mond-design-system/theme'],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})
