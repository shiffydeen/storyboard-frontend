import Image from "next/image";
import { pageTitles } from "./lib/pageTitles";


export const metadata = {
    title: pageTitles['/'].title,
    description: pageTitles['/'].description
}


export default function Home() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 ">
        <div className="shadow-lg border border-neutral-300 rounded-sm w-[250px] h-[300px] flex justify-center items-center cursor-pointer hover:shadow-gray-400">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gray-400 flex justify-center items-center">+</div>
            <p>ADD PROJECT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
