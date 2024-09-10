/** @format */

import React from 'react';
import clsx from 'clsx';
import { usePageContext } from '@/contexts/pageContext';
import RainbowButton from '@/components/RainbowButton';
import Image from 'next/image';
import sampleImage from '@/assets/svgs/sampleImage.svg';

const FirstsectionComponent = () => {
  const { theme } = usePageContext();
  return (
    <section
      className={clsx(
        `w-full flex justify-center pt-[100px] md:pt-[100px] lg:pt-[110px] md:px-8 px-4`
      )}>
      <div className='container flex flex-col-reverse lg:flex-row lg:justify-between'>
        <div className='h-[inherit] w-full lg:w-[500px] flex flex-col gap-4 py-3 lg:p-3 md:justify-center'>
          <h1
            className={clsx(
              `lg:text-5xl text-4xl block leading-tight font-bold font-sans ${
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
            className='flex md:flex-row flex-col gap-2 md:items-center'>
            <div className='relative z-0 mb-6 group w-full md:w-[400px] lg:w-[300px]'>
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
        <div className='lg:flex lg:justify-end lg:items-end lg:h-[inherit] w-full md:full lg:w-1/2 mt-6 md:mt-0'>
          <Image
            src={sampleImage}
            alt=''
            width={270}
            height={170}
            className='w-full lg:w-fit lg:h-[550px]'
          />
        </div>
      </div>
    </section>
  );
};

const Firstsection = React.memo(FirstsectionComponent);

export default Firstsection;
