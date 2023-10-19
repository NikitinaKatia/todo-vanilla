import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      services: 'src/services',
      core: 'src/core',
      theme: 'src/theme',
      ui: 'src/ui',
    }
  }
})
