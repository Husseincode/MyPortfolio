/** @format */

'use client';
import React from 'react';
import '@/styles/styles.css';
import '../styles/modules.styles.css';

const LoadingScreen = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='loading'></div>
    </div>
  );
};

export default LoadingScreen;
