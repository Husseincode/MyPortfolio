/** @format */

import clsx from 'clsx';

export const Bars = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      className={`size-6 ${className}`}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
      />
    </svg>
  );
};

export const Sun = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      className={clsx(`size-6 ${className}`)}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
      />
    </svg>
  );
};

export const Moon = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      className={clsx(`size-6 ${className}`)}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
      />
    </svg>
  );
};

export const Settings = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      className={clsx(`size-6 ${className}`)}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z'
      />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  );
};

export const Phone = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      stroke={color}
      className={clsx(`size-6 ${className}`)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
      />
    </svg>
  );
};

export const InfoCircle = ({
  color,
  className,
  onClick,
  isDisabled,
}: {
  color?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <svg
      onClick={isDisabled ? undefined : onClick}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke={color}
      className={clsx(`size-6 ${className}`)}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
      />
    </svg>
  );
};
