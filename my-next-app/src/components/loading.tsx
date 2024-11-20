/** @format */

'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/assets/svgs/image.svg';
import '@/styles/styles.css';

const LoadingScreen = ({ timeElapsed }: { timeElapsed?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIsExpanded((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <Image
        src={logo}
        alt='Loading logo'
        style={{
          width: isExpanded ? '100px' : '60px',
          height: isExpanded ? '100px' : '60px',
          transition: 'width 0.5s ease, height 0.5s ease', // Smooth transition
        }}
        className={`${timeElapsed ? 'steps-out' : 'slide-from-bottom'}`}
      />
    </div>
  );
};

export default LoadingScreen;
