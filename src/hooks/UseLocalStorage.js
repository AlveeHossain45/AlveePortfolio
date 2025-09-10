// src/hooks/useLocalStorage.js
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // যদি কিছু সেভ করা না থাকে, তাহলে initialValue ব্যবহার করো
      if (item === null) {
        return initialValue;
      }
      // চেষ্টা করো সেভ করা তথ্যটি পড়ার জন্য
      return JSON.parse(item);
    } catch (error) {
      // যদি পড়তে গিয়ে কোনো সমস্যা হয় (যেমন আবর্জনা তথ্য), তাহলেও initialValue ব্যবহার করো
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};