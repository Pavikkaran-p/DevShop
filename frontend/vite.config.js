import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define:{
    'process.env':process.env
  },
  server:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3001',

        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  build: {
    proxy: {
      "/api": {
        target: "https://devshop-ecxy.onrender.com", 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      }
    }
  }
})
