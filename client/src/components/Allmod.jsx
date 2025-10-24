import React from 'react'


const Allmod = ({part}) => {

   

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
                            <button className='flex items-left p-3 bg-amber-600 w-55 mt-4'>{part.btn}</button>
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
