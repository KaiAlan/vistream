'use client'

import React from 'react';
import { motion } from 'framer-motion';
const images = [
  {
    title: 'SPACE',
    description: 'Exploring the Cosmos: Journey through Space is an awe-inspiring documentary video that takes viewers on an extraordinary expedition through the vast and mysterious expanse of space.',
    duration: '90 Minutes',
    date: 'Oct 2023',
    views: '436 views',
    img: 'https://picsum.photos/seed/random101/500/500',
  },
  {
    title: 'SPACE',
    description: 'Exploring the Cosmos: Journey through Space is an awe-inspiring documentary video that takes viewers on an extraordinary expedition through the vast and mysterious expanse of space.',
    duration: '90 Minutes',
    date: 'Oct 2023',
    views: '436 views',
    img: 'https://picsum.photos/seed/random102/500/500',
  },
  {
    title: 'SPACE',
    description: 'Exploring the Cosmos: Journey through Space is an awe-inspiring documentary video that takes viewers on an extraordinary expedition through the vast and mysterious expanse of space.',
    duration: '90 Minutes',
    date: 'Oct 2023',
    views: '436 views',
    img: 'https://picsum.photos/seed/random103/500/500',
  },
  // Add more images here
];

const Carousel = () => {
  return (
    <div className="flex overflow-hidden relative">
      {images.map((image, index) => (
        <motion.div
          className="min-w-full box-border relative flex items-center justify-center text-white text-left"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image.img} alt={image.title} className='w-full object-cover h-auto' />
          <div className="absolute top-1/2 left-[10%] -translate-y-1/2 p-[20px] rounded-[10px]">
            <h2 className='text-[3rem] m-0'>{image.title}</h2>
            <p className='text-[1rem] mx-[10px]'>{image.description}</p>
            <span className=' block mx-[5px]'>{image.duration}</span>
            <span className=' block mx-[5px]'>{image.date}</span>
            <span className=' block mx-[5px]'>{image.views}</span>
            <button className='px-2 py-4 bg-red-800 text-white text-sm cursor-pointer rounded-sm'>Play Now</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
