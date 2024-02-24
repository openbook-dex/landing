'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

const Opos = () => {
  return (
    <div className='w-full py-10 sm:mt-0 -mt-[5rem] xsm:-mt-[4rem] sm:py-24 lg:py-36 relative z-50'>
      <Wrapper>
        <div className='w-full grid lg:gap-4 grid-cols-1 gap-10 lg:grid-cols-2 justify-center items-center'>
          {/* left por ----> */}
          <div className='w-full lg:order-1 order-2 flex justify-center items-center'>
            <div className='w-full justify-center items-center max-w-[550px] flex flex-col gap-6'>
              <div className='flex sm:gap-0 gap-4  flex-col w-full items-center lg:items-start '>
                <Slide direction='up' triggerOnce duration={800} delay={200}>
                  <p className='text-[14px] sm:text-[18px] font-normal textColor'>
                    OPOS
                  </p>
                </Slide>
                <Slide direction='up' triggerOnce duration={800} delay={400}>
                  <h2 className='text-[20px] csm:text-[38px] lg:text-left text-center font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px]'>
                    The Capital Efficiency of a CLOB.
                  </h2>
                </Slide>
                <Slide direction='up' triggerOnce duration={800} delay={600}>
                  <h2 className='text-[20px] csm:text-[38px]lg:text-left text-center  font-terminaExtraDemi text-white-1 font-semibold leading-[30px] csm:leading-[58px]'>
                    The Speed of Solana.
                  </h2>
                </Slide>
              </div>
              <Slide direction='up' triggerOnce duration={800} delay={800}>
                <p className='text-white-1/80 lg:text-left text-center text-[16px] sm:text-[18px] font-normal leading-[28px]'>
                  The OpenBook central limit orderbook links many of the largest
                  protocols in Solana DeFi, providing a unified liquidity layer
                  that matches buyers and sellers across the ecosystem, enabling
                  fully on-chain price discovery at the speed of light.
                </p>
              </Slide>
              {/* buttons ---->  */}

              <Fade
                direction='up'
                triggerOnce
                duration={800}
                delay={1000}
                className='w-full'
              >
                <div className='w-full flex sm:justify-start justify-center items-center gap-4 sm:gap-6'>
                <a href="https://v4xyz.prism.ag/trade" target="_blank" rel="noopener noreferrer" className='inline-block px-[20px] sm:px-[24px] hover:opacity-80 py-[10px] sm:py-[12px] bg-purple-1 text-[16px] sm:text-[18px] text-white-1 rounded-lg'>
                  Trade Now
                </a>
                  <a href="https://github.com/openbook-dex" target="_blank" rel="noopener noreferrer" className='inline-block px-[20px] sm:px-[24px] hover:opacity-80 border-[1px] border-[#9945FF] py-[10px] sm:py-[12px] bg-transparent text-[16px] sm:text-[18px] text-white-1 rounded-lg'>
                    Build With Us
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          {/* right por ---->  */}
          <Slide
            className='sm:w-auto w-full flex lg:order-2 order-1 justify-center items-center xl:absolute xl:bottom-[3rem] right-0'
            direction='right'
            duration={1000}
            triggerOnce
            delay={400}
          >
            <div className='w-full sm:w-[600px] h-[320px] sm:h-[450px] xl:h-[600px] relative'>
              <Image
                src='/assets/lcd.svg'
                fill
                alt=''
                className='object-fill'
              />
            </div>
          </Slide>
        </div>
      </Wrapper>
    </div>
  );
};

export default Opos;
