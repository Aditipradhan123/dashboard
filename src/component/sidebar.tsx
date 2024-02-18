'use client';
import { SIDENAV_ITEMS } from '@/SIDEBAR_CONSTANTS';
import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './sidebar-menu-item';
import  ClassNames  from 'classnames';
import { useSideBarToggle } from '@/hook/use-sidebar-toggler';

const Sidebar = () => {
  
  const { toggleCollapse} = useSideBarToggle();
  const asideStyle = ClassNames("fixed bg-[#31353d] text-gray-500 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[15rem]",
    {
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
      ["w-[20rem]"]: toggleCollapse
    })
  return (
    <aside className={asideStyle}>
      <div className='flex relative item-center py-5 px-3.5'>
        <Image alt='' src='/logo.png' className='w-12 mx-3.5 min-h-fit ' width={35} height={35}></Image>
        {!toggleCollapse && <h3 className='pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max pt-2'>
          Dashboard
        </h3>}
      </div>
      <nav className='flex flex-col gap-2 transition duration-300'>
        <div className='flex flex-col gap-2 px-4'>
          {
            SIDENAV_ITEMS.map((items, index) => {
              return <SidebarMenuItem key={index} item={items} toggleCollapse={toggleCollapse}></SidebarMenuItem>
            })
          }
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar