'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSidebar } from '../context/SidebarContext'
// import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <aside
        className={`
          fixed md:static top-0 left-0 min-h-screen w-52 bg-white shadow-md z-40
           ease-in-out dark:bg-gray-900 md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full '}
        `}
      >
        <h2 className="text-xl font-bold mb-6 p-6">LOGO</h2>
        <button className='absolute top-6 right-4 md:hidden' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <nav className="space-y-2">
          <Link href="/" className='text-sm hover:bg-neutral-500 hover:text-white block p-2'>My Projects</Link>
          <Link href="/shotlist" className='text-sm hover:bg-neutral-500 hover:text-white block p-2'>Shotlist</Link>
          <Link href="/storyboard" className='text-sm hover:bg-neutral-500 hover:text-white block p-2'>Storyboard</Link>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-30"
          onClick={closeSidebar}
        />
      )}

      
    </>
  )
}
