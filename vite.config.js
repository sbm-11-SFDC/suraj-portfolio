import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// set base to your GitHub Pages repo path
export default defineConfig({
  base: '/suraj-portfolio/',
  plugins: [react()]
})