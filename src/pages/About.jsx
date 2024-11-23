import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#2D2F31] py-10 text-center'>
        <div className='relative inline-block text-center'>
        <div class="absolute left-20 mt-1 inset-0 w-5 h-5 bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] rounded-full z-0"></div>
        <h1 className='relative text-white text-xl font-medium z-10'>About Me</h1>
        </div>
        <h1 className='text-white text-2xl font-medium mt-8'>I'm Azizi</h1>
        <p className='text-slate-400 text-sm text-center px-60 mt-5'>I am a Full-Stack Web developer based in Lombok, Indonesia. I am an Information System undergraduate from Universitas Nadhlatul Ulama NTB. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps. Working for myself to improve my skills. Love to build Full-Stack web.</p>
      <div className='flex justify-center items-center mt-6'>
        
        <button
         className="px-4 py-1  mt-4 text-white font-reguler rounded-full bg-gradient-to-r from-[#06B7CF] to-[#96FFC6]  hover:from-slate-500 hover:via-slate-600 hover:to-slate-400 space-x-2 transform transition duration-300 ease-in-out">
            <span>Download My Cv</span>
        </button>
      </div>
    </div>
  )
}

export default About