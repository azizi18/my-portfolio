import React from 'react'
import { ReactTyped } from "react-typed";
import { FaInstagram, FaLinkedin, FaGithub,} from "react-icons/fa";
import profil from '../assets/azizi.png';


const Hero = () => {
  return (
    <div>
       <div className="text-center py-20 bg-[#27323E]">
                        <div className="inline-block  text-white  py-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none  bg-gradient-to-r  w-20 from-[#96FFC6] to-[#06B7CF] mb-4">Hello, i'm</div>
                        <h2 className="text-4xl font-bold mb-2 text-white">Yusrul Azizi.</h2>
                        <ReactTyped className='mt-4 text-slate-300' strings={[
                      'FullStack Web Depelover','UI/UIX Design','Freelancer'
                    ]} 
                    typeSpeed={60}
                    backSpeed={70}>
                  </ReactTyped>
                       
                        <div className="flex justify-center items-center mt-6 ">
                     <div className="relative w-48 h-48 border-8 bg-gradient-to-r from-[#06B7CF] to-[#96FFC6] rounded-full ">
                      <img
                        src={profil} 
                        alt="Rounded"
                        className="rounded-full w-full h-full object-cover mx-2"
                      />
                </div>
               </div>
               <div className="flex justify-center space-x-4 mb-6 mt-6">
                            <a href="#" className="text-teal-400"><FaInstagram/></a>
                            <a href="#" className="text-teal-400"><FaLinkedin/></a>
                            <a href="#" className="text-teal-400"><FaGithub/></a>
                          
                    </div>
                        <button
                    className=" px-6 py-2 text-white font-reguler rounded-full bg-gradient-to-r from-[#06B7CF] to-[#96FFC6]  hover:from-slate-500 hover:via-slate-600 hover:to-slate-400 space-x-2 transform transition duration-300 ease-in-out">
                   About Me
             
                 </button>
               
                    </div>
           </div>
 
  )
}

export default Hero