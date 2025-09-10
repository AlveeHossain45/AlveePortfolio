/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- ডার্ক মোড চালু করুন
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // এখানে আপনার সব কাস্টম কালার যোগ করুন
        primary: '#4F46E5', // Indigo 600
        'day-background': '#F9FAFB', // Gray 50
        'day-text': '#111827',     // Gray 900
        'night-background': '#111827', // Gray 900
        'night-text': '#F9FAFB',     // Gray 50
        'night-card': '#1F2937'      // Gray 800
      }
    },
  },
  plugins: [],
}