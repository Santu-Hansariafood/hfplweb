import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'],
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (['react', 'react-dom', 'react-router-dom'].some((pkg) => id.includes(pkg))) {
              return 'react-vendor';
            }
            if (['framer-motion', 'lucide-react', 'sonner'].some((pkg) => id.includes(pkg))) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
