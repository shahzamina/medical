import React from 'react'
import { useNavigate } from "react-router-dom";

const Allmod = ({part}) => {
const navigate=useNavigate()
   

  return (
    <>
<div className=' bg-gray-300 h-24'>

     </div>
   <div className='w-screen mb-10 pb-10 mt-12'>
     
                <div 
                className='h-120 flex flex-row gap-4 w-screen '
                >
                 {
                  part.map((part)=>(

                  
                    <>
                        <div className='w-[50%] flex mb-10'
                            key={part.id}>
                              
                           <div className="border border-black w-[80%] mt-20 ml-20 h-[400px] overflow-hidden">
  <img
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    src={part.img}
    alt={part.p}
  />
</div>

                 </div>       
                        <div className='font-bold flex flex-col pt-20 mr-30'>
                            <h4 className='  text-left mb-3 !font-bold'>{part.h}</h4>
                            <div className='flex justify-left gap-2 p-1'>
                            <h5 className='!font-bold !text-2xl'>{part.h1}</h5>
                            <h5 className='!font-normal !text-xl mt-1 text-gray-400'>{part.p1}</h5>
                            </div>
                            <div className='flex justify-left gap-2 p-1'>
                           
                            <h5 className='!font-bold !text-2xl' >{part.h2}</h5>
                            <h5 className='!font-normal  !text-xl mt-1 text-gray-400'>{part.p2}</h5>
                            </div>

                            <div className='flex justify-left gap-2 p-1'>
                            
                            <h5  className='!font-bold !text-2xl'>{part.h3}</h5>
                            <h5  className='!font-normal !text-xl mt-1 text-gray-400'>{part.p3}</h5>
                            </div>
                            <div className='flex justify-left gap-2 p-1'>
                             
                            <h5  className='!font-bold !text-2xl'>{part.h4}</h5>
                            <h5  className='!font-normal  !text-xl mt-1 text-gray-400'>{part.p4}</h5>
                            </div>
                            <div className='flex justify-left gap-2 p-1'>
                             
                            <h5  className='!font-bold !text-2xl'>{part.h5}</h5>
                            <h5  className='!font-normal  !text-xl mt-1 text-gray-400'>{part.p5}</h5>
                            </div>

                            <div className="flex justify-left mt-10">
                           <button
    onClick={() => {
      // Replace with your navigation logic
      navigate("/sign")
      console.log("Button clicked");
    }}
    className="relative inline-flex items-center justify-center font-semibold group w-full sm:w-auto"
  >
    {/* Expanding circle */}
    <span
      className="absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center 
                 overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[180px]"
    >
      {/* '>' fades out on hover (only on lg) */}
      <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
        &gt;
      </span>

      {/* Text inside circle for small screens */}
      <span className="block sm:hidden text-black text-sm font-semibold">
        Get A Quote
      </span>
    </span>

    {/* Text outside circle for large screens */}
    <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4  transition-all duration-700 ease-in-out">
      Get A Quote
    </span>
  </button>
  </div>
                        </div>
                 </>
                     
                  ))
                 }

                          
                </div>
      
    </div>
    </>
  )
}

export default Allmod
