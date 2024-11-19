/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePageContext } from '@/contexts/pageContext';
import { skillsData } from '@/data/data';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import '@/styles/styles.css';

const SkillsSectionComponent = () => {
  const getRef = useRef<HTMLDivElement | null>(null);
  const { theme } = usePageContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isSecondSectionTextVisible, setIsSecondSectionTextVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any =
        getRef?.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;
      // console.log(sectionTop);

      setIsVisible(sectionTop < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleTextScroll = () => {
      const sectionTop: number | undefined | any =
        textRef.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      setIsSecondSectionTextVisible(sectionTop < windowHeight);
    };

    window.addEventListener('scroll', handleTextScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleTextScroll);
    };
  }, []);
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
          const { id, role, details, image } = card;
          return (
            <div
              key={id}
              ref={getRef}
              className={clsx(
                `min-h-[380px] min-w-full md:w-[380px] md:min-w-[340px] rounded-xl border  ${
                  isVisible && 'slide-from-right'
                } ${
                  theme === 'dark' ? 'border-gray-600' : ''
                } flex flex-col gap-3 bg-transparent py-4 px-4 shadow-md`
              )}>
              <Image
                src={image}
                alt=''
                width={200}
                height={100}
                className='w-full h-[150px] rounded-t-xl object-cover object-center'
              />
              <span className='text-lg font-semibold text-left w-fit'>
                {role}
              </span>
              <span className='text-left text-gray-500 text-base'>
                {details}
              </span>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export const SkillsSection = React.memo(SkillsSectionComponent);
