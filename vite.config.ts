import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The default preserves local development; the Pages workflow supplies its project path.
  base: process.env.VITE_DEPLOY_BASE ?? '/',
  plugins: [react()],
})
