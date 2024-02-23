'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

const WhoWeAre = () => {
  return (
    <div className='w-full pt-10 pb-24'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4'>
          <Fade duration={800} className='w-full' triggerOnce>
            <p className='text-[18px] md:block hidden lg:text-left text-center font-normal textColor'>
              WHO WE ARE
            </p>
          </Fade>
          {/* 1st and 2nd col ---> */}
          <div className='w-full grid grid-cols-1 lg:grid-cols-[1.3fr,2fr] gap-6 lg:mt-0 -mt-16'>
            {/* ist col ---> */}
            <Slide
              direction='left'
              duration={1000}
              className='w-full h-full z-50'
              triggerOnce
            >
              <div className='w-full h-full justify-center flex items-center'>
                <div className='w-full max-w-[550px] px-0 sm:px-6 py-0 sm:py-6 relative col1 h-full flex flex-col justify-between lg:items-start items-center'>
                  {/* image */}
                  <div className='w-full flex flex-col gap-2'>
                    <div className='block lg:absolute -right-0 top-0'>
                      <div className='w-[450px] lg:block hidden lg:w-[300px] xl:w-[400px] h-[370px] lg:h-[200px] xl:h-[280px] relative'>
                        <Image
                          src='/assets/col1.png'
                          className='object-fill'
                          fill
                          alt=''
                        />
                      </div>
                      <div className='w-full sm:w-[300px] csm:w-[400px] md:w-[550px] lg:hidden block h-[250px] sm:h-[350px] csm:h-[400px] md:h-[470px] relative lg:ml-0 ml-[0%] sm:ml-[16%] csm:ml-[3rem] md:-ml-[2rem] -mb-[6rem]'>
                        <Image
                          src='/assets/sCol1.svg'
                          className='object-fill'
                          fill
                          alt=''
                        />
                      </div>
                    </div>
                    <h2 className='text-[26px] sm:text-[32px] sm:mt-0 text-center lg:text-left xl:text-[48px] mt-12 lg:mt-[6rem] xl:mt-[8rem] tracking-[3px] text-white-1 font-terminaExtraDemi'>
                      A DEX for <br />{' '}
                      <span className='textColor'> The People</span>
                    </h2>
                    <p className='text-white-1/80 lg:text-left text-center text-[16px] font-normal'>
                      An open source and permissionless public utility, built
                      and funded by the community it serves.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <button className='flex cursor-pointer hover:opacity-80 lg:mt-0 mt-8 justify-center items-center gap-2'>
                    <p className='text-white-1 text-[16px] font-normal'>
                      Learn More
                    </p>
                    <Icons.rightArrow className='w-[24px] h-[24px]' />
                  </button>
                </div>
              </div>
            </Slide>
            {/* 2nd col ---> */}
            <Slide
              direction='right'
              duration={1000}
              className='w-full h-full z-50'
              triggerOnce
            >
              <div className='w-full h-full px-0 sm:px-6 py-6 col2 relative justify-between flex flex-col items-center lg:items-start'>
                {/* image ---> */}
                <div className='lg:w-auto w-full block lg:absolute -bottom-1 right-0 xl:-right-1'>
                  <div className='w-[500px] lg:block hidden lg:w-[470px] xl:w-[520px] h-[450px] lg:h-[380px] xl:h-[450px] relative lg:ml-0 -ml-[14rem] -mb-[4rem] lg:mb-0'>
                    <Image
                      src='/assets/col2.png'
                      fill
                      alt=''
                      className='object-fill'
                    />
                  </div>
                  <div className='w-full lg:w-[900px] lg:hidden block h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] relative lg:ml-0 -ml-[0rem] -mb-[4rem] lg:mb-0'>
                    <Image
                      src='/assets/sCol2.svg'
                      fill
                      alt=''
                      className='object-cover sm:object-fill'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center lg:items-start w-full gap-2'>
                  <h2 className='text-[26px]  sm:text-[32px] xl:text-[48px] mt-[5rem] sm:mt-[3rem] lg:text-left text-center lg:mt-[6rem] xl:mt-[8rem] tracking-[3px] textColor2 sm:text-white-1 font-terminaExtraDemi'>
                    Unparalleled <br />
                    <span className='textColor21 sm:textColor2'>
                      Composability
                    </span>
                  </h2>
                  <p className='text-white-1/80 w-full lg:text-left text-center max-w-[400px] text-[16px] font-normal'>
                    Integrate any project, build your own UI with customized
                    fees and features or fork the codebase to explore new use
                    cases.
                  </p>
                </div>
                {/* learn more btn ---->  */}
                <button className='flex hover:opacity-80 justify-center items-center gap-2 mt-8 lg:mt-14 xl:mt-8'>
                  <p className='text-white-1 text-[16px] font-normal'>
                    Learn More
                  </p>
                  <Icons.rightArrow className='w-[24px] h-[24px]' />
                </button>
              </div>
            </Slide>
          </div>
          {/* 3rd + 4rd + 5th col -----> */}
          <div className='w-full grid grid-cols-1 lg:grid-cols-[0.6fr,1fr,1fr] gap-6 mt-2'>
            {/* 3rd col ---->  */}
            <Fade
              duration={800}
              delay={200}
              className='w-full h-full z-50'
              triggerOnce
            >
              <div className='w-full col3 h-full flex items-center lg:items-start justify-between flex-col px-0 sm:px-6 py-6 lg:pb-6 pb-10 sm:pb-20'>
                <div className='w-full max-w-[550px] flex flex-col gap-4'>
                  <h2 className='text-[40px] lg:block hidden tracking-[3px] mt-20 leading-[40px] text-white-1 font-terminaExtraDemi'>
                    <span className='textColor'> Zero</span> Protocol Fees
                  </h2>
                  <h2 className='text-[26px] sm:text-[40px] lg:hidden block tracking-[3px] text-center mt-10 leading-[40px] sm:leading-[50px] text-white-1 font-terminaExtraDemi'>
                    <span className='textColor2 sm:textColor'>
                      {' '}
                      Zero <br />{' '}
                    </span>{' '}
                    Protocol Fees
                  </h2>
                  <p className='text-white-1/80 lg:text-left text-center text-[16px] font-normal'>
                    Free to build on. Free to trade on. Free from rent-seeking
                    behavior and venture capital influences.
                  </p>
                </div>
                {/* learn more btn ---->  */}
                <div className='w-full sm:flex hidden justify-center lg:justify-end lg:mt-0 mt-8'>
                  <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                    <p className='text-white-1 text-[16px] font-normal'>
                      Learn More
                    </p>
                    <Icons.rightArrow className='w-[24px] h-[24px]' />
                  </button>
                </div>
              </div>
            </Fade>
            {/* 4rth col --->  */}
            <Fade
              duration={800}
              delay={400}
              className='w-full h-full z-50'
              triggerOnce
            >
              <div className='w-full flex h-full justify-center items-center'>
                <div className='w-full max-w-[550px] col4 h-full flex justify-between items-center lg:items-start flex-col px-0 sm:px-6 py-6'>
                  <div className='w-full block lg:absolute -right-12 top-0'>
                    <div className='w-full max-w-[300px] xsm:max-w-[250px] sm:max-w-[300px] csm:max-w-[350px] md:max-w-[400px] h-[200px] xsm:h-[200px] sm:h-[250px] csm:h-[300px] relative md:left-0 left-[0rem] xsm:left-12 sm:left-[4rem] csm:left-[2rem]'>
                      <Image
                        src='/assets/col4.png'
                        className='object-fill'
                        fill
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='w-full flex gap-4 flex-col'>
                    <h2 className='text-[26px] sm:text-[40px] z-40 text-center lg:text-left break-all xl:whitespace-nowrap mt-0 lg:mt-[12rem] tracking-[3px] leading-[40px] sm:leading-[45px] text-white-1 font-terminaExtraDemi'>
                      Infinite <br />{' '}
                      <span className='textColor'>Customization </span>
                    </h2>
                    <p className='text-white-1/80 lg:text-left text-center break-all text-[16px] font-normal'>
                      Create public or whitelisted markets, set your own fees,
                      and trade any SPL token.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <div className='w-full z-20 flex justify-center lg:justify-end lg:mt-0 mt-8'>
                    <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                      <p className='text-white-1 text-[16px] font-normal'>
                        Learn More
                      </p>
                      <Icons.rightArrow className='w-[24px] h-[24px]' />
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
            {/* 5th col --->  */}
            <Fade
              duration={800}
              delay={600}
              className='w-full h-full z-40'
              triggerOnce
            >
              <div className='w-full h-full flex justify-center items-center'>
                <div className='w-full max-w-[550px] h-full col5 flex justify-between items-start flex-col px-0 sm:px-6 py-6'>
                  <div className='w-full flex flex-col gap-4'>
                    <h2 className='text-[40px] break-all lg:block hidden mt-[9rem] tracking-[3px] leading-[45px] text-white-1 font-terminaExtraDemi'>
                      Permisonless <br /> Trustless{' '}
                      <span className='textColor2'>
                        {' '}
                        <br /> Transparent
                      </span>
                    </h2>
                    <h2 className='text-[26px] sm:text-[40px] lg:hidden block break-all text-center mt-[5rem] lg:mt-[9rem] tracking-[3px] leading-[40px] sm:leading-[55px] text-white-1 font-terminaExtraDemi'>
                      Permisonless <br /> Trustless <br />
                      <span className='textColor2'> Transparent</span>
                    </h2>
                    <p className='text-white-1/80 lg:text-left text-center break-all text-[16px] font-normal'>
                      100% on-chain and noncustodial orderbook.
                    </p>
                  </div>

                  {/* learn more btn ---->  */}
                  <div className='w-full flex justify-center lg:justify-end mt-8 lg:mt-28'>
                    <button className='flex hover:opacity-80 justify-center items-center gap-2'>
                      <p className='text-white-1 text-[16px] font-normal'>
                        Learn More
                      </p>
                      <Icons.rightArrow className='w-[24px] h-[24px]' />
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhoWeAre;
