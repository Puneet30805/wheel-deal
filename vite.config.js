import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(),
    nodePolyfills(),
    tailwindcss(),
    
  ],
   base: '/wheeldeal/', 
 
  define: {
    'process.env': JSON.stringify({}),
    'process': JSON.stringify({ env: {} }), // Polyfill `process` for browser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['inquirer', 'chalk', 'supports-color'], // Prevent bundling
  },
});