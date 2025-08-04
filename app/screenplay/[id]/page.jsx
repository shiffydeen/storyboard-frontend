'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {

    const params = useParams();
    const id = params?.id;

  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2">
  
        <div className="flex-1" />
        <div>
          <button className="px-4 py-2 text-white rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
            Generate Screenplay
          </button>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link href={`/shotlist/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
            Shotlist
            <span><IoIosArrowRoundForward /></span>
          </Link>
        </div>
    </nav>
    </div>
  )
}

export default page
