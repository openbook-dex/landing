'use client';

import React from 'react';
import Wrapper from '../component/shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../svg/Icons';
import { Fade, Slide } from 'react-awesome-reveal';

const page = () => {
  return (
    <div className='w-full overflow-x-hidden min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-90px)] relative flex justify-center md:justify-start items-center md:items-start'>
      <Wrapper>
        <div className='w-full h-full flex flex-col gap-10 sm:gap-16 pt-0 sm:pt-20 xl:pb-0 pb-0 sm:pb-16 '>
          <Fade duration={800} delay={100}>
            <div className='flex flex-col gap-0 justify-center items-center w-full'>
              <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                ECOSYSTEM
              </p>
              <h1 className='text-[30px] sm:text-[32px] md:text-[48px] text-white-1 font-semibold font-terminaheavy'>
                Our Community
              </h1>
            </div>
          </Fade>
          <div className='w-full grid md:gap-0 gap-8 sm:gap-16 grid-cols-1 md:grid-cols-2 '>
            <Slide direction='left' duration={800} delay={200}>
              {/* 1st col */}
              <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[300px] flex flex-col gap-8 sm:gap-16 md:gap-16 justify-center items-center'>
                  <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      TRADE
                    </p>
                    <div className='w-[160px] sm:w-[250px] h-[26px] sm:h-[50px] relative'>
                      <Image
                        src='/assets/prism.svg'
                        fill
                        alt=''
                        className='object-fill'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-center items-center gap-0'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      SWAP
                    </p>
                    <Icons.jupiter className='w-[160px] sm:w-[256px] h-[50px] sm:h-[78px]' />
                  </div>
                  {/* New Liquidity Section */}
                  <div className='w-full flex flex-col justify-center items-center gap-0'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      TRADE
                    </p>
                    {/* Placeholder for Tools Icon or Image */}
                    <div className='w-[160px] sm:w-[256px] h-[50px] sm:h-[78px] relative'>
                      <Image
                          src='/assets/dropcopy.svg'
                          fill
                          alt=''
                          className='object-fill'
                        />  
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide direction='right' duration={800} delay={200}>
              {/* 2nd col */}
              <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[300px] flex flex-col gap-8 sm:gap-16 md:gap-16 justify-center items-center'>
                  <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      ANALYTICS
                    </p>
                    <div className='w-[160px] sm:w-[250px] h-[39px] sm:h-[50px] relative'>
                      <Image
                        src='/assets/arcana.svg'
                        fill
                        alt=''
                        className='object-fill'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-center items-center gap-0'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      CREATE
                    </p>
                    <Icons.grapple className='w-[160px] sm:w-[256px] h-[44px] sm:h-[78px]' />
                  </div>
                  {/* New BUILD Section */}
                  <div className='w-full flex flex-col justify-center items-center gap-0'>
                    <p className='text-[12px] sm:text-[18px] lg:text-left text-center font-normal textColor'>
                      TRADE
                    </p>
                    {/* Placeholder for new feature icon or image */}
                    <div className='w-[160px] sm:w-[256px] h-[50px] sm:h-[78px] relative'>
                      {/* Placeholder Image or Icon for BUILD */}
                      <Image
                        src='/assets/mango.svg' // Placeholder image source
                        fill
                        alt='BUILD'
                        className='object-fill'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </Wrapper>
      {/* bg shape ---->  */}
      <div className="w-full h-full bg-[url('/assets/looper.png')] bg-no-repeat bg-cover absolute top-0 left-0"></div>
    </div>
  );
};

export default page;
