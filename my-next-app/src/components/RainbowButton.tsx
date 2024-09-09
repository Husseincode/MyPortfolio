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
      className={clsx(` bg-gray-100 ${className}`)}>
      {children}
    </button>
  );
};

export default RainbowButton;
