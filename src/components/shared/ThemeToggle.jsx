// src/components/shared/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 p-1 flex items-center transition-colors"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center"
        initial={false}
        animate={{ x: theme === 'night' ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'day' ? (
          <Sun className="w-3 h-3 text-yellow-500" />
        ) : (
          <Moon className="w-3 h-3 text-indigo-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;