import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // যদি লোকাল স্টোরেজে কিছু না থাকে, তাহলে প্রাথমিক মান ব্যবহার করুন
      if (item === null) {
        return initialValue;
      }
      // যদি ভ্যালিড JSON হয়, তবে সেটি পার্স করে ব্যবহার করুন
      return JSON.parse(item);
    } catch (error) {
      // যদি JSON পার্স করতে সমস্যা হয়, তাহলে সম্ভবত এটি একটি সাধারণ স্ট্রিং
      console.warn(`Could not parse JSON for key "${key}". Using raw value.`);
      return window.localStorage.getItem(key);
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // মান সেভ করার আগে সবসময় JSON.stringify ব্যবহার করুন
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};