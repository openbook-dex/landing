'use client';

import React, { useEffect, useState } from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

interface MarketData {
  notionalVolume: number;
  notionalVolume24hour: number;
}

const Hero: React.FC = () => {
  const [items, setItems] = useState<MarketData[]>([]);

  useEffect(() => {
    fetch('https://prod.arcana.markets/api/openbookv2/markets')
      .then(response => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error('Unexpected API response structure:', data);
        }
      }).catch(error => console.error('Fetching error:', error));
  }, []);

  const total24HVolume = items.reduce((acc, item) => acc + (item.notionalVolume24hour || 0), 0);

    const totalMarkets = items.length;

  const formatVolume = (volume: number): string => {
    if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(1)}M`;
    } else if (volume >= 1e3) {
      return `$${(volume / 1e3).toFixed(1)}K`;
    }
    return `$${volume.toFixed(2)}`;
  };

  return (
    <div className='w-full overflow-x-hidden overflow-y-hidden h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] justify-center items-center flex relative'>
      <Wrapper style='h-full'>
        <Fade duration={1200} triggerOnce className='w-full h-full'>
          <div className='w-full flex flex-col gap-5 justify-center items-center h-full'>
            <Zoom duration={1500} triggerOnce>
              <div className="w-full -mt-28 max-w-[300px] sm:max-w-[450px] md:max-w-[940px] 2xl:max-w-[1800px] 3xl:w-[2500px] 2xl:h-[800px] 3xl:h-[1700px] h-[300px] sm:h-[400px] md:h-[490px] bg-[url('/assets/heroShape.svg')] flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat">
                <p className='text-[#E0C7FF] mt-[5rem] sm:mt-[9rem] 3xl:mt-[19rem] text-[16px] 2xl:text-[42px] 3xl:text-[75px] sm:text-[24px] md:text-[30px] font-semibold'>
                  OpenBook
                </p>

                <h1 className='text-[38px] sm:block hidden sm:text-[50px] md:text-[70px] lg:text-[96px] 2xl:text-[140px] 3xl:text-[240px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] 2xl:leading-[180px] 3xl:leading-[300px] text-center font-bold font-terminaExtraBold text-white-1 mt-0 2xl:mt-3'>
                  A DEX For <br /> The People
                </h1>
                <h1 className='text-[36px] sm:hidden block sm:text-[50px] md:text-[70px] lg:text-[96px] 2xl:text-[120px] 3xl:text-[160px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] text-center font-bold font-terminaExtraBold text-white-1 '>
                  A DEX For The People
                </h1>
              </div>
            </Zoom>
            <Slide
              className='w-full flex justify-center items-center'
              direction='up'
              duration={1000}
              delay={500}
              triggerOnce
            >
              <div className='w-full max-w-[300px] rounded-xl 3xl:rounded-2xl sm:max-w-[500px] md:max-w-[700px] 2xl:max-w-[900px] 3xl:max-w-[1750px] flex justify-center items-center gradient-wrapper '>
                <div className='w-full py-3 2xl:py-5 3xl:py-14 flex justify-center rounded-xl items-center gap-24 sm:gap-28 3xl:gap-[14rem] borderGradient'>
                  <div className='flex justify-center items-center flex-col gap-0'>
                    <p className='text-white-1 text-[20px] sm:text-[30px] md:text-[48px] 2xl:text-[60px] 3xl:text-[120px] font-terminaExtraDemi'>
                    {formatVolume(total24HVolume)}
                    </p>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[24px] font-normal 3xl:text-[44px] text-white-1/60'>
                      24H Volume
                    </p>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-0'>
                    <p className='text-white-1 text-[20px] sm:text-[30px] md:text-[48px] 2xl:text-[60px] 3xl:text-[120px] font-terminaExtraDemi'>
                    {totalMarkets}
                    </p>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[24px] font-normal 3xl:text-[48px] text-white-1/60'>
                      Total Markets
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </Fade>
      </Wrapper>
      <div className='absolute -bottom-10 left-0'>
        <Icons.shade1 className='w-[319px] h-[416px]' />
      </div>
      <div className='absolute top-0 right-0'>
        <Icons.shade2 className='w-[319px] h-[416px]' />
      </div>
      <Icons.arrow1 className='absolute opacity-50 left-[0] md:left-[3rem] bottom-[8rem] md:bottom-[7rem] w-[80px] sm:w-[149px] h-[90px] sm:h-[167px]' />
      <Icons.arrow1 className='absolute opacity-30 left-[40%] bottom-[15%] sm:bottom-[0rem] w-[90px] sm:w-[123px] h-[100px] sm:h-[139px]' />
      <Icons.arrow1 className='absolute opacity-50 right-[20%] bottom-[30%] w-[40px] sm:w-[70px] h-[50px] sm:h-[80px]' />
      <Icons.arrow1 className='absolute opacity-40 right-0 sm:right-[2%] bottom-[10%] sm:bottom-[2%] w-[70px] sm:w-[107px] h-[70px] sm:h-[120px]' />
    </div>
  );
};

export default Hero;
