import React, {useState} from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
   const [nav, setNav] = useState(false)

   const handleNav = () => {
     setNav (!nav)
   }
  return (
  <div className="flex justify-between items-center h24 max-w-[1248px] mx-auto px-4">
    <h1 className="w-full text-xl font-semibold text-white">Yusrul <span className="bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] inline-block text-transparent bg-clip-text">Azizi</span></h1>
    <ul className="text-white text-sm  hidden md:flex">
      <li className="p-4">Home</li>
      <li className="p-4">About</li>
      <li className="p-4">Skill</li>
      <li className="p-4">Project</li>
      <li className="p-4">Certificate</li>
      <li className="p-4">Contact</li>
    </ul>
    <div onClick={handleNav} className="block md:hidden m-3">
      {nav ? <AiOutlineClose color="white"/> : <AiOutlineAlignRight color="white" />}
      
    </div>
    <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#101010] ease-in-out duration-500' : 'fixed left-[-100%]' }>
    <h1 className="w-full text-xl font-semibold text-white m-5">Yusrul <span className="bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] inline-block text-transparent bg-clip-text">Azizi</span></h1>
    <ul className="text-white text-sm p-4">
      <li className="p-4 boder-b border-gray-500">Home</li>
      <li className="p-4 boder-b border-gray-500">About</li>
      <li className="p-4 boder-b border-gray-500">Skill</li>
      <li className="p-4 boder-b border-gray-500">Project</li>
      <li className="p-4 boder-b border-gray-500">Certificate</li>
      <li className="p-4">Contact</li>
    </ul>
    </div>
  </div>
  )
}

export default Navbar