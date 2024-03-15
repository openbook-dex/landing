'use client';

import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import Link from 'next/link';

const Opos = () => {
  return (
    <div className='w-full overflow-x-hidden overflow-y-hidden py-10 sm:mt-0 xsm:-mt-[4rem] sm:py-24 2xl:mt-[8rem] lg:py-36 relative z-50'>
      <div className='w-full max-w-[1280px] 2xl:max-w-[1650px] 3xl:max-w-[2300px] m-auto md:px-8 px-4 relative'>
        <div className='w-full grid lg:gap-4 grid-cols-1 gap-10 lg:grid-cols-2 justify-center items-center'>
          <div className='w-full lg:order-1 order-2 flex justify-center items-center'>
            <div className='w-full justify-center items-center max-w-[550px] 3xl:max-w-[800px] flex flex-col gap-6'>
              <div className='flex sm:gap-0 gap-4  flex-col w-full items-center lg:items-start '>
                <Slide direction='up' triggerOnce duration={800} delay={200}>
                  <p className='text-[14px] sm:text-[18px] 2xl:text-[22px] 3xl:text-[32px] font-normal textColor'>
                    OPOS
                  </p>
                </Slide>
                <Slide direction='up' triggerOnce duration={800} delay={400}>
                  <h2 className='text-[20px] csm:text-[38px] 2xl:text-[55px] 3xl:text-[80px] mt-0 2xl:my-3 3xl:my-5 lg:text-left text-center font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px] 2xl:leading-[70px] 3xl:leading-[105px]'>
                    The Capital Efficiency of a CLOB.
                  </h2>
                </Slide>
                <Slide direction='up' triggerOnce duration={800} delay={600}>
                  <h2 className='text-[20px] csm:text-[38px] 2xl:text-[40px] 3xl:text-[50px] lg:text-left text-center  font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px]'>
                    The Speed of Solana.
                  </h2>
                </Slide>
              </div>
              <Slide direction='up' triggerOnce duration={800} delay={800}>
                <p className='text-white-4 lg:text-left text-center text-[16px] sm:text-[18px] 2xl:text-[22px] 3xl:text-[26px] font-normal leading-[28px] 3xl:leading-[44px]'>
                  The OpenBook central limit orderbook links many of the largest
                  protocols in Solana DeFi, providing a unified liquidity layer
                  that matches buyers and sellers across the ecosystem, enabling
                  fully on-chain price discovery at the speed of light.
                </p>
              </Slide>

              <Fade
                direction='up'
                triggerOnce
                duration={800}
                delay={1000}
                className='w-full'
              >
                <div className='w-full flex md:justify-start justify-center items-center gap-4 sm:gap-4 mt-0 2xl:mt-4'>
                <Link href="/ecosystem" >
                  <div className='px-[20px] 2xl:px-[25px] 3xl:px-[38px] sm:px-[24px] cursor-pointer hover:opacity-80 py-[10px] sm:py-[12px] 2xl:py-[16px] 3xl:py-[24px] bg-purple-1 text-[16px] sm:text-[18px] 3xl:text-[40px] 2xl:text-[24px] text-white-1 rounded-lg'>
                  See Projects
                  </div>
                </Link>
                  <div className='gradient-wrapper rounded-lg !p-[1px] 2xl:!p-[2px] 3xl:!p-[4px]'>
                  <a href='https://github.com/openbook-dex'
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='inline-block px-[20px] borderGradient cursor-pointer 2xl:px-[25px] 3xl:px-[38px] sm:px-[24px] hover:opacity-80 rounded-lg 2xl:py-[16px] 3xl:py-[24px] py-[10px] sm:py-[12px] bg-transparent text-[16px] 3xl:text-[40px] 2xl:text-[24px] sm:text-[18px] text-white-1'>
                     Build With Us
                      </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Slide
            className='sm:w-auto w-full flex lg:order-2 order-1 justify-center items-center xl:absolute mt-[6rem] xl:mt-0 xl:-top-[5rem] -right-20'
            direction='right'
            duration={1000}
            triggerOnce
            delay={400}
          >
            <div className='w-full sm:w-[600px] 2xl:w-[1000px] 3xl:w-[1200px] h-[320px] sm:h-[450px] xl:h-[600px] 2xl:h-[800px] 3xl:h-[1100px] relative'>
              <Image
                src='/assets/lcd.svg'
                fill
                alt=''
                className='object-fill'
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Opos;
