import React from 'react'
import { pageTitles } from '../lib/pageTitles'
import Image from 'next/image'

export const metadata = {
    title: pageTitles['/storyboard'].title,
    description: pageTitles['/storyboard'].description
}

const page = () => {
  return (
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
  )
}

export default page
