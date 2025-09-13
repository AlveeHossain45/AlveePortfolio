import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AlveePortfolio/', // <-- আপনার GitHub repository-র নাম
  plugins: [react()],
})