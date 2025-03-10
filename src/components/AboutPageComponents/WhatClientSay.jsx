"use client"

import React, { useState, useEffect } from 'react';
import { aboutPageData } from '../../data/data';
import Image from 'next/image';

const WhatClientSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 780) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    // Set initial value
    updateItemsPerPage();

    // Add resize event listener
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  // Calculate the current items to show
  const currentItems = aboutPageData.slice(currentIndex, currentIndex + itemsPerPage);

  // Next button handler
  const handleNext = () => {
    if (currentIndex + itemsPerPage < aboutPageData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Previous button handler
  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className='w-full pt-Ypad space-y-10 select-none md:pt-[30px]'>
      <div className='flex justify-between sm:flex-col sm:space-y-2 sm:items-end'>
        <h3 className='text-left font-semibold w-full'>What Our Clients Say</h3>
        <div className='flex space-x-1'>
          <div className='rounded-full bg-lightGrey w-[2.37rem] h-[2.37rem] flex items-center justify-center hover:cursor-pointer' onClick={handlePrevious}>
            {/* <img src={require('../../assets/leftArrowAbout.png')} alt="Previous" /> */}
          </div>
          <div className='rounded-full bg-primary w-[2.37rem] h-[2.37rem] flex items-center justify-center hover:cursor-pointer' onClick={handleNext}>
            {/* <img src={require('../../assets/RightArrowAbout.png')} alt="Next" /> */}
          </div>
        </div>
      </div>

      <div className='flex space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        {currentItems.map((item, i) => (
          <div key={i} className='relative flex flex-col space-y-5 bg-[#F7F7F7] p-[32px] rounded-[12px] w-[50%] md:w-full'>
            <div className="border-l-2 pl-3 border-l-primary border-transparent">
              <h6>{item.description}</h6>
            </div>
            <div className='flex space-x-2'>
              <div className='flex justify-center items-center rounded-full w-[2.7rem] h-[2.7rem]'>
                {/* <img className='w-full rounded-full' src={item.img} alt={item.name} /> */}
                <Image
                  src={item.img}
                  alt="Optimized Image"
                  width={0}
                  height={0}
                  sizes="100%"
                  //loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                  className='w-full rounded-full'
                placeholder="blur" 
                blurDataURL={`https://www.paysure.site${item.img.replace("/", "lowres_")}`}
                />
              </div>
              <div className='flex flex-col'>
                <p>{item.name}</p>
                <small>{item.status}</small>
              </div>
            </div>
            <div className='absolute bottom-[32px] right-[32px] w-[4.5rem]'>
              {/* <img className="w-[full]" src={require('../../assets/banner.png')} alt="" /> */}
              <Image
                src={require('../../assets/banner.png')}
                alt="Optimized Image"
                width={0}
                height={0}
                sizes="100%"
                //loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                //// placeholder="blur" 
                // // blurDataURL={`/low/aboutImg1.png`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatClientSay;
