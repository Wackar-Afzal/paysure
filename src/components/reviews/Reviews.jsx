'use client'
import React, { useState, useEffect } from 'react';
// import { aboutPageData } from '../../data/data';
export const aboutPageData = [
    {
      description: '“Working with this team has completely transformed ouasdasd r business operations. Their insights, strategies, and dedicated support have led us to achieve unprecedented growth, and we are incredibly grateful for their partnership. I highly recommend them to anyone looking to elevate their business!”',
      name: 'Kristin Watson',
      status: 'CEO, Tech Innovators',
      img: '/profile.png',
    },
    {
      description: '“The level of support and expertise provided by this company is simply unmatched. They not only listen to our needs but also proactively offer solutions that truly make a difference. Their commitment to delivering results is evident in everything they do, and I cannot recommend them highly enough.”',
      name: 'Michael Johnson',
      status: 'Marketing Director, Creative Solutions',
      img: '/t1.png',
    },
    {
      description: '“I have never encountered a team as dedicated and professional as this one. Their responsiveness and ability to deliver outstanding work consistently have exceeded all my expectations. It has been a pleasure collaborating with them on various projects, and I look forward to morsfdase in the future!”',
      name: 'Emily Davis',
      status: 'Founder, StartUp Ventures',
      img: '/t2.png',
    },
    {
      description: '“Their innovative approach and meticulous attention to detail made a significant impact on our project outcomes. We were able to achieve our goals and surpass them, thanks to their expertise and strategic guidance. We are extremely satisfied with the results and grateful for asdsdastheir partnership.”',
      name: 'David Brown',
      status: 'Project Manager, BuildRight',
      img: '/profile.png',
    },
    {
      description: '“From the moment we engaged with them, I felt reassured that we were in capable hands. They took the time to thoroughly understand our specific needs and tailored their approach accordingly. The outcomes have been nothing short of exceptional, and I cannot recommend them asdasdasdasdasdhighly enough.”',
      name: 'Sarah Smith',
      status: 'Operations Manager, Future Tech',
      img: '/profile.png',
    },
    {
      description: '“My experience with this team has been absolutely fantastic! Their expertise and innovative ideas have propelled our projects forward, and the results speak for themselves. I would recommend their services to anyone looking for a reliable partner in their business asdasdasda sdasdasd a sdas journey.”',
      name: 'John Doe',
      status: 'CTO, Innovative Solutions',
      img: '/profile.png',
    },
  ];
const Reviews = () => {
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
    <div className='w-full p-[4rem] space-y-10 select-none md:pt-[30px] md:p-[2rem]'>
      <div className='flex justify-between sm:flex-col sm:space-y-2 sm:items-end'>
        <h3 className='text-left font-semibold w-full'>What Our Clients Say</h3>
        <div className='flex space-x-1'>
          <div className='rounded-full bg-lightGrey w-[2.37rem] h-[2.37rem] flex items-center justify-center hover:cursor-pointer' onClick={handlePrevious}>
            <img src='/leftArrowAbout.png' alt="Previous" />
          </div>
          <div className='rounded-full bg-primary w-[2.37rem] h-[2.37rem] flex items-center justify-center hover:cursor-pointer' onClick={handleNext}>
            <img src='/RightArrowAbout.png' alt="Next" />
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
                <img className='w-full rounded-full' src={item.img} alt={item.name} />
              </div>
              <div className='flex flex-col'>
                <p>{item.name}</p>
                <small>{item.status}</small>
              </div>
            </div>
            <div className='absolute bottom-[32px] right-[32px] w-[4.5rem]'>
              <img className="w-[full]" src='/about_style.png' alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
