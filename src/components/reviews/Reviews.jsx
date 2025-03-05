'use client'
import React, { useState, useEffect } from 'react';

export const aboutPageData = [
  {
    description: '“Working with this team has completely transformed our business operations...”',
    name: 'Kristin Watson',
    status: 'CEO, Tech Innovators',
    img: '/profile.png',
  },
  {
    description: '“The level of support and expertise provided by this company is simply unmatched...”',
    name: 'Michael Johnson',
    status: 'Marketing Director, Creative Solutions',
    img: '/t1.png',
  },
  {
    description: '“I have never encountered a team as dedicated and professional as this one...”',
    name: 'Emily Davis',
    status: 'Founder, StartUp Ventures',
    img: '/t2.png',
  },
  {
    description: '“Their innovative approach and meticulous attention to detail made a significant impact...”',
    name: 'David Brown',
    status: 'Project Manager, BuildRight',
    img: '/profile.png',
  },
  {
    description: '“From the moment we engaged with them, I felt reassured that we were in capable hands...”',
    name: 'Sarah Smith',
    status: 'Operations Manager, Future Tech',
    img: '/profile.png',
  },
  {
    description: '“My experience with this team has been absolutely fantastic!...”',
    name: 'John Doe',
    status: 'CTO, Innovative Solutions',
    img: '/profile.png',
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Update items per page on screen resize
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 780 ? 1 : 2);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next Slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutPageData.length);
  };

  // Previous Slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aboutPageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='reviews' className='w-full p-[5rem] space-y-10 select-none overflow-hidden relative'>
      <div className='flex justify-between sm:flex-col sm:space-y-2 sm:items-end'>
        <h3 className='text-left font-semibold w-full'>What Our Clients Say</h3>
        <div className='flex space-x-1'>
          <button className='rounded-full bg-lightGrey w-10 h-10 flex items-center justify-center' onClick={handlePrevious}>
            <img src='/leftArrowAbout.png' alt="Previous" />
          </button>
          <button className='rounded-full bg-primary w-10 h-10 flex items-center justify-center' onClick={handleNext}>
            <img src='/RightArrowAbout.png' alt="Next" />
          </button>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {aboutPageData.map((item, i) => (
            <div key={i} className="min-w-[50%] md:min-w-full px-2">
              <div className='relative flex flex-col space-y-5 bg-[#F7F7F7] p-8 rounded-xl shadow-md'>
                <div className="border-l-2 pl-3 border-primary">
                  <h6>{item.description}</h6>
                </div>
                <div className='flex space-x-2'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full' src={item.img} alt={item.name} />
                  </div>
                  <div className='flex flex-col'>
                    <p className="font-semibold">{item.name}</p>
                    <small className="text-gray-500">{item.status}</small>
                  </div>
                </div>
                <div className='absolute bottom-8 right-8 w-16'>
                  <img src='/about_style.png' alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
