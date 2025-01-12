import React from 'react'
import webprodi1 from '../assets/webprodi1.jpeg';
import webuil from '../assets/uil.png';


const Project = () => {
return (
    <div className="text-center py-12 bg-base-100" id='project'>
    <h2 className="text-3xl text-grey font-bold mb-4">Project</h2>
   <div className='flex flex-col md:flex-row gap-4 mx-4 py-12'>
   <div className="card bg-gradient-to-r from-[#06B7CF] to-[#96FFC6] w-96 shadow-xl">
     <figure>
       <img
         src={webprodi1}
         alt="webprodi" />
     </figure>
     <div className="card-body text-[#27323E]">
       <h2 className="card-title">
        Web Fortal Prodi 
        
       </h2>
       <div className="card-actions mt-5">
       <div className="badge badge-outline">Html</div>
         <div className="badge badge-outline">Css</div>
         <div className="badge badge-outline">Javascript</div>
         <div className="badge badge-outline">Laravel</div>
       </div>
     </div>
   </div>
   <div className="card bg-gradient-to-r from-[#06B7CF] to-[#96FFC6] w-96 shadow-xl">
     <figure>
       <img
         src={webuil}
         alt="uil" />
     </figure>
     <div className="card-body text-[#27323E]">
       <h2 className="card-title">
       Web Landing Page 
       </h2>
       <div className="card-actions mt-4">
         <div className="badge badge-outline">Wordpress</div>
        
       </div>
     </div>
   </div>
   <div className="card bg-gradient-to-r from-[#06B7CF] to-[#96FFC6] w-96 shadow-xl">
     <figure>
       <img
         src={webuil}
         alt="uil" />
     </figure>
     <div className="card-body text-[#27323E]">
       <h2 className="card-title">
         Logbook Apps
       </h2>
       <div className="card-actions mt-4">
       <div className="badge badge-outline">Html</div>
         <div className="badge badge-outline">Css</div>
         <div className="badge badge-outline">Javascript</div>
         <div className="badge badge-outline">Laravel</div>
       </div>
     </div>
   </div>

   </div>
       </div>
)

}
export default Project