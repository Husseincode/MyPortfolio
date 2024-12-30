/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { StaticImageData } from 'next/image';
import trishaImage from '@/assets/images/Trisha - Google Chrome 12_24_2024 3_08_11 PM.png';
import colorGenImage from '@/assets/images/ColorGenerator.png';
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import nextIcon from '../svgs/nextjs-icon-svgrepo-com.svg';
import tailwindIcon from '../svgs/tailwind-svgrepo-com.svg';
import tsIcon from '../svgs/typescript-official-svgrepo-com.svg';
import viteSvg from '@/assets/images/vite-svgrepo-com.svg';
import jarvisImage from '@/assets/images/Jarvis - Built with Next.js - Google Chrome 12_29_2024 7_04_51 PM.png';
import openAI from '@/assets/svgs/openai-svgrepo-com.svg';
import firebaseIcon from '@/assets/svgs/firebase-svgrepo-com.svg';

export const project_data: {
  projectName: string;
  url: string;
  image: StaticImageData;
  description: string;
  langs: { name: string; icon: any; color: string; svg: any }[];
}[] = [
  {
    projectName: 'Trisha',
    url: 'https://trisha-fawn.vercel.app/',
    image: trishaImage,
    description: `Bring the freedom of multiple hairstyles and a completely natural look. High-quality and perfect fit 0.03 mm ultra-thin skin health systems without side effects. Enhance your beauty`,
    langs: [
      {
        name: 'React',
        icon: faReact,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'NextJs',
        icon: '',
        color: '',
        svg: nextIcon,
      },
      {
        name: 'Tailwind',
        icon: '',
        color: '',
        svg: tailwindIcon,
      },
      {
        name: 'CSS',
        icon: faCss3,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'Typescript',
        icon: '',
        color: '',
        svg: tsIcon,
      },
      {
        name: 'Javascript',
        icon: faJs,
        color: 'yellow',
        svg: null,
      },
    ],
  },
  {
    projectName: 'Color Gen',
    url: 'https://color-generator-sand.vercel.app/',
    image: colorGenImage,
    description: `A web app for exploring and generating colors using an input range. Users can view the generated colors in multiple formats like HEX, RGB, and HSL, with an easy copy-to-clipboard feature for seamless usage.`,
    langs: [
      {
        name: 'React',
        icon: faReact,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'Vite',
        icon: '',
        color: '',
        svg: viteSvg,
      },
      {
        name: 'Tailwind',
        icon: '',
        color: '',
        svg: tailwindIcon,
      },
      {
        name: 'CSS',
        icon: faCss3,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'Typescript',
        icon: '',
        color: '',
        svg: tsIcon,
      },
      {
        name: 'Javascript',
        icon: faJs,
        color: 'yellow',
        svg: null,
      },
    ],
  },
  {
    projectName: 'Jarvis',
    url: 'https://chatai-seven-topaz.vercel.app/',
    image: jarvisImage,
    description: `A web app for chatting and exploring conversations in real-time. Users can send and receive messages, with options to view and respond in various formats (text, emojis).`,
    langs: [
      {
        name: 'React',
        icon: faReact,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'NextJs',
        icon: '',
        color: '',
        svg: nextIcon,
      },
      {
        name: 'Tailwind',
        icon: '',
        color: '',
        svg: tailwindIcon,
      },
      {
        name: 'CSS',
        icon: faCss3,
        color: 'dodgerblue',
        svg: null,
      },
      {
        name: 'Typescript',
        icon: '',
        color: '',
        svg: tsIcon,
      },
      {
        name: 'Javascript',
        icon: faJs,
        color: 'yellow',
        svg: null,
      },
      {
        name: 'Openai',
        icon: '',
        color: '',
        svg: openAI,
      },
      {
        name: 'Firebase',
        icon: '',
        color: '',
        svg: firebaseIcon,
      },
    ],
  },
];
