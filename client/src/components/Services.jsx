import React from 'react'
import Showcase from './Showcase';

const Services = () => {
   const content = [
    {
      heading: "Multivendor Magnet Power Supply",
      paragraph: "As the first universal power supply compatible with leading MRI brands such as Siemens, Philips, GE, and Canon, it simplifies operations by combining multiple ramp tools into one versatile unit. ",
      img: "/images/r1.jpeg",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Coldhead Replacement Kit",
      paragraph: "The GE Coldhead Change Kit offers a comprehensive and easy-to-use solution for replacing coldheads on GE magnets. Designed with premium components and advanced functionality, it ensures a safe, seamless, and efficient replacement process. ",
      img: "/images/r2.jpeg",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Coldhead Maintenance Kit",
      paragraph: "The Philips Coldhead Service Kit provides a comprehensive and effective solution for maintaining IGC magnets. Equipped with advanced features and all essential tools, it enables smooth, dependable, and professional coldhead servicing. ",
      img: "/images/r3.jpg",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "MRI-Compatible Tools",
      paragraph: "We provide customizable nonmagnetic service tool kits crafted from beryllium, copper, or titanium—engineered to deliver exceptional durability, performance, and safety within MRI environments. ",
      img: "/images/r4.jpg",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Helium Filling Kit",
      paragraph: "The Helium Filling Kit is a specialized service tool designed to simplify helium refill operations while reducing potential risks and ensuring safe, efficient handling. ",
      img: "/images/r5.jpeg",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "RTI kV/mA Meters",
      paragraph: "The Piranha MULTI X-ray meter provides a complete solution for precise diagnostics and quality assurance across Radiography/Fluoroscopy, CT and Mammography systems. It accurately measures kVp, exposure time, HVL, total filtration, dose, dose rate, and displays waveforms—offering comprehensive performance evaluation in one device. ",
      img: "/images/r6.png",
      btn: "Request A Service Quote",
     
    },
  ];
  return (
    <>
      <div style={{ backgroundImage: "url('/images/ren1.jpeg')",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'

      }}
      className="bg-gray-100 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-[550px]">
  <div className="absolute inset-0 bg-gradient-to-tr from-[#003080]/50 via-[#0066CC]/50 to-[#3399FF]/30 z-10 flex flex-col items-left justify-center">
    <h1 className="text-white text-center sm:!text-sm lg:!text-6xl font-bold px-5 mt-5 ">Rental Services</h1>
    <p  className="mt-4  text-white text-center px-12 sm:px-20  lg:px-12 lg:text-xl font-normal ">We provide flexible MRI rental services for smooth and reliable operations. </p>
    

 

  </div>

    </div>

    <div className='mt-16'>
     

<p className='px-10 lg:px-64 pb-4 text-lg text-justify'>We are proud to be equipped with a complete range of advanced tools and equipment, including Multivendor Magnet Power Supplies (GE, Siemens, Philips, Toshiba), Coldhead Replacement Kits, Helium Filling Kits, MRI-Compatible Tools, and RTI kV/mA Meters. These specialized instruments enable us to maintain and operate radiology systems at their highest efficiency, ensuring consistent performance and dependable scan quality. </p>
<p className='text-left px-6 lg:px-64 text-lg'> We also provide these tools on a rental basis, such as: </p>


<Showcase content={content}  />
    </div>
    </>
  )
}

export default Services
