import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Allmod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const part = location.state?.part;

  if (!part) return <p className="text-center mt-10">No part data available.</p>;

  return (
    <>
      <div className="bg-gray-300 h-24"></div>
      <div className="w-screen mb-10 pb-10 mt-12">
        <div className="h-auto flex flex-col lg:flex-row gap-4 w-screen">
          <div className="w-[50%] flex mb-1">
            <div className="w-[200%] lg:w-[120%] mt-10 ml-12 h-[100px] lg:h-[400px] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={`http://localhost:5000${part.image}`} // assuming part.image is like "/uploads/filename.jpg"
                alt={part.product || "Part image"}
              />
            </div>
          </div>

          <div className="border border-black font-bold flex flex-col pt-20 mr-2 lg:mr-20 ml-6 lg:ml-4">
             <h6 className="font-bold px-2 text-left mt-2 !text-2xl text-black">
 
  {part.partNumber ? `${part.partNumber}` : ''} 
  {part.manufacturer ? ` - ${part.manufacturer}` : ''} 
  {part.modality ? ` - ${part.modality}` : ''} 
  {part.p ? ` - ${part.p}` : ''} 
  {part.modal ? ` - ${part.modal}` : ''}
</h6>

           

            <div className="flex justify-left gap-2 p-1">
              <h5 className="font-bold text-2xl">Part Number:</h5>
              <h5 className="!font-normal text-sm  text-gray-400">{part.partNumber}</h5>
            </div>

            <div className="flex justify-left gap-2 p-1">
              <h5 className="font-bold text-2xl">Manufacturer:</h5>
              <h5 className="!font-normal text-lg lg:text-xl text-gray-400">{part.manufacturer}</h5>
            </div>

            <div className="flex justify-left gap-2 p-1">
              <h5 className="font-bold text-2xl">Modality:</h5>
              <h5 className="!font-normal text-lg lg:text-xl  text-gray-400">{part.modality}</h5>
            </div>

            {part.modal && (
              <div className="flex justify-left gap-2 p-1">
                <h5 className="font-bold text-2xl">Modal:</h5>
                <h5 className="!font-normal text-lg lg:text-xl text-gray-400">{part.modal}</h5>
              </div>
            )}

            <div className="flex justify-left mt-10">
              <button
                onClick={() => navigate("/sign")}
                className="relative inline-flex items-center justify-center font-semibold group w-full sm:w-auto"
              >
                <span className="absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[180px]">
                  <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                    &gt;
                  </span>
                  <span className="block sm:hidden text-black text-sm font-semibold">Get A Quote</span>
                </span>
                <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4 transition-all duration-700 ease-in-out">
                  Get A Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allmod;
