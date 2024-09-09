/** @format */

import React from 'react';
import RainbowButton from '@/components/RainbowButton';
import { FaGithub } from 'react-icons/fa';
import { usePageContext } from '@/contexts/pageContext';
import Image from 'next/image';
import logo from '@/assets/svgs/image.svg';
import { Bars, Moon, Sun } from '@/components/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { data } from '@/components/headerdata';

const HeaderComponent = () => {
  const { theme, setTheme } = usePageContext();
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header
      className={clsx(
        `fixed top-0 left-0 w-full min-h-10 p-4 bg-transparent backdrop-blur-md flex justify-center items-center ${
          theme === 'dark' ? 'shadow-2xl' : 'shadow-custom-gray'
        }`
      )}>
      <nav className='container flex justify-between items-center'>
        {/* <span className='text-xl font-serif'>Supreme</span> */}
        <Image
          src={logo}
          width={45}
          height={40}
          alt=''
          className='rounded-full'
        />
        <div className='hidden md:flex items-center gap-10 h-[inherit]'>
          {data.map((item) => {
            const { key, title, link, icon } = item;
            return (
              <Link
                href={link}
                title={title}
                key={key}
                className='cursor-pointer flex items-center gap-1'>
                {icon}
                <span>{title}</span>
              </Link>
            );
          })}
        </div>
        {/**tablets and larger screens */}
        <div className='md:gap-6 gap-4 items-center flex'>
          {/* <FaTwitter /> */}
          {theme === 'light' ? (
            <Moon
              className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
              color={'#52525b'}
              onClick={changeTheme}
            />
          ) : (
            <Sun
              className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
              color={'#52525b'}
              onClick={changeTheme}
            />
          )}
          <FaGithub
            onClick={() => {
              window.open('https://github.com/Husseincode', '_blank');
            }}
            className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
          />
          <RainbowButton
            title='Follow me'
            className={clsx(
              `px-4 py-1 rounded-md items-center gap-1 hidden md:flex ${
                theme === 'bg-white text-zinc-800' ? 'bg-zinc-800 ' : ''
              } text-gray-500 border-2 border-gray-400`
            )}>
            <span>Follow me</span>
          </RainbowButton>
          {/**smaller screens */}
          <span className='flex items-center md:hidden'>
            {' '}
            <Bars
              color={theme === 'light' ? 'black' : 'white'}
              className='w-10 h-10'
            />
          </span>
        </div>
      </nav>
    </header>
  );
};

const Header = React.memo(HeaderComponent);

export default Header;
