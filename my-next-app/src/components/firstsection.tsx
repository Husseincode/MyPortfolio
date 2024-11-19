/** @format */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { usePageContext } from '@/contexts/pageContext';
import RainbowButton from '@/components/RainbowButton';
import Image from 'next/image';
import sampleImage from '@/assets/svgs/sampleImage.svg';
import { toast } from 'react-hot-toast';
import { isValidEmail } from '@/app/test/emailValidity';
import '@/styles/styles.css';

const FirstsectionComponent = () => {
  const { email, setEmail } = usePageContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const getRef = useRef<HTMLDivElement | null>(null);

  const handleEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const toastStyle = {
    style: {
      background: '#27272a',
      color: 'white',
    },
  };
  const onSubmit = () => {
    if (!email) return toast.error('Please, input an email', toastStyle);
    if (!isValidEmail(email)) {
      toast.error('Invalid email', toastStyle);
      return;
    }

    const recipientEmail = 'akanjiabayomi2@gmail.com';
    const subject = 'REQUIRE OFFER';
    const body = `Hello,\n\nPlease reach out to us at ${email}.\n\nBest regards,`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop: number | undefined | any =
        getRef?.current?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      setIsVisible(sectionTop < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={clsx(
        `w-full flex justify-center pt-[70px] md:pt-[100px] lg:pt-[110px] md:px-8 px-4`
      )}>
      <div className='md:w-[1440px] w-full flex flex-col-reverse lg:flex-row lg:justify-between overflow-hidden'>
        <div
          ref={getRef}
          className={`h-[inherit] w-full lg:w-[500px] flex flex-col gap-4 py-3 lg:p-3 md:justify-center ${
            isVisible && 'slide-from-left'
          }`}>
          <h1
            className={clsx(
              `lg:text-5xl text-4xl block leading-tight font-bold slide-from-top`
            )}>
            Welcome to my Web Development Portofolio!
          </h1>
          <p className='text-xl leading-relaxed text-gray-500 slide-from-left'>
            I&apos;m Akanji Abayomi, a passionate web developer based in
            Nigeria. Here, you&apos;ll get a glimpse of my journey in the world
            of web development, where creativity meets functionality.
          </p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              onSubmit();
            }}
            action=''
            className='flex slide-from-bottom md:flex-row flex-col gap-2 md:gap-0 md:items-center'>
            <div className='relative z-0 mb-6 group w-full md:w-[400px] lg:w-[300px]'>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={handleEmail}
                className={clsx(
                  `block pt-2.5 pb-1 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-800 peer mt-4 `
                )}
                placeholder=' '
                required
                autoComplete='off'
              />
              <label
                htmlFor='email'
                className='absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-4'>
                Your Email
              </label>
            </div>
            <RainbowButton
              onClick={onSubmit}
              className='bg-zinc-800 py-2.5 px-3 md:-mt-3 md:w-[initial] w-full text-white rounded-r-md rounded-l-md md:rounded-r-md md:rounded-l-0'>
              {'Require Offer'.toUpperCase()}
            </RainbowButton>
          </form>
        </div>
        <div className='lg:flex lg:justify-end lg:items-end lg:h-[inherit] w-full md:full lg:w-1/2 mt-6 md:mt-0 slide-from-right'>
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
