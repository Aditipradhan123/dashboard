import { useSideBarToggle } from '@/hook/use-sidebar-toggler';
import classNames from 'classnames'
import React, { ReactNode } from 'react'

const PageWrapper = ({ children }: {children: ReactNode}) => {

  const { toggleCollapse} = useSideBarToggle();
  const bodyStyle= classNames("bg-slate-50 flex-grow text-black p-2 mt-16 ",
  {
    ["sm:pl-[15.4rem]"]:!toggleCollapse,
    ["sm:pl-[5.6rem]"]: toggleCollapse
  })

  return (
    <div className={bodyStyle}>
        {children}
    </div>
  )
}

export default PageWrapper
