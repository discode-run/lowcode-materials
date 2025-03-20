import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.tsx',
      fileName: (format) => `index.${format}.js`,
      name: 'CodeCreator',
      formats: ["cjs", "umd"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.tsx",
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'CodeCreator'
      },
      plugins: [
        replace({
          'process.env.TARO_ENV': '"h5"',
          'process.env.TARO_PLATFORM': '"web"',
          'process.env.TARO_VERSION': '"4.0.5"',
          'process.env.SUPPORT_TARO_POLYFILL': '"disabled"',
          "this._android": "window._android",
          // preventAssignment: true
        }),
      ]
    }
  }
})
