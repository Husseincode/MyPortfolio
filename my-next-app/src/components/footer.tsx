/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
import twitterIcon from '@/assets/svgs/twitter-svgrepo-com.svg';
import '@/styles/styles.css';
import Image from 'next/image';

const FooterComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const getRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any =
        getRef?.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      setIsVisible(sectionTop < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      ref={getRef}
      className={clsx(
        `w-full flex flex-col justify-center items-center mt-[10px] lg:mt-[20px] md:px-8 pt-4 py-4 pb-10 overflow-hidden ${
          isVisible && 'slide-from-left'
        }`
      )}>
      <section className='container flex flex-col-reverse md:flex-row md:justify-between justify-center items-center gap-4 md:gap-0'>
        <span className='text-sm'>
          &copy; 2024 Abayomi Akanji, All rights reserved.
        </span>
        <div className='md:gap-6 gap-4 items-center flex'>
          {/* <FaTwitter /> */}
          <FaGithub
            onClick={() => {
              window.open('https://github.com/Husseincode', '_blank');
            }}
            className='w-5 h-5 cursor-pointer'
          />
          <FaFacebook
            onClick={() => {
              window.open(
                'https://web.facebook.com/abayomi.akanji.167',
                '_blank'
              );
            }}
            className='w-5 h-5 cursor-pointer'
          />
          <FaWhatsapp
            onClick={() => {
              window.open('http://wa.me//+2348064116181', '_blank');
            }}
            className='w-5 h-5 cursor-pointer'
          />
          <Image
            onClick={() => {
              window.open('https://x.com/Abayomi_hussein', '_blank');
            }}
            className='w-5 h-5 cursor-pointer'
            src={twitterIcon}
            alt=''
            width={20}
            height={20}
          />
        </div>
      </section>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);
