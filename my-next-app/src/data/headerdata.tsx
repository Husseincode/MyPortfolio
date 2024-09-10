/** @format */

import { InfoCircle, Phone, Settings } from '@/components/icons';

export const data = [
  {
    key: 1,
    title: 'About',
    link: '#about',
    icon: (
      <InfoCircle
        className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
        color={'#52525b'}
      />
    ),
  },
  {
    key: 2,
    title: 'Service',
    link: '#service',
    icon: (
      <Settings
        className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
        color={'#52525b'}
      />
    ),
  },
  {
    key: 3,
    title: 'Contact',
    link: '#contact',
    icon: (
      <Phone
        className='w-6 h-6 text-zinc-600 md:w-6 md:h-6 cursor-pointer'
        color={'#52525b'}
      />
    ),
  },
];
