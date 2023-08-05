import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  eslintPlugin({
    cache: false,
    include: ['src/**/*.tsx', 'src/**/*.ts'],
    exclude: ['node_modules/**', 'dist/**'],
    fix: true,
    throwOnWarning: true,
    throwOnError: true,
  })  
  ],
})
