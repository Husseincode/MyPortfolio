/** @format */
import React from 'react';
import clsx from 'clsx';
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
  return (
    <footer
      className={clsx(
        `w-full flex flex-col justify-center items-center mt-[10px] lg:mt-[20px] md:px-8 pt-4 py-4 pb-10`
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
          <FontAwesomeIcon
            onClick={() => {
              window.open('https://x.com/Abayomi_hussein', '_blank');
            }}
            className='w-5 h-5 cursor-pointer'
            icon={faXTwitter}
          />
        </div>
      </section>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);