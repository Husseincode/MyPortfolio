/** @format */

import React from 'react';
import clsx from 'clsx';

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
  return (
    <button
      title={title}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type='button'
      className={clsx(
        `text-sm rainbow-shadow-button bg-gray-100 border-2 ${className}`
      )}>
      {children}
    </button>
  );
};

export default RainbowButton;
