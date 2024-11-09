import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    // Для правильного обслуживания шрифтов и других файлов
    cors: true, // Разрешить CORS для всех источников
  },
})
