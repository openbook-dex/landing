'use client';

import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

const BuildingOnTheBook = () => {
  return (
    <div className="w-full scale-100 2xl:scale-150 h-[100px] sm:h-[200px] md:h-[256px] bg-[url('/assets/rectangle.png')] relative">
      <div className='w-full bg-[#121616] md:gap-0 gap-10 sm:gap-8 absolute left-[50%] -translate-x-[50%] -bottom-[330%] sm:-bottom-[140%] md:-bottom-[45%] max-w-[320px] sm:max-w-[450px] md:max-w-[700px] lg:max-w-[900px] flex md:flex-row flex-col justify-between items-center px-6 sm:px-4 md:px-7 py-8 sm:py-5 rounded-lg'>
        <div className='flex flex-col gap-2'>
          <Fade duration={500} delay={100} triggerOnce>
            <p className='text-[12px] sm:text-[16px] lg:text-[18px] font-normal textColor'>
              CONTACT US
            </p>
          </Fade>
          <Slide direction='up' duration={500} delay={200} triggerOnce>
            <h2 className='text-[24px] sm:text-[30px] lg:text-[38px] text-white-1/80 font-semibold'>
              Building on the Book?
            </h2>
          </Slide>
          <div className='flex justify-center items-center gap-4 sm:gap-10 lg:gap-24'>
            <Fade duration={500} delay={300} triggerOnce>
            <p className='text-white-1/40 font-medium text-[16px] sm:text-[18px] lg:text-[20px]'>
            <a href="mailto:info@openbook.com" className='text-white-1/40 font-medium text-[16px] sm:text-[18px] lg:text-[20px]'>
              info@openbook.com
            </a>            
            </p>
            </Fade>
            <Slide direction='right' duration={500} delay={400} triggerOnce>
              <div className='w-[90px] sm:w-[200px] lg:w-[250px] h-[40px] sm:h-[60px] lg:h-[86px] relative'>
                <Image
                  src='/assets/sendArrow.png'
                  fill
                  alt=''
                  className='object-fill'
                />
              </div>
            </Slide>
          </div>
        </div>
        <Slide direction='left' duration={500} delay={500} triggerOnce>
          <div className='w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] relative'>
            <Image
              src='/assets/solanaShape.svg'
              fill
              alt=''
              className='object-fill'
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default BuildingOnTheBook;
