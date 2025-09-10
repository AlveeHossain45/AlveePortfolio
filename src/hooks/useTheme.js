// src/hooks/useTheme.js
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

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