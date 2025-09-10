// src/hooks/useTheme.js

import { useLocalStorage } from './useLocalStorage'; // <-- নিশ্চিত করুন ফাইলের নামটি ছোট হাতের অক্ষরে আছে
import { useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'day'); // 'day' or 'night'

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'day' ? 'night' : 'day'));
  };

  return [theme, toggleTheme];
};