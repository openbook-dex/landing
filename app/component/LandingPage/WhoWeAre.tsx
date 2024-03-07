'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const WhoWeAre = () => {
  return (
    <div className='w-full pt-10 pb-24 2xl:mt-[12rem] 2xl:mb-[24rem] mt-0 mb-0'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4 z-50'>
          <Fade
            duration={800}
            className='w-full scale-100 2xl:scale-150'
            triggerOnce
          >
            <p className='text-[18px] md:block hidden cursor-pointer lg:text-left text-center font-normal textColor'>
              WHO WE ARE
            </p>
          </Fade>
          {/* 1st and 2nd col ---> */}
          <div className='w-full grid 2xl:mt-[9rem] grid-cols-1 lg:grid-cols-[1.3fr,2fr] scale-100 2xl:scale-150 gap-6 lg:mt-0 -mt-16 z-50'>
            {/* ist col ---> */}
            <Slide
              direction='left'
              duration={1000}
              className='w-full h-full justify-center flex items-center'
              triggerOnce
            >
              <div className='w-full max-w-[550px] lg:max-w-full h-full relative wrapper1'>
                <div className='px-0 sm:px-6 py-0 sm:py-6 flex flex-col borderGradientC1 justify-between lg:items-start items-center h-full'>
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
                    <p className='text-white-4 lg:text-left text-center text-[16px] font-normal'>
                      An open source and permissionless public utility, built
                      and funded by the community it serves.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <Link
                    href='/about'
                    className='flex cursor-pointer text-white-1 z-50 group hrGr lg:mt-0 mt-8 justify-center items-center gap-2'
                  >
                    <p className='text-[16px] font-normal'>Learn More</p>
                    <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                  </Link>
                </div>
              </div>
            </Slide>
            {/* 2nd col ---> */}
            <Slide
              direction='right'
              duration={1000}
              className='w-full h-full flex justify-center items-center'
              triggerOnce
            >
              <div className='wrapper1 w-full !rounded-tl-[80px] max-w-[550px] lg:max-w-full h-full'>
                <div className='w-full max-w-[550px] !rounded-tl-[80px] lg:max-w-full borderGradientC1 h-full px-0 sm:px-6 py-6 relative justify-between flex flex-col items-center lg:items-start'>
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
                    <div className='w-full lg:w-[900px] lg:hidden block h-[240px] sm:h-[300px] md:h-[300px] lg:h-[450px] relative lg:ml-0 -ml-[0rem] -mb-[4rem] lg:mb-0'>
                      <Image
                        src='/assets/sCol2.svg'
                        fill
                        alt=''
                        className='object-cover lg:object-fill'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col items-center lg:items-start w-full gap-2'>
                    <h2 className='text-[26px] sm:text-[32px] xl:text-[48px] mt-[5rem] sm:mt-[4rem] lg:text-left text-center lg:mt-[6rem] xl:mt-[8rem] tracking-[3px] textColor2 sm:text-white-1 font-terminaExtraDemi'>
                      Unparalleled <br />
                      <span className='textColor21 sm:textColor2'>
                        Composability
                      </span>
                    </h2>
                    <p className='text-white-4 w-full lg:text-left text-center max-w-[400px] text-[16px] font-normal'>
                      Integrate any project, build your own UI with customized
                      fees and features or fork the codebase to explore new use
                      cases.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <Link
                    href='#'
                    className='flex hover:opacity-80 hrGr group z-50 justify-center items-center gap-2 mt-8 lg:mt-14 xl:mt-8'
                  >
                    <p className='text-white-1 text-[16px] font-normal'>
                      Learn More
                    </p>
                    <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
          {/* 3rd + 4rd + 5th col -----> */}
          <div className='w-full grid grid-cols-1 lg:grid-cols-[0.6fr,1fr,1fr] gap-6 z-50 mt-4 2xl:mt-[17rem] scale-100 2xl:scale-150'>
            {/* 3rd col ---->  */}
            <Fade
              duration={800}
              delay={200}
              className='w-full h-full justify-center items-center flex'
              triggerOnce
            >
              <div className='w-full max-w-[550px] !rounded-bl-[80px] h-full wrapper1'>
                <div className='w-full max-w-[550px] !rounded-bl-[80px] borderGradientC1 h-full flex items-center lg:items-start justify-between flex-col px-0 sm:px-6 py-6 lg:pb-6 pb-10 sm:pb-20'>
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
                    <p className='text-white-4 lg:text-left text-center text-[16px] font-normal'>
                      Free to build on. Free to trade on. Free from rent-seeking
                      behavior and venture capital influences.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <div className='w-full sm:flex hidden justify-center lg:justify-end lg:mt-0 mt-8'>
                    <Link
                      href='#'
                      className='flex hrGr group z-50 justify-center items-center gap-2'
                    >
                      <p className='text-white-1 text-[16px] font-normal'>
                        Learn More
                      </p>
                      <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
            {/* 4rth col --->  */}
            <Fade
              duration={800}
              delay={400}
              className='w-full h-full flex justify-center items-center'
              triggerOnce
            >
              <div className='w-full max-w-[550px] h-full wrapper1'>
                <div className='w-full max-w-[550px] borderGradientC1 h-full flex justify-between items-center lg:items-start flex-col px-0 sm:px-6 py-6'>
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
                    <p className='text-white-4 lg:text-left text-center break-all text-[16px] font-normal'>
                      Create public or whitelisted markets, set your own fees,
                      and trade any SPL token.
                    </p>
                  </div>
                  {/* learn more btn ---->  */}
                  <div className='w-full flex justify-center lg:justify-end lg:mt-0 mt-8'>
                    <Link
                      href='#'
                      className='flex group hrGr z-50 justify-center items-center gap-2'
                    >
                      <p className='text-white-1 text-[16px] font-normal'>
                        Learn More
                      </p>
                      <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
            {/* 5th col --->  */}
            <Fade
              duration={800}
              delay={600}
              className='w-full z-40 h-full flex justify-center items-center'
              triggerOnce
            >
              <div className='w-full h-full max-w-[550px] !rounded-tr-[80px] wrapper1'>
                <div className='w-full max-w-[550px] h-full !rounded-tr-[80px] borderGradientC1 flex justify-between items-start flex-col px-0 sm:px-6 py-6'>
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
                    <p className='text-white-4 lg:text-left text-center break-all text-[16px] font-normal'>
                      100% on-chain and noncustodial orderbook.
                    </p>
                  </div>

                  {/* learn more btn ---->  */}
                  <div className='w-full flex justify-center lg:justify-end mt-8 lg:mt-28'>
                    <Link
                      href='#'
                      className='flex hrGr group z-50 justify-center items-center gap-2'
                    >
                      <p className='text-white-1 text-[16px] font-normal'>
                        Learn More
                      </p>
                      <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                    </Link>
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
