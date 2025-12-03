import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import compress from 'vite-plugin-compression';
import path from 'node:path'; // 👈 关键：引入 path

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // 生成 bundle 分析报告
    compress(), // 生成 .gz 文件
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 告诉 Vite @ = src
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@headlessui/react', 'framer-motion'],
        },
      },
    },
  },
});
