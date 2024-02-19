'use client';
import { SIDENAV_ITEMS } from '@/SIDEBAR_CONSTANTS';
import Image from 'next/image'
import React from 'react'
import SideBarMenuItem from './sidebar-menu-item';
import { useSideBarToggle } from '@/hook/use-sidebar-toggler';
import classNames from 'classnames';

const Sidebar = () => {

  const { toggleCollapse } = useSideBarToggle();
  const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed light:bg-[#fff] bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[15rem]",
    {
      ["w-[15rem]"]: !toggleCollapse,
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse
    })
  return (
    <aside className={asideStyle}>
      <div className='sidebar-top relative flex item-center py-5 px-3.5'>
        <Image alt='' src='/logo.png' className='w-12 mx-3.5 min-h-fit ' width={35} height={35}></Image>
        <h3 className={classNames('pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max pt-2',{ hidden: toggleCollapse })}>
          Dashboard</h3>
      </div>
      <nav className='flex flex-col gap-2 transition duration-300 ease-in-out'>
        <div className='flex flex-col gap-2 px-4'>
          {
            SIDENAV_ITEMS.map((items, idx) => {
              return <SideBarMenuItem key={idx} item={items} toggleCollapse={toggleCollapse}></SideBarMenuItem>
            })
          }
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar