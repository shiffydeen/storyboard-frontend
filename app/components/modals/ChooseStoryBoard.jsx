'use client'
import { useState } from 'react';
import React from 'react'
import { IoMdClose } from 'react-icons/io';

const ChooseStoryboard = ({ open, onClose }) => {


  const [selected, setSelected] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="bg-[#1c1c1c] text-white rounded-lg w-full max-w-3xl shadow-lg p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Choose Your Storyboard Art Style</h2>
          <button onClick={onClose}>
            <IoMdClose className="w-6 h-6 hover:text-gray-300" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* {styles.map((style, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(style.label)}
              className={`rounded-md overflow-hidden border ${
                selected === style.label ? 'border-yellow-400' : 'border-transparent'
              } hover:border-yellow-300 transition duration-200`}
            >
              <img src={style.img} alt={style.label} className="w-full h-24 object-cover" />
              <div className="text-sm text-center py-2">{style.label}</div>
            </button>
          ))} */}

         
          <button className="flex flex-col justify-center items-center border border-dashed border-gray-500 rounded-md h-36 hover:bg-neutral-500">
            <span className="text-2xl">+</span>
            <span className="text-sm">Add your own<br />art style</span>
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              onClose();
            }}
            className="bg-neutral-500 text-white hover:bg-neutral-600 px-6 py-2 rounded transition"
          >
            SAVE CHANGES
          </button>

          <p className="text-sm text-gray-400 mt-2">
            After saving, please click “RETRY” on the images you want to update with the new style.
          </p>
        </div>
      </div>
    </div>
  );
  
}

export default ChooseStoryboard
