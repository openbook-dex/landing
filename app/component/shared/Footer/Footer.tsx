'use client';

import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`w-full ftBg py-10 ${
        pathname === '/ecosystem'
          ? 'mt-0'
          : 'mt-[25rem] sm:mt-[20rem] md:mt-[11rem] 2xl:mt-[24rem]'
      } `}
    >
      <Wrapper>
        <div className='w-full flex justify-center items-center flex-col gap-10 2xl:gap-14'>
          <Fade duration={800} delay={100} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4'>
              <Icons.logo className='w-[147px] 2xl:w-[240px] 3xl:w-[400px] h-[28px] sm:h-[32px] 2xl:h-[62px] 3xl:h-[140px]' />
              <p className='text-[16px] 2xl:text-[26px] 3xl:text-[40px] font-normal text-white-1/60'>
                A Solana DEX built by Chads
              </p>
            </div>
          </Fade>
          <Fade duration={800} delay={200} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4 3xl:gap-6'>
              <div className='flex gap-6 justify-center items-center'>
                {socialIcons.map((item, index) => {
                  return (
                    <Link key={index} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <p className='text-[16px] 2xl:text-[22px] 3xl:text-[32px] font-normal text-white-1/60'>
                © 2024 OpenBook. All rights reserved.
              </p>
            </div>
          </Fade>
        </div>
      </Wrapper>
    </div>
  );
};

const socialIcons = [
  {
    path: 'https://x.com/openbookdex',
    name: (
      <Icons.twiter className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: 'https://discord.gg/pFvxfWcsvt',
    name: (
      <Icons.discord className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: 'https://github.com/openbook-dex',
    name: (
      <Icons.githHub className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: 'https://github.com/openbook-dex/openbook-docs',
    name: (
      <Icons.gitBook className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300 cursor-not-allowed' />
    ),
  },
];

export default Footer;
