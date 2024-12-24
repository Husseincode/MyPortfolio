/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePageContext } from '@/contexts/pageContext';
import { skillsData } from '@/data/data';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useRef } from 'react';
import '@/styles/styles.css';
import { useVisibility } from '@/lib/utils/ref';
import Languauge from './languauge';

const SkillsSectionComponent = () => {
  const getRef = useRef<HTMLDivElement | null>(null);
  const { theme } = usePageContext();
  const textRef = useRef<HTMLDivElement | null>(null);

  const isVisible = useVisibility(getRef);
  const isSecondSectionTextVisible = useVisibility(textRef);

  return (
    <section
      className={clsx(
        `w-full flex flex-col justify-center items-center mt-[10px] lg:mt-[80px] md:px-8 px-4 overflow-hidden`
      )}>
      <div
        ref={textRef}
        className={`md:w-[1440px] w-full flex flex-col items-center justify-center gap-6 lg:w-10/12 ${
          isSecondSectionTextVisible && 'slide-from-left'
        }`}>
        <p className='font-bold text-base slide-from-right'>
          {'My Skills'.toUpperCase()}
        </p>
        <h2 className='font-semibold md:text-5xl text-4xl slide-from-left'>
          What I do
        </h2>
        <p className='text-center text-xl leading-relaxed mx-auto slide-from-bottom'>
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </p>
      </div>
      <section
        className={`container flex flex-row gap-8 py-12 scrollbar-container overflow-x-scroll min-w-[100%] overflow-hidden`}>
        {skillsData.map((card) => {
          const { id, role, details, image, langs } = card;
          return (
            <div
              key={id}
              ref={getRef}
              className={clsx(
                `min-h-[380px] pb-[30px] min-w-full md:w-[380px] md:min-w-[340px] rounded-xl border  ${
                  isVisible && 'slide-from-right'
                } ${
                  theme === 'dark' ? 'border-gray-600' : ''
                } flex flex-col justify-between gap-3 bg-transparent py-4 px-4 shadow-md`
              )}>
              <Image
                src={image}
                alt=''
                width={200}
                height={100}
                className='w-full h-[150px] rounded-t-xl object-cover object-center'
              />
              <div className='flex flex-col gap-3'>
                <span className='text-lg font-semibold text-left w-fit'>
                  {role}
                </span>
                <span className='text-left text-gray-500 text-base'>
                  {details}
                </span>
              </div>

              <div className='flex flex-wrap gap-2'>
                {langs?.map((item, idx: number) => (
                  <Languauge
                    key={idx}
                    name={item.name}
                    color={item.color}
                    svg={item.svg}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export const SkillsSection = React.memo(SkillsSectionComponent);
