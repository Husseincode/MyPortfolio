/** @format */

'use client';
import React, { useState, useContext, createContext, ReactNode } from 'react';
import { GlobalPageContext } from '@/types/GlobalPageContext';

const PageContextAPI = createContext<GlobalPageContext | undefined>(undefined);

export const PageContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  return (
    <PageContextAPI.Provider value={{ theme, setTheme }}>
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
