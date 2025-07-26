'use client'

import { FaBars, FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { RiSettings5Line } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import { pageTitles } from '../lib/pageTitles';
import ThemeSwitch from "./ThemeSwitch";
import { useSidebar } from "../context/SidebarContext";
import { useMemo } from "react";
import { projects } from "../mockData";


const Navbar = () => {

  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  const pathname = usePathname()

  // const meta = pageTitles[pathname] || {title: 'Page', description: ''}

  // const title = pageTitles[cleanPath] || 'Page'

  const meta = useMemo(() => {
  if (pathname.startsWith('/storyboard/')) {
    const id = pathname.split('/')[2];
    const project = projects.find(p => p.id === id);
    return {
      title: project?.title || 'Storyboard',
      description: 'Your Storyboard'
    };
  }

  if (pathname.startsWith('/shotlist/')) {
    const id = pathname.split('/')[2];
    const project = projects.find(p => p.id === id);
    return {
      title: project?.title || 'Shotlist',
      description: 'Your Shotlist'
    };
  }

  if (pathname.startsWith('/screenplay/')) {
    const id = pathname.split('/')[2];
    const project = projects.find(p => p.id === id);
    return {
      title: project?.title || 'Screenplay',
      description: 'Your Screenplay'
    };
  }

  return pageTitles[pathname] || { title: 'Page', description: '' };
}, [pathname]);


  return (
    <nav className='p-2 md:p-2 flex justify-between border-b border-neutral-400'>
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleSidebar}
          className="md:hidden  dark:text-gray-200 text-xl dark:hover:bg-neutral-500 hover:bg-neutral-300 p-2 rounded-md"
        >
          <FaBars className="h-8 w-8"/> 
          </button>
        <span>
            <FaRegPlayCircle className='w-16 h-16'/>
        </span>
        <div>
          <h2 className='text-xl font-semibold'>{meta.title}</h2>
          <p>{meta.description}</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span className="hover:bg-neutral-300 dark:hover:bg-neutral-500 p-2 rounded-md cursor-pointer">
          <ThemeSwitch />
        </span>
        <span className="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-500 rounded-md cursor-pointer">
          <RiSettings5Line className="w-8 h-8"/>
          {/* <CiSettings className='w-10 h-10'/> */}
        </span>
      </div>
    </nav>
  )
}

export default Navbar
