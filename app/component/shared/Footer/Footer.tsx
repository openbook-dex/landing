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
          : 'mt-[25rem] sm:mt-[20rem] md:mt-[11rem]'
      } `}
    >
      <Wrapper>
        <div className='w-full flex justify-center items-center flex-col gap-10'>
          {/* top ---> */}
          <Fade duration={800} delay={100} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Icons.logo className='w-[147px] h-[32px]' />
              <p className='text-[16px] font-normal text-white-1/60'>
                A Solana DEX built by Chads
              </p>
            </div>
          </Fade>
          {/* bottom sec ----> */}
          <Fade duration={800} delay={200} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2'>
              {/* social icons ---> */}
              <div className='flex gap-6 justify-center items-center'>
                {socialIcons.map((item, index) => {
                  return (
                    <Link key={index} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <p className='text-[16px] font-normal text-white-1/60'>
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
    path: '#',
    name: (
      <Icons.twiter className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.discord className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.githHub className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: '#',
    name: (
      <Icons.gitBook className='w-[32px] h-[32px] hover:scale-105 duration-300' />
    ),
  },
];

export default Footer;
