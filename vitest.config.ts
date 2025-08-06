/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'test/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/constants/**',
        'coverage/**'
      ]
    },
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'coverage'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  }
})