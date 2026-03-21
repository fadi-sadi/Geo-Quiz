import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/Geo-Quiz/',
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
