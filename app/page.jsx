import Image from "next/image";
import { pageTitles } from "./lib/pageTitles";
import { projects } from "./mockData";
import { FaShareAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdDashboard, MdDeleteForever } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { BsProjector } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import Link from "next/link";


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
              <div className=" p-2">
                <div className="md:flex md:items-center justify-between">
                  <p className="font-semibold text-sm">{project.title}</p>
                  <div className="flex flex-wrap gap-1 items-center md:justify-center my-1">
                    <button className="px-2 py-1 bg-neutral-300 dark:bg-neutral-700 rounded-sm hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm shrink-0"><FaShareAlt /></button>
                    <button className="px-2 py-1 bg-neutral-300 dark:bg-neutral-700 rounded-sm hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm shrink-0"><IoSettings /></button>
                    <button className="px-2 py-1 bg-neutral-300 dark:bg-neutral-700 rounded-sm hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm shrink-0"><MdDeleteForever /></button>
                  </div>
                </div>
                  <p className="text-xs">Genre: {project.genre}</p>
                
              </div>
              <div className="grid grid-cols-4 gap-[2px] mt-6">
                <div className="group relative">
                  <Link href={`/screenplay/${project.id}`} className="p-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm flex justify-center items-center">
                    <MdDescription />
                  </Link>
                  <div class="absolute px-2 py-1 text-[9px] bottom-full mb-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    Screenplay
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]"></div>
                  </div>
                </div>
                <div className="group relative">
                  <Link href={`/shotlist/${project.id}`} className="p-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm flex justify-center items-center">
                    <FaList />
                  </Link>
                  <div class="absolute px-2 py-1 text-[9px] bottom-full mb-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    Shotlist
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]"></div>
                  </div>
                </div>
                <div className="group relative">
                  <Link href={`/storyboard/${project.id}`} className="p-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm flex justify-center items-center">
                    <MdDashboard />
                  </Link>
                  <div class="absolute px-2 py-1 text-[9px] bottom-full mb-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    Storyboard
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]"></div>
                  </div>
                </div>
                <div className="group relative">
                  <Link href={`/animatic/${project.id}`} className="p-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-400 text-sm flex justify-center items-center">
                    <BsProjector />
                  </Link>
                  <div class="absolute px-2 py-1 text-[9px] bottom-full mb-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    Storyboard
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
