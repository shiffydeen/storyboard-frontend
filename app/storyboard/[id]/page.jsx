'use client'

import React, { useState } from 'react'
// import { pageTitles } from '../lib/pageTitles'
import Image from 'next/image'
import { MdDeleteForever, MdFileUpload, MdOutlineContentCopy, MdOutlineNavigateNext } from 'react-icons/md'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';
import ChooseStoryboard from '../../components/modals/ChooseStoryboard';
import { useParams } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';


// export const metadata = {
//     title: pageTitles['/storyboard'].title,
//     description: pageTitles['/storyboard'].description
// }

const page = () => {

  const [open, setOpen] = useState(false);

  const params = useParams();
  const id = params?.id;

  return (
    <section className='relative'>
        <nav className="flex justify-between items-start px-4 py-2">
          <div className="flex-1">
            <Link href={`/screenplay/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white  rounded border w-fit  hover:bg-neutral-500 transition-all duration-500">
              <span><IoIosArrowRoundBack /></span>
              Shotlist
            </Link>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <button className="px-4 py-2 text-white rounded border w-fit  hover:bg-neutral-500 transition-all duration-500">
              Generate Storyboard
            </button>
            <button onClick={() => setOpen(true)} className="px-4 py-2 text-white text-xs rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
              Change Art Style
            </button>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <Link href={`/storyboard/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded border w-fit hover:text-black hover:bg-neutral-500 transition-all duration-500">
              Animate
              <span><IoIosArrowRoundForward /></span>
            </Link>
          </div>
      </nav>
    
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-3  transition-all'>
          
        <div className='group shadow-2xl border border-neutral-400  rounded-sm justify-self-center'>
          <div className='w-full relative'>
              <img src="/images/sketch.png" alt="" className='object-cover w-full h-full'/>
              <div className='absolute flex top-[50%] left-[50%] translate-x-[-50%] gap-3 opacity-0 group-hover:opacity-100'>
                <button className='bg-neutral-600 p-2 rounded-sm hover:bg-neutral-400'>
                  <FaEdit />
                </button>
                <button className='bg-neutral-600 p-2 rounded-sm hover:bg-neutral-400'>
                  <IoReload />
                </button>
                <button className='bg-neutral-600 p-2 rounded-sm hover:bg-neutral-400'>
                  <MdFileUpload />
                </button>
              </div>
              <div className='flex absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%]  bg-neutral-600 rounded-sm opacity-0 group-hover:opacity-100'>
                <button className='hover:bg-neutral-400 p-2'><MdOutlineContentCopy /></button>
                <button className='hover:bg-neutral-400 p-2'><MdDeleteForever /></button>
              </div>
          </div>
          <div className='p-2'>
              <p className='font-bold'>Scene: 1 | Shot: 1</p>
              <p className='text-sm my-2'>The dining car with polished wood panels and minimalist steel accents, softly lit with ambient lighting.</p>
          </div>
          <div className='grid grid-cols-2 gap-1'>
              <button className='uppercase bg-neutral-300 text-sm font-medium p-2 hover:bg-neutral-400 cursor-pointer dark:text-slate-800'>edit</button>
              <button className='uppercase bg-neutral-300 text-sm font-medium p-2 hover:bg-neutral-400 cursor-pointer dark:text-slate-800'>retry</button>
              <button className='uppercase bg-neutral-300 text-sm font-medium p-2 hover:bg-neutral-400 cursor-pointer dark:text-slate-800'>variation</button>
              <button className='uppercase bg-neutral-300 text-sm font-medium p-2 hover:bg-neutral-400 cursor-pointer dark:text-slate-800'>upload</button>
          </div>
        </div>
      </div>
      <ChooseStoryboard open={open} onClose={() => setOpen(false)} />
    </section>
  )
}

export default page
