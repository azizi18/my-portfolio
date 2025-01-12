import React from 'react'
import { FaHtml5, FaCss3Alt, FaPhp, FaGithub, FaWordpress, FaLaravel,FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const Skill = () => {
  return (
    <section className="text-center py-12 bg-base-100 text-grey" id='skill'>
    <h2 className="text-3xl font-bold mb-4">Skill Tech</h2>
    <div className="flex justify-center space-x-20 py-12">
        <div>
            <div className="flex items-center space-x-2 mb-4">
            <FaHtml5 className='text-teal-500 text-2xl' />               
             <span>HTML</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaCss3Alt className='text-teal-500 text-2xl' />
                  <span>CSS</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <IoLogoJavascript className='text-teal-500 text-2xl'/>
                <span>JAVASCRIPT</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaPhp className='text-teal-500 text-2xl' />
                <span>PHP</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <RiTailwindCssFill className='text-teal-500 text-2xl' />
                <span>TAILWIND CSS</span>
            </div>
        </div>
        <div>
            <div className="flex items-center space-x-2 mb-4">
            <SiMysql className='text-teal-500 text-2xl' />
                <span>MYSQL</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaGithub  className='text-teal-500 text-2xl'/>
                <span>GITHUB</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaWordpress className='text-teal-500 text-2xl'/>
                <span>WORDPRESS</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaLaravel className='text-teal-500 text-2xl'/>
                <span>LARAVEL</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
            <FaReact className='text-teal-500 text-2xl'/>
                <span>REACT JS</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skill