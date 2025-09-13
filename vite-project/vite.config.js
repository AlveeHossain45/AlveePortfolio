import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/AlveePortfolio/', // <-- এই লাইনটি ডিলিট করে দিন বা কমেন্ট আউট করুন
  plugins: [react()],
})