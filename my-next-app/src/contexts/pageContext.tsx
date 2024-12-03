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
import Cookies from 'js-cookie';

const PageContextAPI = createContext<GlobalPageContext | undefined>(undefined);

export const PageContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = Cookies.get('theme');
      return storedTheme ? storedTheme : 'dark';
    }
    return 'dark';
  });
  const [email, setEmail] = useState<string>('');

  /**use Effects */

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);

      Cookies.set('theme', theme);
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
