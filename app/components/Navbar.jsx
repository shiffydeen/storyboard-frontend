'use client'

import { FaBars, FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { pageTitles } from '../lib/pageTitles';
import ThemeSwitch from "./ThemeSwitch";
import { useSidebar } from "../context/SidebarContext";


const Navbar = () => {

  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  const pathname = usePathname()
  const meta = pageTitles[pathname] || {title: 'Page', description: ''}

  // const title = pageTitles[cleanPath] || 'Page'


  return (
    <nav className='p-1 md:p-2 flex justify-between border-b-2 border-neutral-400'>
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleSidebar}
          className="md:hidden  dark:text-gray-200 text-xl"
        >
          <FaBars /> 
          </button>
        <span>
            <FaRegPlayCircle className='w-16 h-16'/>
        </span>
        <div>
          <h2 className='text-xl font-semibold'>{meta.title}</h2>
          <p>{meta.description}</p>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <ThemeSwitch />
        {/* <button className="cursor-pointer">
            <MdOutlineLightMode className='w-10 h-10'/>
        </button> */}
        {/* <span>
            <MdOutlineModeNight />
        </span> */}
        <span>
          <CiSettings className='w-10 h-10'/>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
