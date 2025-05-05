/** @format */
'use client';
import React from 'react';
import clsx from 'clsx';
import { usePageContext } from '@/contexts/pageContext';
import { motion } from 'framer-motion';

interface RainbowButtonProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const RainbowButton = ({
  children,
  className,
  title,
  onClick,
  isDisabled,
}: RainbowButtonProps) => {
  const { theme } = usePageContext();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      // transition={{ delay: 0.3 }}
      title={title}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type='button'
      className={clsx(
        `${
          theme === 'dark'
            ? 'group rounded-full bg-white/90 shadow-lg overflow-hidden shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer border-[1px]'
            : ''
        } ${className} transition duration-500 px-3 py-2`
      )}>
      {children}
    </motion.button>
  );
};

export default RainbowButton;
