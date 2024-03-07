'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] justify-center items-center flex relative'>
      <Wrapper style='h-full'>
        <Fade duration={1200} triggerOnce className='w-full h-full'>
          <div className='w-full scale-100 2xl:scale-150 flex flex-col gap-5 justify-center items-center h-full'>
            <Zoom duration={1500} triggerOnce>
              <div className="w-full -mt-28 max-w-[300px] sm:max-w-[450px] md:max-w-[940px] h-[300px] sm:h-[400px] md:h-[490px] bg-[url('/assets/heroShape.svg')] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat">
                <p className='text-[#E0C7FF] mt-[5rem] sm:mt-[9rem] text-[16px] sm:text-[24px] md:text-[30px] font-semibold'>
                  OpenBook
                </p>

                <h1 className='text-[38px] sm:block hidden sm:text-[50px] md:text-[70px] lg:text-[96px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] text-center font-bold font-terminaExtraBold text-white-1'>
                  A DEX For <br /> The People
                </h1>
                <h1 className='text-[36px] sm:hidden block sm:text-[50px] md:text-[70px] lg:text-[96px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] text-center font-bold font-terminaExtraBold text-white-1'>
                  A DEX For The People
                </h1>
              </div>
            </Zoom>
            {/* statistics -----> */}
            <Slide
              className='w-full flex justify-center items-center'
              direction='up'
              duration={1000}
              delay={500}
              triggerOnce
            >
              <div className='w-full max-w-[300px] rounded-xl sm:max-w-[500px] md:max-w-[700px] flex justify-center items-center gradient-wrapper'>
                <div className='w-full py-3 flex justify-center rounded-xl items-center gap-24 sm:gap-28 borderGradient'>
                  <div className='flex justify-center items-center flex-col gap-0'>
                    <p className='text-white-1 text-[20px] sm:text-[30px] md:text-[48px] font-terminaExtraDemi'>
                      $9.8M
                    </p>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white-1/60'>
                      24H Volume
                    </p>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-0'>
                    <p className='text-white-1 text-[20px] sm:text-[30px] md:text-[48px] font-terminaExtraDemi'>
                      8.9k
                    </p>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white-1/60'>
                      Total Markets
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </Fade>
      </Wrapper>
      {/* shade 1 ----> */}
      <div className='absolute -bottom-10 left-0'>
        <Icons.shade1 className='w-[319px] h-[416px]' />
      </div>
      {/* shade 2 ----> */}
      <div className='absolute top-0 right-0'>
        <Icons.shade2 className='w-[319px] h-[416px]' />
      </div>
      {/* arrows ---->  */}
      <Icons.arrow1 className='absolute opacity-50 left-[0] md:left-[3rem] bottom-[8rem] md:bottom-[7rem] w-[80px] sm:w-[149px] h-[90px] sm:h-[167px]' />
      <Icons.arrow1 className='absolute opacity-30 left-[40%] bottom-[15%] sm:bottom-[0rem] w-[90px] sm:w-[123px] h-[100px] sm:h-[139px]' />
      <Icons.arrow1 className='absolute opacity-50 right-[20%] bottom-[30%] w-[40px] sm:w-[70px] h-[50px] sm:h-[80px]' />
      <Icons.arrow1 className='absolute opacity-40 right-0 sm:right-[2%] bottom-[10%] sm:bottom-[2%] w-[70px] sm:w-[107px] h-[70px] sm:h-[120px]' />
    </div>
  );
};

export default Hero;
