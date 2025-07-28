import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";

const page = async (props) => {

    // const {id} = props.params;

    // console.log(id)
  return (
    <div>
      {/* <div className='flex justify-end items-end my-3'>
        <button className='flex items-center whitespace-nowrap'>Generate Screenplay
          <span>
            <MdOutlineNavigateNext />
          </span>
        </button>
        <button className='ml-8'>Shotlist</button>
      </div> */}
      <nav className="flex justify-between items-center px-4 py-2">
        {/* Left placeholder */}
        <div className="flex-1" />

        {/* Center button */}
        <div>
          <button className="px-4 py-2 text-white rounded">
            Center
          </button>
        </div>

        {/* Right button(s) */}
        <div className="flex-1 flex justify-end gap-4">
          <button className="flex whitespace-nowrap items-center gap-2 px-4 py-2 text-white rounded">
            Shotlist
            <span><MdOutlineNavigateNext /></span>
          </button>
        </div>
    </nav>
    </div>
  )
}

export default page
