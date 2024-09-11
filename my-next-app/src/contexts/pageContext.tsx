/** @format */

'use client';
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { GlobalPageContext } from '@/types/GlobalPageContext';

const PageContextAPI = createContext<GlobalPageContext | undefined>(undefined);

export const PageContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // Retrieve theme from local storage or default to 'light'
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? storedTheme : 'light';
    }
    return 'light'; // Default value during SSR
  });
  const [email, setEmail] = useState<string>('');

  {
    /**use Effects */
  }
  useEffect(() => {
    // Retrieve theme from local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apply the theme to the document body
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      // Save the theme to local storage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <PageContextAPI.Provider value={{ theme, setTheme, email, setEmail }}>
      {children}
    </PageContextAPI.Provider>
  );
};

// Create a custom hook to use the GlobalContext
export const usePageContext = () => {
  const context = useContext(PageContextAPI);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a GlobalPageContext');
  }
  return context;
};
