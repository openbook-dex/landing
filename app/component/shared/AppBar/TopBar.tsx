'use client';

import React, { useState } from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { usePathname } from 'next/navigation';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='w-full bg-transparent cursor-pointer h-[60px] 2xl:h-[120px] 3xl:h-[210px] sm:h-[90px]'>
      <Wrapper style='h-full'>
        <div className='w-full h-full flex justify-between items-center'>
          <Link href='/' className='z-50'>
            <Icons.logo className='w-[147px] h-[28px] sm:h-[32px] ' />
          </Link>
          <div className='hidden md:flex justify-center items-center gap-10 z-50'>
            {links.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-white-1 ${
                    pathName === item.path
                      ? 'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#00FFE5] after:w-full after:duration-200'
                      : ' after:bg-white-1'
                  } font-normal text-[18px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:duration-200`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <a href="https://prism.ag/trade"
          className='text-white-1 z-50 px-8 2xl:px-10 3xl:px-16 md:block hidden py-3 bg-purple-1 rounded-lg text-[16px] font-medium hover:opacity-80 active:translate-y-[1px]'
          target="_blank" rel="noopener noreferrer">
          Trade Now
          </a>
          <div className='md:hidden block'>
            <button onClick={toggleDrawer}>
              <Icons.hamburger className='w-[28px] sm:w-[34px] h-[28px] sm:h-[34px]' />
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='drawer'
            >
              <div className=' flex flex-col gap-6 p-10'>
                <button
                  onClick={toggleDrawer}
                  className='hover:opacity-80 w-full flex justify-end'
                >
                  <Icons.crossIcon
                    className='w-[25px] h-[25px]'
                    fill='#ffffff'
                  />
                </button>
                <div className='flex flex-col justify-center items-center gap-6 mt-14'>
                  {links.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item.path}
                        onClick={toggleDrawer}
                        className={`text-white-1 font-normal text-[22px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:duration-200 ${
                          pathName === item.path
                            ? 'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#00FFE5] after:w-full after:duration-200'
                            : ' after:bg-white-1'
                        } `}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <a href="https://prism.ag/trade"
                className='inline-block text-center w-full max-w-[400px] mt-6 px-8 py-3 bg-purple-1 text-white-1 rounded-lg text-[18px] font-medium hover:opacity-80 active:translate-y-[1px]'
                target="_blank" rel="noopener noreferrer">
                Trade Now
              </a>
              </div>
            </Drawer>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const links = [
  {
    name: 'Ecosystem',
    path: '/ecosystem',
  },
  {
    name: 'Docs',
    path: '#',
  },
];

export default TopBar;