import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build/lowcode',
    rollupOptions: {
      input: {
        // 低代码引擎注册的物料描述文件
        'meta.js': path.resolve(__dirname, 'lowcode/meta.ts'),
        // 低代码引擎注册的物料渲染器文件
        'render.js': path.resolve(__dirname, 'src/index.tsx'),
      },
      output: {
        entryFileNames: '[name]',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5555,
    host: '0.0.0.0',
  },
}); 