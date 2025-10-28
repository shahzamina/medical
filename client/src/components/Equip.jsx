import React from 'react'
import { Link } from 'react-router-dom';
const Equip = () => {
  const categories = [
     { link:'/mripro', img: '/images/mri.png', name: 'MRI' },
  { link:'/ctpro', img: '/images/ctt.png', name: 'CT Scan' },
  { link:'/xraypro', img: '/images/xr.png', name: 'X-Ray' },
  { link:'/ultrapro', img: '/images/uu.png', name: 'Ultrasound' },
  { link:'/mampro', img: '/images/mm.png', name: 'Mammography' },
  { link:'/fluopro', img: '/images/ff.png', name: 'Fluoroscopy' },
  { link:'/gampro', img: '/images/cttt.png', name: 'Gamma Camera' },
  { link:'/angpro', img: '/images/aa.png', name: 'Angiography' },
    { link:'/crpro', img: '/images/crr.png', name: 'CR System' },
];
  return (
    <div>
        <div style={{ backgroundImage: 'url(/images/home1.jpeg)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              backgroundPosition:'center'
      
            }}
            className="bg-gray-100 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-[500px]">
        <div className="absolute inset-0  bg-gradient-to-tr from-[#003080]/70 via-[#0066CC]/50 to-[#3399FF]/30 z-10 flex flex-col items-left justify-center">
          <h1 className="text-white text-left sm:!text-sm lg:!text-6xl font-bold px-5 mt-5 ">Medical Imaging Equipment</h1>
          <p  className="mt-4  text-white text-left  sm:px-20 px-12 lg:px-12 lg:text-xl font-normal ">We carry CT, MRI, PET/CT, C-arm, Cath labs, X-rays, Mammo, and Ultrasound from major providers like Siemens, GE, Philips, Toshiba, Neusoft, Halogic, and more. </p>
   

        </div>
      
          </div>
     <div className="w-full bg-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold text-[#001F3F] mb-10">
        Explore Our Imaging Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mt-5">
        {categories.map((cat, index) => (
          <Link
          style={{textDecoration:'none'}}
            to={cat.link}
            key={index}
              className="flex flex-col text-black items-center justify-center w-60 h-60 bg-white border border-gray-200 rounded-sm 
             shadow-[0px_0px_6px_#0077AA,_-0px_-0px_6px_#1E90FF]
             hover:shadow-[0px_0px_8px_#0077AA,_-0px_-0px_8px_#1E90FF]
             hover:scale-105 transition-all duration-300 cursor-pointer no-underline"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="h-24 w-24 object-contain mb-4"
            />
            <h3 className="!text-lg font-semibold ">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Equip
