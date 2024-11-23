import React from 'react'
import { ReactTyped } from "react-typed";
import { FaInstagram, FaLinkedin, FaGithub, FaArrowCircleDown } from "react-icons/fa";
import profil from '../assets/azizi.png';


const Hero = () => {
  return (
    <div className='text-white'>
            <div className='max-w-[750px] w-full h-screen mx-auto flex justify-between items-center mt-[-96px]'>
                <div className='mt-20 p-10'>
                  <div className='rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none  bg-gradient-to-r py-2 w-20 from-[#96FFC6] to-[#06B7CF]'>
                    <h3 className='text-white text-sm px-2'>Hello, i'm</h3>
                  </div>
                    <h1 className='text-3xl font-bold mt-2'>Yusrul Azizi <span className='bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] text-transparent bg-clip-text'>.</span></h1>
                    <ReactTyped className='mt-4 text-slate-500' strings={[
                      'FullStack Web Depelover','UI/UIX Design','Freelancer'
                    ]} 
                    typeSpeed={60}
                    backSpeed={70}>
                  </ReactTyped>
                  <div className='flex md:flex gap-2'>
                  <div className='rounded-full bg-slate-50 w-6 h-6 mt-3 flex justify-center items-center'>
                  <FaInstagram  className='absolute items-center text-black'/>
                  </div>
                  <div className='rounded-full bg-slate-50 w-6 h-6 mt-3 flex justify-center items-center'>
                  <FaLinkedin  className='absolute items-center text-black'/>
                  </div>
                  <div className='rounded-full bg-slate-50 w-6 h-6 mt-3 flex justify-center items-center'>
                  <FaGithub className='absolute items-center text-black'/>
                  </div>

                  </div>
                  <button
                    className="px-4 py-1 mt-4 text-white font-reguler rounded-full bg-gradient-to-r from-[#06B7CF] to-[#96FFC6]  hover:from-slate-500 hover:via-slate-600 hover:to-slate-400 flex items-center space-x-2 transform transition duration-300 ease-in-out">
                  <FaArrowCircleDown className='text-white'/>
                  <span>About Me</span>
                 </button>
                   
                </div>
                <div className='relative mt-5'>
                  {/* <div className='ml-auto rounded-md w-45 bg-[#3B3F43] h-90 absolute top-0 left-0 rotate-90 z-0'>
                  </div> */}
                   <div className="absolute top-0 left-10 w-40 h-40 bg-[#2D2F31] rounded-md rotate-12 mt-16"></div>
                     <img src={profil} alt="profil" className='w-60 h-60 z-10 relative  -mt-7 '/>

                </div>

                </div>
            </div>
  )
}

export default Hero