import React from 'react'
import profil from '../assets/azizi.png';


const Contact = () => {
    return (
 <div className="py-12 bg-base-100 " id='contact'>
    <h2 className="text-3xl text-grey font-bold text-center mb-4">Contact</h2>
   <div className='flex flex-col md:flex-row justify-center gap-12 mx-4 py-10'>
    <div className='px-4 bg-gradient-to-r from-[#96FFC6] to-[#06B7CF] w-96 rounded-xl'>
<div className='text-justify text-[#27323E]'>
<h1 className="text-2xl font-bold mb-4 mt-3">Contact Me</h1>
        <p className="mb-2">
            <strong>Email    :</strong> <br />
            <a href="mailto:yusrulazizi59@gmail.com" className="text-blue-500 hover:underline">yusrulazizi59@gmail.com</a>
        </p>
        <p className="mb-2">
            <strong>Instagram:</strong> <br />
            <a href="https://instagram.com/username" className="text-blue-500 hover:underline">@yuazz_</a>
        </p>
        <p className="mb-2">
            <strong>Adress:</strong> <br />
           Praya Lombok Tengah, NTB
        </p>
        <p className="mb-2">
            <strong>Telepon:</strong> <br />
            <a href="tel:+6289509930186" className="text-blue-500 hover:underline">+6289509930186</a>
        </p>

</div>
      </div>
   
   <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body">
    <h2 className="card-title">Contact</h2>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Name" />
</label>
<textarea className="textarea textarea-accent" placeholder="Give criticism and suggestions....."></textarea>
    <div className="card-actions py-5 justify-end">
      <button className="btn text-[#27323E] font-reguler  bg-gradient-to-r from-[#06B7CF] to-[#96FFC6]  hover:from-slate-500 hover:via-slate-600 hover:to-slate-400 space-x-2 transform transition duration-300 ease-in-out">Send</button>
    </div>
  </div>
</div>
   </div>
       </div>
    )
}
export default Contact
