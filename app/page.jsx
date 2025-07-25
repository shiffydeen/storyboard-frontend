import Image from "next/image";
import { pageTitles } from "./lib/pageTitles";
import { projects } from "./mockData";
import { FaShareAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";


export const metadata = {
    title: pageTitles['/'].title,
    description: pageTitles['/'].description
}


export default function Home() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="shadow-lg border border-gray-300 border-opacity-20 rounded-md flex justify-center items-center cursor-pointer hover:shadow-gray-400 dark:bg-neutral-800 dark:shadow-md dark:border-neutral-700 transition-shadow dark:hover:shadow-gray-700">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gray-400 flex justify-center items-center">+</div>
            <p>ADD PROJECT</p>
          </div>
        </div>
        {
          projects.map((project, index) => (
            <div key={index} className="cursor-pointer border border-gray-300 rounded-md shadow-lg dark:bg-neutral-800 dark:shadow-md dark:border-neutral-700 transition-shadow hover:shadow-gray-400 dark:hover:shadow-gray-700">
              <div>
                <Image src={project.cover}/>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <p className="font-semibold text-sm">{project.title}</p>
                  <p className="text-xs">Genre: {project.genre}</p>
                </div>
                <div className="flex flex-wrap items-center">
                  <button className="px-2 py-1 bg-neutral-300 rounded-sm mx-1 hover:bg-gray-400 text-sm shrink-0"><FaShareAlt /></button>
                  <button className="px-2 py-1 bg-neutral-300 rounded-sm mx-1 hover:bg-gray-400 text-sm shrink-0"><IoSettings /></button>
                  <button className="px-2 py-1 bg-neutral-300 rounded-sm mx-1 hover:bg-gray-400 text-sm shrink-0"><MdDeleteForever /></button>
                </div>
              </div>
              <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
