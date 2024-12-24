/** @format */
import clsx from 'clsx';
import React from 'react';

export const Projects = () => {
  return (
    <section
      className={clsx(`w-full flex justify-center pt-[50px] md:px-8 px-6`)}>
      <div className='md:w-[1440px] w-full flex flex-col justify-center items-center overflow-hidden h-[70px]'>
        <h2 className='font-semibold md:text-5xl text-4xl slide-from-left text-center'>
          Projects
        </h2>
      </div>
    </section>
  );
};
