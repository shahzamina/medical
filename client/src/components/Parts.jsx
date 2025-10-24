import React, { useState,useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "lucide-react";
import CreatableSelect from 'react-select/creatable';

const Parts = ({part=[],h1,p1,img,h2,p,style}) => {
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedModality, setSelectedModality] = useState(null);
const [open,setopen]=useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // you can change this to 6, 9, etc.


 
    
  


  const parsedData = useMemo(() =>
    part.map(item => {
      const parts = item.p.split(' - ');
      return {
        ...item,
        manufacturer: parts[1]?.trim() || '',
        modality: parts[2]?.trim() || '',
      };
    }), [part]);

  // --- Unique manufacturer list ---
  const manufacturers = [...new Set(parsedData.map(i => i.manufacturer))]
    .map(m => ({ value: m, label: m }));

  // --- Filter modalities for selected manufacturer ---
  const modalities = selectedManufacturer
    ? [...new Set(parsedData
        .filter(i => i.manufacturer === selectedManufacturer.value)
        .map(i => i.modality))]
        .map(m => ({ value: m, label: m }))
    : [];

  // --- Filter items based on current selections ---
 const filteredItems = parsedData.filter(item =>
  (!selectedManufacturer || item.manufacturer === selectedManufacturer.value) &&
  (!selectedModality || item.modality === selectedModality.value)
);








 // --- Pagination should use filtered items ---
const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);


  // 🔹 Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional: scroll to top
  };


  return (

    <>
      <div style={{ backgroundImage: `url(${img})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'

      }}
      className="bg-gray-100 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-[650px]">
  <div className="absolute inset-0  bg-gradient-to-tr from-[#003080]/70 via-[#0066CC]/50 to-[#3399FF]/30 z-10 flex flex-col items-left justify-center">
    <h1 className="text-white text-left sm:!text-sm lg:!text-6xl font-bold px-5 mt-5 ">{h1}</h1>
    <p  className="mt-4  text-white text-left  lg:px-12 lg:text-xl font-normal ">{p1} </p>
    
 <Link
      
       style={{ textDecoration: "none" }}
       className="relative inline-flex items-center justify-center text-[#39FF14] font-semibold group mt-4"
     >
       {/* Expanding circle */}
       <span
         className="absolute left-0 w-10 h-10 border-2 p-4 ml-12 border-[#39FF14] rounded-full flex items-center justify-center 
                    overflow-hidden transition-all duration-700 ease-in-out group-hover:w-[330px]"
       >
         {/* '>' fades out on hover */}
         <span className="absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
           &gt;
         </span>
       </span>
     
       {/* Text (stays same) */}
       <span className="relative text-lg text-white pl-16 pr-240 transition-all duration-700 ease-in-out">
  REQUEST A PART/Get A Quote
       </span>
     </Link>
    
 

  </div>

    </div>

<div className='flex ml-20 mt-8 mb-0 items-center space-x-2'>
  <Link
    to="/equip"
    className="text-2xl font-semibold text-[#001F3F] hover:text-[#39FF14] transition-all duration-300 transform hover:scale-102"
    style={{ textDecoration: 'none' }}
  >
    <h3>{h2} </h3>
  </Link>
  <p style={style} className='text-xl mt-3 text-gray-500'>{p}</p>
</div>

<div className='sm:flex sm:felx-col lg:flex  w-screen h-auto mt-12 mb-10'>

    <div className='ml-3 lg:w-[25%] bg-white h-auto shadow-lg'>

 <div className="flex flex-wrap justify-center gap-2 my-6">

       
{/* Manufacturer Select */}
<div className="w-64">
  <CreatableSelect
    placeholder="Select Manufacturer..."
    options={manufacturers}
    value={selectedManufacturer}
    onChange={(option) => {
      setSelectedManufacturer(option);
      setSelectedModality(null); // reset modality when manufacturer changes
    }}
    isClearable
    isSearchable={false}
    isValidNewOption={() => false}
    formatCreateLabel={() => null}
    styles={{
      control: (base, state) => ({
        ...base,
        border: `2px solid ${state.isFocused ? '#1E90FF' : '#0046A0'}`, // blue border
        boxShadow: state.isFocused
          ? '0 0 4px rgba(30,144,255,0.4)' // soft glow when focused
          : 'none',
        backgroundColor: 'white',
        color: '#0046A0',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: '#1E90FF',
        },
      }),
      input: (base) => ({ ...base, color: '#0046A0' }),
      placeholder: (base) => ({
        ...base,
        color: '#4A76C9',
        fontStyle: 'italic',
      }),
      singleValue: (base) => ({ ...base, color: '#0046A0' }),
      menu: (base) => ({
        ...base,
        background: 'white',
        borderRadius: 0,
        marginTop: 2,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }),
      option: (base, state) => ({
        ...base,
        textAlign: 'left',
        padding: '12px 14px',
        background: state.isFocused
          ? 'linear-gradient(to right, #00BFFF, #1E90FF, #104E8B)'
          : 'transparent',
        color: state.isFocused ? 'white' : '#0046A0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:last-child': { borderBottom: 'none' },
        '&:active': {
          background: 'linear-gradient(to right, #009ACD, #0077AA)',
          color: 'white',
        },
      }),
      clearIndicator: (base) => ({
        ...base,
        color: '#39FF14',
        '&:hover': { color: '#00BFFF' },
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: '#39FF14',
        '&:hover': { color: '#00BFFF' },
      }),
    }}
  />
</div>


{/* Modality Select */}
<div className="w-64 mt-1">
  <CreatableSelect
    placeholder="Select Modality..."
    options={modalities}
    value={selectedModality}
    onChange={setSelectedModality}
    isDisabled={!selectedManufacturer} // disabled until manufacturer selected
    isClearable
    isSearchable={false}
    isValidNewOption={() => false}
    formatCreateLabel={() => null}
    styles={{
      control: (base) => ({
        ...base,
        borderColor: '#39FF14',
        boxShadow: 'none',
        '&:hover': { borderColor: '#39FF14' },
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '12px',
        cursor: !selectedManufacturer ? 'not-allowed' : 'pointer',
      }),
      input: (base) => ({ ...base, color: 'black' }),
      placeholder: (base) => ({
        ...base,
        color: !selectedManufacturer ? '#aaa' : '#888',
        fontStyle: 'italic',
      }),
      singleValue: (base) => ({ ...base, color: 'black' }),
      menu: (base) => ({
        ...base,
        background: 'linear-gradient(to bottom, #001A4D, #0046A0)',
        borderRadius: 0,
        border: '1px solid #0046A0',
        marginTop: 2,
      }),
      option: (base, state) => ({
        ...base,
        background: state.isFocused
          ? 'linear-gradient(to right, #00BFFF, #00E5FF)'
          : 'transparent',
        color: state.isFocused ? 'white' : 'black',
        cursor: 'pointer',
        borderBottom: '1px solid #0046A0',
        transition: 'all 0.3s ease',
        '&:last-child': { borderBottom: 'none' },
        '&:active': {
          background: 'linear-gradient(to right, #009ACD, #0077AA)',
          color: 'white',
        },
      }),
      clearIndicator: (base) => ({
        ...base,
        color: '#39FF14',
        '&:hover': { color: '#00BFFF' },
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: '#39FF14',
        '&:hover': { color: '#00BFFF' },
      }),
    }}
  />
</div>

  </div>

     

     
    </div>
    

    <div className='lg:w-[90%]'>
 {/* --- CARDS --- */}
      <div className='flex flex-wrap justify-center gap-4 '>
        {currentItems.map((v, idx) => (
          <div
            key={idx}
            className="w-80 h-80 shadow-lg rounded-sm transform transition duration-300 hover:-translate-y-0.5 hover:scale-102"
          >
            <Link style={{textDecoration:'none'}} to={v.link} className="text-black no-underline">
              <img className="w-full h-55 object-cover" src={v.img} alt={v.p} />
              <h6 className="font-bold px-4 mt-2">{v.p}</h6>
            </Link>
          </div>
        ))}

        {/* No results */}
        {filteredItems.length === 0 && (
          <p className="text-gray-600 font-semibold mt-5">
            No items found.
          </p>
        )}
      </div>

  


<div className='flex gap-3 justify-center mt-10'>
  {/* Prev button */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className='px-2 py-2 text-white bg-[#39FF14]/100 rounded disabled:opacity-50 hover:scale-105 transition-transform'
  >
   <ChevronLeft size={28} />
  </button>

  {/* Current page indicator */}
  <span className='px-4 py-2 bg-gray-200 rounded text-gray-800 font-semibold'>
    {currentPage} / {totalPages}
  </span>

  {/* Next button */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className='px-2 py-2 text-white bg-[#39FF14]/100 rounded disabled:opacity-50 hover:scale-105 transition-transform'
  >
      <ChevronRight size={28} />
  </button>
</div>


    </div>

</div>

</>

  )
}

export default Parts
