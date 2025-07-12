import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Protfoilo/'  // MUST match your repo name exactly, including spelling!
})