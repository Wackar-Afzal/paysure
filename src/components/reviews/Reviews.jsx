'use client'
import React, { useState, useEffect } from 'react';

export const aboutPageData = [
  {
    description: '“I would like to send out a heartfelt appreciation for all of your hard work in helping my Health Counselling clinic take care of our billing and credentialing needs. You have made my job as a practice owner much easier.”',
    name: 'Dr. Allister C',
    status: 'Licensed Professional Counselor',
    img: '/profile.png',
  },
  {
    description: '“We are more than satisfied with PaySure and would highly recommend them to anyone searching for an efficient billing company. Working with PaySure has felt effortless and we are vastly thankful for their services.”',
    name: 'Dr. Saimon Matt',
    status: 'Plastic Surgeon',
    img: '/t1.png',
  },
  {
    description: '“PaySure has been a phenomenal asset to our company. Assisting with billing, credentialing and enrollment, PaySure has been consistently reliable from the first day of our relationship.”',
    name: 'Dr. Belen Bur',
    status: 'Internal Specialist Medicine',
    img: '/t2.png',
  },
  {
    description: '“My Behavioral Health practice started receiving medical billing services in July 2022, and we have experienced a great deal of improvement in the collections of claims, which has improved our bottom line.”',
    name: 'Dr. Mike J',
    status: 'Psychiatrist',
    img: '/alyan-modified.png',
  },
  {
    description: '“Our medical facility has been working with PaySure for about 2 years now and we are very pleased with their services. PaySure Medical Billing is a great company for billing needs. The customer support is great.”',
    name: 'DR Bryan J',
    status: 'Catonsville, Maryland',
    img: '/f.png',
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
