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
import { data } from '@/data/headerdata';
//import Cookies from 'js-cookie';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
      className={clsx(
        `fixed top-0 z-20 left-0 w-full min-h-10 py-4 md:px-8 px-4 bg-transparent backdrop-blur-md flex justify-center items-center shadow-md`
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
          <span className='flex items-center md:hidden'>
            {' '}
            <Bars color={'#52525b'} className='w-10 h-10' />
          </span>
        </div>
      </nav>
    </header>
  );
};

const Header = React.memo(HeaderComponent);

export default Header;
