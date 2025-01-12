import React from 'react'

const About = () => {
  return (
    <div className="text-center py-20 bg-base-100 text-grey" id='about'>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <h3 className="text-2xl font-semibold mb-4">I’m Azizi</h3>
    <p className="text-lg mb-6 max-w-2xl mx-auto">I am a Full-Stack Web developer based in Lombok, Indonesia. I am a graduate of Information Systems. I am very excited to improve my coding skills & develop Working for myself to improve my skills. I like to build websites with Full-Stack.</p>
    <a
        href="https://drive.google.com/file/d/1ErhSkA-3XLLYH8EfyBVpJsxsvLO4NjUB/view?usp=drivesdk"
        className="inline-block bg-gradient-to-r from-[#06B7CF] to-[#96FFC6] text-[#27323E] font-reguler py-2 px-4 rounded-full hover:bg-[#06B7CF] space-x-2 transform transition duration-300 ease-in-out"
      >
        View My CV
      </a></div>
  
  )
}

export default About