/** @format */

import React from 'react';
import RainbowButton from './RainbowButton';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 p-4 bg-transparent backdrop-blur-md border-b shadow-md flex justify-center items-center'>
      <nav className='container'>
        <FaGithub className='w-6 h-6 text-zinc-800' />
        <RainbowButton title='Follow me' className='px-4 py-1'>
          Follow me
        </RainbowButton>
      </nav>
    </header>
  );
};

export default Header;
