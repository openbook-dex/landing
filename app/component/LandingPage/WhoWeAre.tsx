'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const WhoWeAre = () => {
  return (
    <div className='w-full overflow-x-hidden pt-10 pb-24 2xl:mt-[4rem] 2xl:mb-[4rem] mt-8 sm:mt-0 mb-0'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4 z-50'>
          <Fade duration={800} className='w-full' triggerOnce>
            <p className='text-[18px] 2xl:text-[22px] 3xl:text-[32px] md:block hidden cursor-pointer lg:text-left text-center font-normal textColor'>
              WHO WE ARE
            </p>
          </Fade>
          <div className='w-full grid 2xl:mt-[3rem] grid-cols-1 lg:grid-cols-[1.3fr,2fr] gap-6 2xl:gap-8 3xl:gap-12 lg:mt-0 -mt-16 z-50'>
            <Slide
              direction='left'
              duration={1000}
              className='w-full justify-center flex items-center overflow-hidden'
              triggerOnce
            >
              <div className='w-full max-w-[550px] 2xl:w-[680px] 3xl:w-[850px] lg:max-w-full h-full relative wrapper1'>
                <div className='px-0 w-full sm:px-6 py-0 sm:py-6 flex flex-col borderGradientC1 justify-between lg:items-start items-center h-full'>
                  <div className='w-full flex flex-col gap-2'>
                  <div className='block lg:absolute -right-0 -top-[0px]'>
                      <div className='w-[450px] lg:block hidden lg:w-[320px] xl:w-[380px] 2xl:w-[600px] 3xl:w-[700px] h-[100px] 2xl:h-[400px] 3xl:h-[480px] lg:h-[200px] xl:h-[300px] relative'>
                        <Image
                          src='/assets/col11.svg'
                          className='object-cover'
                          fill
                          alt=''
                        />
                      </div>
                      <div className='w-full sm:w-[520px] csm:w-[520px] md:w-[550px] lg:hidden block h-[250px] sm:h-[430px] csm:h-[420px] md:h-[300px] relative lg:ml-0 ml-[0%] sm:-ml-[50px] csm:ml-[0rem] md:-ml-[2rem] -mb-[6rem]'>
                        <Image
                          src='/assets/sCol1.svg'
                          className='object-fill'
                          fill
                          alt=''
                        />
                      </div>
                    </div>
                    <h2 className='text-[26px] sm:text-[32px] sm:mt-2 md:mt-14 text-center lg:text-left xl:text-[48px] 2xl:text-[58px] 3xl:text-[75px] mt-12 lg:mt-[4rem] xl:mt-[8rem] tracking-[3px] text-white-1 font-terminaExtraDemi'>
                      A DEX for <br />
                      <span className='textColor'> The People</span>
                    </h2>
                    <p className='text-white-4 lg:text-left text-center text-[16px] 2xl:text-[22px] 3xl:text-[32px] font-normal'>
                      An open source and permissionless public utility, built
                      and funded by the community it serves.
                    </p>
                  </div>
                  <a
                    href='https://discord.gg/pFvxfWcsvt'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex cursor-pointer text-white-1 z-50 group hrGr lg:mt-0 mt-8 justify-center items-center gap-2'>
                    <p className='text-[16px] 2xl:text-[22px] 3xl:text-[32px] font-normal'>Join our community</p>
                    <FiArrowRight className='text-[20px] text-white-1 group-hover:text-[#00ffe5]' />
                  </a>
                </div>
              </div>
            </Slide>
            <Slide
              direction='right'
              duration={1000}
              className='w-full flex justify-center items-center'
              triggerOnce
            >
              <div className='wrapper1 w-full !rounded-tl-[80px] max-w-[550px] lg:max-w-full h-full'>
                <div className='w-full max-w-[550px] !rounded-tl-[80px] lg:max-w-full borderGradientC1 h-full px-0 sm:px-6 py-6 relative justify-between flex flex-col items-center lg:items-start'>
                <div className='lg:w-auto w-full block lg:absolute bottom-1 right-0 lg:right-2 xl:right-1'>
                    <div className='w-[500px] 2xl:w-[590px] 3xl:w-[750px] lg:block hidden lg:w-[320px] xl:w-[420px] h-[450px] lg:h-[260px] 2xl:h-[500px] 3xl:h-[650px] xl:h-[350px] relative lg:ml-0 -ml-[14rem] -mb-[4rem] lg:mb-0'>
                      <Image
                        src='/assets/object.svg'
                        fill
                        alt=''
                        className='object-cover'
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
                    <h2 className='text-[26px] sm:text-[32px] 3xl:text-[75px] xl:text-[48px] 2xl:text-[58px] mt-[5rem] sm:mt-[4rem] lg:text-left text-center lg:mt-[6rem] xl:mt-[8rem] tracking-[3px] textColor2 sm:text-white-1 font-terminaExtraDemi'>
                      Unparalleled <br />
                      <span className='textColor21 sm:textColor2'>
                        Composability
                      </span>
                    </h2>
                    <p className='text-white-4 w-full lg:text-left 2xl:text-[22px] 3xl:text-[32px] text-center max-w-[400px] 3xl:max-w-[600px] text-[16px] font-normal'>
                      Integrate any project, build your own UI with customized
                      fees and features or fork the codebase to explore new use
                      cases.
                    </p>
                  </div>
                  <a
                    href='https://github.com/openbook-dex/openbook-v2'
                    className='flex hover:opacity-80 hrGr group z-50 justify-center items-center gap-2 mt-8 lg:mt-14 xl:mt-8'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p className='text-white-1 3xl:text-[32px] 2xl:text-[22px] text-[16px] font-normal'>
                    DEX V2 Code
                    </p>
                    <FiArrowRight className='text-[20px] 3xl:text-[36px] 2xl:text-[26px] text-white-1 group-hover:text-[#00ffe5]' />
                  </a>
                </div>
              </div>
            </Slide>
          </div>
          <div className='w-full grid grid-cols-1 lg:grid-cols-[1.3fr,2fr] xl:grid-cols-[0.8fr,1fr,1fr] gap-6 2xl:gap-8 3xl:gap-12 z-50 mt-4 lg:mt-3 2xl:mt-[2rem] 3xl:mt-[48px]'>
            <Fade
              duration={800}
              delay={200}
              className='w-full justify-center items-center flex'
              triggerOnce
            >
              <div className='w-full max-w-[550px] !rounded-bl-[80px] h-full wrapper1'>
                <div className='w-full max-w-[550px] !rounded-bl-[80px] borderGradientC1 h-full flex items-center lg:items-start justify-between flex-col px-0 sm:px-6 py-6 lg:pb-6 pb-10 sm:pb-20'>
                  <div className='w-full max-w-[550px] flex flex-col gap-4'>
                    <h2 className='text-[40px] lg:block hidden 2xl:text-[58px] 3xl:text-[75px] tracking-[3px] mt-20 leading-[50px] 2xl:leading-[70px] 3xl:leading-[90px] text-white-1 font-terminaExtraDemi'>
                      <span className='textColor'> Zero</span> Protocol Fees
                    </h2>
                    <h2 className='text-[26px] sm:text-[40px] lg:hidden block tracking-[3px] text-center mt-10 leading-[40px] sm:leading-[50px] text-white-1 font-terminaExtraDemi'>
                      <span className='textColor2 sm:textColor'>
                        {' '}
                        Zero <br />{' '}
                      </span>{' '}
                      Protocol Fees
                    </h2>
                    <p className='text-white-4 lg:text-left 2xl:text-[22px] 3xl:text-[32px] text-center text-[16px] font-normal'>
                      Free to build on. Free to trade on. Free from rent-seeking
                      behavior and venture capital influences.
                    </p>
                  </div>
                  <div className='w-full sm:flex hidden justify-center lg:justify-end lg:mt-0 mt-8 3xl:mt-[4rem]'>
                  <a
                    href='https://github.com/openbook-dex/openbook-v2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex hrGr group z-50 justify-center items-center gap-2'
                  >
                  <p className='text-white-1 3xl:text-[32px] 2xl:text-[22px] text-[16px] font-normal'>
                    Learn More
                  </p>
                  <FiArrowRight className='text-[20px] 3xl:text-[36px] 2xl:text-[26px] text-white-1 group-hover:text-[#00ffe5]' />
                  </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              duration={800}
              delay={400}
              className='w-full flex justify-center items-center'
              triggerOnce
            >
              <div className='w-full max-w-[550px] lg:max-w-[700px] xl:max-w-[650px] 3xl:max-w-[800px] h-full wrapper1'>
                <div className='w-full max-w-[550px] lg:max-w-[700px] 3xl:max-w-[800px] xl:max-w-[650px] borderGradientC1 h-full flex justify-between items-center lg:items-start flex-col px-0 sm:px-6 py-6'>
                  <div className='w-full flex justify-center lg:justify-end lg:absolute right-0 lg:right-4 top-0 lg:ml-0 -ml-[5rem] sm:-ml-[7rem] md:-ml-[5rem] mt-[1rem]'>
                    <div className='w-full max-w-[300px] 2xl:max-w-[500px] 3xl:max-w-[600px] xsm:max-w-[250px] sm:max-w-[350px] csm:max-w-[380px] md:max-w-[450px] lg:max-w-[420px] 2xl:h-[400px] 3xl:h-[500px] h-[250px] xsm:h-[200px] sm:h-[280px] csm:h-[350px] relative'>
                      <Image
                        src='/assets/col4.svg'
                        className='object-cover'
                        fill
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='w-full flex gap-4 flex-col'>
                    <h2 className='text-[26px] sm:text-[40px] 2xl:text-[58px] 3xl:text-[75px] z-40 text-center lg:text-left break-all xl:whitespace-nowrap -mt-10 sm:-mt-[4rem] md:-mt-[4rem] lg:mt-[12rem] 2xl:mt-[14rem] 3xl:mt-[22rem] tracking-[3px] leading-[40px] 2xl:leading-[80px] sm:leading-[55px] text-white-1 font-terminaExtraDemi'>
                      Infinite <br />{' '}
                      <span className='textColor break-words'>
                        Customization
                      </span>
                    </h2>
                    <p className='text-white-4 lg:text-left 3xl:text-[32px] 2xl:text-[22px] text-center break-all text-[16px] font-normal'>
                      Create public or whitelisted markets, set your own fees,
                      and trade any SPL token.
                    </p>
                  </div>
                  <div className='w-full flex justify-center lg:justify-end lg:mt-6 mt-8 2xl:mt-12'>
                  <a
                    href='https://github.com/openbook-dex/openbook-v2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex hrGr group z-50 justify-center items-center gap-2'
                  >
                    <p className='text-white-1 3xl:text-[32px] 2xl:text-[22px] text-[16px] font-normal'>
                      Learn More
                    </p>
                     <FiArrowRight className='text-[20px] 3xl:text-[36px] 2xl:text-[26px] text-white-1 group-hover:text-[#00ffe5]' />
                  </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade
              duration={800}
              delay={600}
              className='w-full z-40 flex justify-center items-center'
              triggerOnce
            >
              <div className='w-full h-full max-w-[550px] 2xl:max-w-[600px] 3xl:max-w-[800px] !rounded-tr-[80px] wrapper1'>
                <div className='w-full max-w-[550px] h-full 2xl:max-w-[600px] 3xl:max-w-[800px] !rounded-tr-[80px] borderGradientC1 flex justify-between items-start flex-col px-0 sm:px-6 py-6'>
                  <div className='w-full flex flex-col gap-4'>
                    <h2 className='text-[40px] whitespace-nowrap 2xl:text-[58px] 3xl:text-[75px] lg:block hidden mt-[9rem] tracking-[3px] leading-[40px] sm:leading-[55px] 2xl:leading-[70px] 3xl:leading-[90px] text-white-1 font-terminaExtraDemi'>
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
                    <p className='text-white-4 lg:text-left 3xl:text-[32px] 2xl:text-[22px] text-center break-all text-[16px] font-normal'>
                      100% on-chain and noncustodial orderbook.
                    </p>
                  </div>

                  <div className='w-full flex justify-center lg:justify-end mt-8 lg:mt-28'>
                  <a
                    href='https://github.com/openbook-dex/openbook-v2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex hrGr group z-50 justify-center items-center gap-2'
                  >
                    <p className='text-white-1 3xl:text-[32px] 2xl:text-[22px] text-[16px] font-normal'>
                      Learn More
                    </p>
                     <FiArrowRight className='text-[20px] 3xl:text-[36px] 2xl:text-[26px] text-white-1 group-hover:text-[#00ffe5]' />
                  </a>
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
