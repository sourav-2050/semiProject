import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Local dev: forward API calls to the Express server (npm start in server-side)
    proxy: {
      '/users': 'http://localhost:3000',
      '/admin/login': 'http://localhost:3000',
    },
  },
})
