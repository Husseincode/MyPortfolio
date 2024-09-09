/** @format */

import React from 'react';
import clsx from 'clsx';
import { usePageContext } from '@/contexts/pageContext';
import RainbowButton from '@/components/RainbowButton';
import Image from 'next/image';
import sampleImage from '@/assets/svgs/sampleImage.svg';

const Firstsection = () => {
  const { theme } = usePageContext();
  return (
    <section
      className={clsx(`w-full flex justify-center pt-[130px] px-4 ${theme}`)}>
      <div className='container  flex md:flex-row md:justify-between flex-col'>
        <div className='h-[inherit] md:w-1/2 flex flex-col gap-4 p-3 justify-center'>
          <h1
            className={clsx(
              `text-4xl font-bold font-sans ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-800'
              }`
            )}>
            Welcome to my Web Development Portofolio!
          </h1>
          <p className='text-xl leading-relaxed text-gray-500'>
            I&apos;m Akanji Abayomi, a passionate web developer based in
            Nigeria. Here, you&apos;ll get a glimpse of my journey in the world
            of web development, where creativity meets functionality.
          </p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
            action=''
            className='flex md:flex-row flex-col gap-2 items-center'>
            <div className='relative z-0 mb-6 group w-full md:w-[300px]'>
              <input
                type='email'
                name='email'
                id='email'
                className={clsx(
                  `block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-800 peer mt-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-zinc-800'
                  }`
                )}
                placeholder=' '
                required
              />
              <label
                htmlFor='email'
                className='absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-4'>
                Your Email
              </label>
            </div>
            <RainbowButton className='bg-zinc-800 text-sm py-2.5 px-3 md:w-[initial] w-full text-white rounded-md'>
              {'Require Offer'.toUpperCase()}
            </RainbowButton>
          </form>
        </div>
        <div className='h-[inherit] md:w-1/2'>
          <Image
            src={sampleImage}
            alt=''
            width={200}
            height={100}
            className='w-full md:w-[630px] h-[550px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
