import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";



const page = async (props) => {

  const {id} = props.params;

  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex-1">
          <Link href={`/screenplay/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
            <span><IoIosArrowRoundBack /></span>
            Screenplay
          </Link>
        </div>
        <div>
          <button className="px-4 py-2 text-white rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
            Generate Shotlist
          </button>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link href={`/storyboard/${id}`} className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded border w-fit hover:bg-neutral-500 transition-all duration-500">
            Storyboard
            <span><IoIosArrowRoundForward /></span>
          </Link>
        </div>
    </nav>
    </div>
  )
}

export default page
