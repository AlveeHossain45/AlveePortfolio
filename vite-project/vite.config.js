import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AlveePortfolio/', // <-- এখানে আপনার GitHub repository-র নাম লিখুন
  plugins: [react()],
})
