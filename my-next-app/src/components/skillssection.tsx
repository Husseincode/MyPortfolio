/** @format */

import { usePageContext } from '@/contexts/pageContext';
import { skillsData } from '@/data/data';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const SkillsSectionComponent = () => {
  const { theme } = usePageContext();
  return (
    <section
      className={clsx(
        `w-full flex flex-col justify-center items-center mt-[10px] lg:mt-[80px] md:px-8 px-4`
      )}>
      <div className='container flex flex-col items-center justify-center gap-6 lg:w-10/12'>
        <p className='font-bold text-base font-sans'>
          {'My Skills'.toUpperCase()}
        </p>
        <h2 className='font-semibold md:text-5xl text-4xl font-sans'>
          What I do
        </h2>
        <p className='text-center text-xl leading-relaxed mx-auto'>
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </p>
      </div>
      <section className='container flex flex-row gap-8 py-12 scrollbar-hide overflow-x-scroll min-w-[100%]'>
        {skillsData.map((card) => {
          const { id, role, details, image } = card;
          return (
            <div
              key={id}
              className={clsx(
                `min-h-[380px] min-w-full md:w-[380px] md:min-w-[340px] rounded-xl border ${
                  theme === 'dark'
                    ? 'shadow-xl border-gray-600'
                    : 'shadow-custom-gray'
                } flex flex-col gap-3 bg-transparent py-4 px-4`
              )}>
              <Image
                src={image}
                alt=''
                width={200}
                height={100}
                className='w-full h-[150px] rounded-t-xl object-cover object-center'
              />
              <span className='text-xl font-semibold font-sans text-left w-fit'>
                {role}
              </span>
              <span className='text-left'>{details}</span>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export const SkillsSection = React.memo(SkillsSectionComponent);
