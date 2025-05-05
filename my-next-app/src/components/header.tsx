/** @format */

'use client';
import React from 'react';
import RainbowButton from '@/components/RainbowButton';
import { FaGithub } from 'react-icons/fa';
import { usePageContext } from '@/contexts/pageContext';
import Image from 'next/image';
import logo from '@/assets/svgs/image.svg';
//import { Moon, Sun } from '@/components/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { data } from '@/data/headerdata';
//import Cookies from 'js-cookie';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '@/styles/styles.css';

const HeaderComponent = () => {
  const { theme, setTheme } = usePageContext();
  const [keyID, setKey] = React.useState<number>(0);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header
      className={`fixed top-0 z-20 left-0 w-full min-h-10 py-4 md:px-8 px-4 bg-transparent backdrop-blur-md flex justify-center items-center shadow-md slide-from-top`}>
      <nav className='w-full md:w-[1440px] flex justify-between items-center'>
        {/* <span className='text-xl font-serif'>Supreme</span> */}
        <Image
          src={logo}
          width={45}
          height={40}
          alt=''
          className='rounded-full'
        />
        <div className='hidden lg:w-fit lg:flex lg:justify-between py-1 gap-4'>
          {data.map((item) => {
            const { key, title, link, icon } = item;
            return (
              <Link
                href={link}
                title={title}
                key={key}
                onMouseOver={() => {
                  setKey(key);
                }}
                onMouseOut={() => {
                  setKey(0);
                }}
                className={`cursor-pointer border-2 border-gray-400 py-1 px-4 rounded flex items-center gap-1 ${
                  keyID === key ? 'border-2' : 'border-transparent'
                }`}>
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
            <button
              type='button'
              onClick={changeTheme}
              className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition cursor-pointer overflow-hidden'>
              {' '}
              <svg
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
                aria-hidden='true'
                className={`h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600 ${
                  theme === 'light' && 'slide-from-bottom'
                }`}>
                <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z'></path>
                <path
                  d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
                  fill='none'></path>
              </svg>
            </button>
          ) : (
            <button
              type='button'
              onClick={changeTheme}
              className='group rounded-full bg-white/90 px-3 py-2 shadow-lg overflow-hidden shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer'>
              {' '}
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className={`hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 ${
                  theme === 'dark' && 'slide-from-top'
                }`}>
                <path
                  d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'></path>
              </svg>
            </button>
          )}
          <FaGithub
            onClick={() => {
              window.open('https://github.com/Husseincode', '_blank');
            }}
            className='w-7 h-7 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
          />
          {/* <FaWhatsapp
            onClick={() => {
              window.open('http://wa.me//+2348064116181', '_blank');
            }}
            className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
          /> */}
          <RainbowButton
            title={`Let's work`}
            onClick={() => {
              // window.open('http://wa.me//+2348064116181', '_blank');
              window.open('mailto:akanjiabayomi2@gmail.com', '_parent');
            }}
            // onClick={() => {
            //   window.open('https://x.com/Abayomi_hussein', '_blank');
            // }}
            className={clsx(
              `px-4 py-1 rounded-md items-center gap-1 hidden md:flex text-gray-500 border-2 border-gray-400`
            )}>
            <span>Lets work</span>
            {/* <FontAwesomeIcon className='w-4 h-4' icon={faXTwitter} /> */}
          </RainbowButton>
          {/**smaller screens */}
          {/* <span className='flex items-center md:hidden'>
            {' '}
            <Bars color={'#52525b'} className='w-10 h-10' />
          </span> */}
        </div>
      </nav>
    </header>
  );
};

const Header = React.memo(HeaderComponent);

export default Header;

/**<button type="button" aria-label="Switch to light theme" class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"><svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"><path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path><path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path></svg><svg viewBox="0 0 24 24" aria-hidden="true" class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"><path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> */
