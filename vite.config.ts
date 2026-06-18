import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SchemaLD',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'umd.js'}`,
      formats: ['es', 'umd'],
    },
    sourcemap: false,
    minify: true,
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
