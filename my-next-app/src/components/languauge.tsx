/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { usePageContext } from '@/contexts/pageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { FC } from 'react';

interface LanguageProps {
  name: string;
  icon: any;
  color: string;
  svg?: any;
  url?: string;
}
const Languauge: FC<LanguageProps> = ({ name, icon, color, svg, url }) => {
  const { theme } = usePageContext();
  return (
    <button
      type='button'
      title={url ? url : name}
      onClick={() => {
        if (url) {
          window.open(url, '_blank', 'noopener, noreferrer');
        }
        // console.log(url);
      }}
      className={`${
        theme === 'light'
          ? 'group rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition cursor-pointer overflow-hidden'
          : 'w-fit group  bg-white/90 shadow-lg overflow-hidden shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer '
      } flex items-center justify-center gap-2 px-3 py-1 rounded-lg border-[1px] border-gray-500`}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: '15px', color }} />
      {svg ? (
        <Image
          src={svg}
          alt=''
          width={20}
          height={20}
          color={color}
          className='w-[20px] h-[20px]'
        />
      ) : null}
      <span className='text-sm'>{name}</span>
    </button>
  );
};

export default Languauge;

/**  */
