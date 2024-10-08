'use client';

import React from 'react';
import Wrapper from '../component/shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

const page = () => {
  return (
    <div className='w-full min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-90px)] relative flex justify-center md:justify-center items-center md:items-center py-[5rem] 2xl:py-[9rem] 3xl:py-[15rem]'>
      <Wrapper>
        <div className='w-full h-full flex flex-col gap-10 sm:gap-16 2xl:gap-[6rem] 3xl:gap-[11rem]'>
          <Fade triggerOnce duration={800} delay={100}>
            <div className='flex flex-col gap-0 justify-center items-center w-full'>
              <p className='text-[12px] sm:text-[18px] 3xl:text-[48px] 2xl:text-[28px] lg:text-left text-center font-normal textColor'>
                ECOSYSTEM
              </p>
              <h1 className='text-[30px] sm:text-[32px] md:text-[48px] 3xl:text-[120px] 2xl:text-[80px] text-white-1 font-terminaheavy'>
                Our Community
              </h1>
            </div>
          </Fade>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-[2rem] sm:gap-y-[3rem] 2xl:gap-y-[7rem] 3xl:gap-y-[14rem] z-40'>
            {ecoSystemData.map((item, index) => {
              const slideDirection = index % 2 === 0 ? 'left' : 'right';
              return (
                <Slide
                  key={index}
                  direction={slideDirection}
                  duration={800}
                  triggerOnce
                  delay={200 + index * 100}
                >
                <div className='w-full cursor-pointer hover:opacity-60 flex flex-col justify-center items-center gap-3'>
                  <p className='text-[12px] uppercase sm:text-[18px] 2xl:text-[28px] 3xl:text-[48px] lg:text-left text-center font-normal textColor'>
                    {item.name}
                  </p>
                  <div className='h-[50px] md:h-[80px] flex justify-center items-center'>
                    {item.img}
                  </div>
                </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <div className="w-full h-full bg-[url('/assets/looper.png')] bg-no-repeat bg-cover absolute top-0 left-0"></div>
    </div>
  );
};

const ecoSystemData = [
  {
    path: '#',
    name: 'trade',
    img: (
      <a href='https://dropcopy.io/workstation/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
        <Image src='/assets/dropcopy.svg' fill alt='' className='object-fill' />
      </div>
      </a>

    ),
  },
  {
    path: '#',
    name: 'TRADE',
    img: (
      <a href='https://app.mango.markets/trade/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
        <Image src='/assets/mango.svg' fill alt='' className='object-fill' />
      </div>
      </a>
    ),
  },
  {
    path: '#',
    name: 'trade',
    img: (
      <a href='https://prism.ag/trade/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[160px] sm:w-[250px] 2xl:w-[400px] 3xl:w-[650px] 2xl:h-[100px] 3xl:h-[280px] h-[25px] sm:h-[44px] relative'>
        <Image src='/assets/prism.svg' fill alt='' className='object-fill' />
      </div>
      </a>
    ),
  },
  {
    path: '#',
    name: 'swap',
    img: (
      <a href='https://jup.ag/swap/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
        <Image src='/assets/jup.svg' fill alt='' className='object-fill' />
      </div>
      </a>

    ),
  },
  {
    path: '#',
    name: 'create',
    img: (
      <a href='https://www.grapple.tools/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
        <Image src='/assets/grap.svg' fill alt='' className='object-fill' />
      </div>
      </a>
      
    ),
  },
  {
    path: '#',
    name: 'analytics',
    img: (
      <a href='https://app.arcana.markets/data/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[180px] sm:w-[300px] 2xl:w-[550px] 3xl:w-[800px] h-[45px] 2xl:h-[120px] 3xl:h-[300px] sm:h-[80px] relative'>
        <Image src='/assets/arcana.svg' fill alt='' className='object-fill' />
      </div>
      </a>
    ),
  },
  {
    path: '#',
    name: 'GOVERN',
    img: (
      <a href='https://app.themetadao.org/' target='_blank' rel='noopener noreferrer'>
      <div className='w-[160px] sm:w-[250px] 2xl:w-[400px] 3xl:w-[650px] 2xl:h-[100px] 3xl:h-[280px] h-[25px] sm:h-[44px] relative'>
        <Image src='/assets/meta_dao_logo.svg' fill alt='' className='object-fill' />
      </div>
      </a>
    ),
  },
  {
    path: '#',
    name: 'LIQUIDITY',
    img: (
      <a href='https://beta.dual.finance/loan' target='_blank' rel='noopener noreferrer'>
      <div className='w-[160px] sm:w-[250px] 2xl:w-[400px] 3xl:w-[650px] 2xl:h-[100px] 3xl:h-[280px] h-[25px] sm:h-[44px] relative'>
        <Image src='/assets/dual-finance-logo.svg' fill alt='' className='object-fill' />
      </div>
      </a>
    ),
  },
];

export default page;
