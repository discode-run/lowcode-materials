import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.ts',
      fileName: (format: string) => `index.${format}.js`,
      name: 'ReactLogViewer',
      formats: ["cjs", "umd"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.ts",
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'ReactLogViewer'
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
          // preventAssignment: true
        }),
      ]
    }
  }
})
