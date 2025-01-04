import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 3000, 
  },
  resolve: {
    alias: {
      '@': '/src',
      '@common': '/src/common',
      '@constants': '/src/constants',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@models': '/src/models',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@utils': '/src/utils'
    }
  }
})
