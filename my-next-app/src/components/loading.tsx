/** @format */

'use client';
import React from 'react';
import '@/styles/styles.css';
import '../styles/modules.styles.css';
import logo from '@/assets/svgs/image.svg';
import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='loading'></div>
        <Image
          src={logo}
          width={45}
          height={40}
          alt=''
          className='rounded-full'
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
