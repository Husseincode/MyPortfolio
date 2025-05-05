/** @format */
'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Languauge from './languauge';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface CardProps {
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
  title?: string;
  langs?: { name: string; icon: any; color: string; svg: any }[];
  projectName: string;
  className?: string;
  style?: React.CSSProperties;
  image: any;
  description?: string;
  url?: string;
}

const Card: FC<CardProps> = ({
  id,
  ref,
  title,
  projectName,
  className,
  style,
  description,
  image,
  langs,
  url,
}) => {
  const [isScaled, setIsScaled] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      key={id}
      ref={ref}
      title={title ? title : projectName}
      style={style}
      className={clsx(
        `min-h-[380px] shrink-0 pb-[30px] w-full md:w-[380px] md:min-w-[340px] rounded-xl border border-gray-600 ${className} flex flex-col justify-between gap-2 bg-transparent py-2 px-4 shadow-md`
      )}>
      <div className='py-2 items-center font-medium text-center border-b-[1px] border-gray-600 flex justify-between text-3xl'>
        <span>{projectName}</span>
        <Languauge name='Site' icon={faLink} color='' url={url} />
      </div>
      <Image
        src={image}
        alt=''
        width={200}
        height={100}
        onMouseOver={() => {
          setIsScaled(true);
        }}
        onMouseOut={() => {
          setIsScaled(false);
        }}
        className={`w-full h-[150px] rounded-t-xl object-cover object-center transition-all duration-500 ${
          isScaled ? 'scale(1,1)' : 'scale-100'
        }`}
      />
      <div className='flex flex-col gap-3'>
        {/* <span className='text-lg font-semibold text-left w-fit'>{role}</span> */}
        <span className='text-left text-gray-500 text-base'>{description}</span>
      </div>

      <div className='flex flex-col gap-2'>
        <h2>Technology used</h2>
        <div className='flex flex-wrap gap-2'>
          {langs?.map((item, idx: number) => (
            <Languauge key={idx} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

/**${
          isVisible && 'slide-from-right'
        } ${
          theme === 'dark' ? 'border-gray-600' : ''
        }  */
