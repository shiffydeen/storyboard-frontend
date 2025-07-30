import React from 'react'
// import { pageTitles } from '../lib/pageTitles'
import Image from 'next/image'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

// export const metadata = {
//     title: pageTitles['/storyboard'].title,
//     description: pageTitles['/storyboard'].description
// }

const page = async ({params}) => {

  const {id} = params;

  return (
    <section>
        <nav className="flex justify-between items-center px-4 py-2">
          <div className="flex-1">
            <Link href={`/screenplay/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white  rounded border w-fit">
              <span><IoIosArrowRoundBack /></span>
              Shotlist
            </Link>
          </div>
          <div>
            <button className="px-4 py-2 text-white rounded border w-fit">
              Generate Storyboard
            </button>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <Link href={`/storyboard/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded border w-fit">
              Animate
              <span><IoIosArrowRoundForward /></span>
            </Link>
          </div>
      </nav>
    
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-3  transition-all'>
          
        <div className='shadow-2xl border border-neutral-400  rounded-sm justify-self-center'>
          <div className='w-full'>
              <img src="/images/sketch.png" alt="" className='object-cover w-full h-full'/>
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
    </section>
  )
}

export default page
