/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import Image from 'next/image';
import React, { FC } from 'react';
//import Languauge from './languauge';

interface CardProps {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
  title: string;
  langs: [];
  project: string;
  className: string;
  style: React.CSSProperties;
  image: any;
  description: string;
  url: string;
}

const Card: FC<CardProps> = ({
  id,
  ref,
  title,

  project,
  className,
  style,
  description,

  image,
}) => {
  return (
    <div
      key={id}
      ref={ref}
      title={title ? title : project}
      style={style}
      className={clsx(
        `min-h-[380px] pb-[30px] min-w-full md:w-[380px] md:min-w-[340px] rounded-xl border ${className}  flex flex-col justify-between gap-3 bg-transparent py-4 px-4 shadow-md`
      )}>
      <div className='min-h-[50px] text-center'>{project}</div>
      <Image
        src={image}
        alt=''
        width={200}
        height={100}
        className='w-full h-[150px] rounded-t-xl object-cover object-center'
      />
      <div className='flex flex-col gap-3'>
        {/* <span className='text-lg font-semibold text-left w-fit'>{role}</span> */}
        <span className='text-left text-gray-500 text-base'>{description}</span>
      </div>

      <div className='flex flex-wrap gap-2'>
        {/* {langs?.map((item, idx: number) => (
          <Languauge key={idx} {...item} />
        ))} */}
      </div>
    </div>
  );
};

export default Card;

/**${
          isVisible && 'slide-from-right'
        } ${
          theme === 'dark' ? 'border-gray-600' : ''
        }  */
