/** @format */
import { project_data } from '@/data/project';
import clsx from 'clsx';
import React from 'react';
import Card from './card';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section
      className={clsx(`w-full flex justify-center pt-[50px] md:px-8 px-4`)}>
      <div className='md:w-[1440px] w-full flex flex-col justify-center items-center overflow-hidden gap-[50px]'>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='font-semibold border-b-[3px] border-blue-500 pb-1 md:text-5xl text-4xl slide-from-left text-center'>
          Projects
        </motion.h2>
        <div className='flex gap-[30px] flex-row overflow-x-auto w-full scrollbar-hide overflow-y-clip'>
          {project_data.map((item, idx: number) => (
            <Card
              key={idx}
              projectName={item.projectName}
              url={item.url}
              image={item.image}
              langs={item.langs}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
