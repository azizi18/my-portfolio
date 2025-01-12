import React, {useState} from "react";
import ThemeToggle from './ThemeToggle';
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineAlignRight} from "react-icons/ai";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  
  return (
<div className="navbar  bg-base-100 fixed w-full  z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <AiOutlineAlignRight color="grey" />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded z-[1] mt-3 w-80  p-2 shadow mb-4">
       <li>  <a
              href="#home"
              onClick={() => handleClick(0)}
              className={`text-white  px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 0 ? 'bg-teal-400' : 'hover:bg-gray-700'}`}
            >
              Home
            </a></li>
       <li><a
              href="#about"
              onClick={() => handleClick(1)}
              className={`text-white px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 1 ? 'bg-teal-400' : 'hover:bg-white'}`}
            >
              About
            </a></li>
       <li><a
              href="#skill"
              onClick={() => handleClick(2)}
              className={`text-white px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 2 ? 'bg-teal-400' : 'hover:bg-white'}`}
            >
              Skill
            </a></li>
       <li><a
              href="#project"
              onClick={() => handleClick(3)}
              className={`text-white px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 3 ? 'bg-teal-400' : 'hover:bg-white'}`}
            >
              Project
            </a></li>
       <li><a
              href="#contact"
              onClick={() => handleClick(4)}
              className={`text-white px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 4 ? 'bg-teal-400' : 'hover:bg-white'}`}
            >
              Contact
            </a></li>
      
      </ul>
    </div>
    <FaConnectdevelop className="text-3xl mx-4" />
    <h1 className="w-full text-xl font-semibold ">Azizi<span className="bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] inline-block text-transparent bg-clip-text">Dev</span></h1>
  </div>
  <div className="navbar-center hidden   lg:flex">
    <ul className="menu menu-horizontal epx-1">
    <li>  <a
              href="#home"
              onClick={() => handleClick(0)}
              className={` px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 0 ? 'text-teal-500' : 'text-gray  hover:text-teal-700'}`}
            >
              Home
            </a></li>
       <li> <a
              href="#about"
              onClick={() => handleClick(1)}
              className={` px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 1 ? 'text-teal-500' : 'text-grey  hover:text-teal-600'}`}
            >
              About
            </a></li>
       <li> <a
              href="#skill"
              onClick={() => handleClick(2)}
              className={`px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 2 ? 'text-teal-500' : 'text-grey dark:text-white hover:text-teal-600'}`}
            >
              Skill
            </a></li>
       <li> <a
              href="#project"
              onClick={() => handleClick(3)}
              className={` px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 3 ? 'text-teal-500' : 'text-grey dark:text-white hover:text-teal-600'}`}
            >
              Project
            </a></li>
       <li> <a
              href="#contact"
              onClick={() => handleClick(4)}
              className={` px-3 py-2 rounded-md transition duration-300 
                ${activeIndex === 4 ? 'text-teal-300' : 'text-grey dark:text-white hover:text-teal-600'}`}
            >
              Contact
            </a></li>
            
    </ul>
   
  </div>
  <div className="navbar-end">
  <ThemeToggle />
  </div>
</div>

  )
}

export default Navbar