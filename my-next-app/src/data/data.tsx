/** @format */
import fxImg from '@/assets/images/fx-style.webp';
import optImg from '@/assets/images/automation-and-optimization.jpg';
import techStark from '@/assets/images/techSTark.jpg';
import userCentricImg from '@/assets/images/userCentered.jpeg';
//import testingImg from '@/assets/images/test.png';
import { faCode, faSpinner } from '@fortawesome/free-solid-svg-icons';
import nextIcon from '../svgs/nextjs-icon-svgrepo-com.svg';
import tailwindIcon from '../svgs/tailwind-svgrepo-com.svg';
//import cypressIcon from '../svgs/cypress-svgrepo-com.svg';
//import jestIcon from '../svgs/jest-snapshot-svgrepo-com.svg';
import tsIcon from '../svgs/typescript-official-svgrepo-com.svg';
import {
  faBootstrap,
  faCentercode,
  faCss3,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

export const skillsData = [
  {
    id: 1,
    role: 'Frontend Web Development',
    details: `Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.`,
    image: fxImg,
    langs: [
      {
        name: 'HTML',
        icon: faCode,
        color: '#E44D26',
        svg: null,
      },
      {
        name: 'CSS',
        icon: faCss3,
        color: '#1E90FF',
        svg: null,
      },
      {
        name: 'Javasccript',
        icon: faJs,
        color: 'yellow',
        svg: null,
      },
      {
        name: 'Typescript',
        icon: null,
        color: '',
        svg: tsIcon,
      },
    ],
  },
  {
    id: 2,
    role: 'Technology Stack',
    details: `I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like ReactJs and NextJs.`,
    image: techStark,
    langs: [
      {
        name: 'ReactJs',
        icon: faReact,
        color: '#1E90FF',
        svg: null,
      },
      {
        name: 'NextJs',
        svg: nextIcon,
        color: '#1E90FF',
        icon: null,
      },
      {
        name: 'Bootstrap',
        icon: faBootstrap,
        color: 'purple',
        svg: null,
      },
      {
        name: 'Tailwind CSS',
        icon: null,
        color: '',
        svg: tailwindIcon,
      },
    ],
  },
  {
    id: 3,
    role: 'Web Optimization',
    details: `Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.`,
    image: optImg,
    langs: [
      {
        name: 'Lazy Loading',
        icon: faSpinner,
        color: 'dodgerblue',
        svg: null,
      },
    ],
  },
  {
    id: 4,
    role: 'User-Centric Design',
    details: `My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.`,
    image: userCentricImg,
    langs: [
      {
        name: 'User Centric',
        icon: faCentercode,
        color: 'dodgerblue',
        svg: null,
      },
    ],
  },
  // {
  //   id: 5,
  //   role: 'Testing and Quality Assurance',
  //   details: `I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.`,
  //   image: testingImg,
  //   langs: [
  //     {
  //       name: 'Cypress',
  //       icon: null,
  //       color: '',
  //       svg: cypressIcon,
  //     },
  //     {
  //       name: 'Jest',
  //       svg: jestIcon,
  //       color: '',
  //       icon: null,
  //     },
  //   ],
  // },
];
