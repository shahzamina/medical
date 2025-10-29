import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
const About = () => {
  const cardData = [
  {
    img: "/images/ab.png",
    title: "Fast Response Time",
    description: "We guarantee a response within one hour, ensuring your workflow stays continuous."
  },
  {
    img: "/images/ship.png",
    title: "Global Shipping",
    description: "Through our global network, we ensure reliable delivery within 48 hours."
  },
  {
    img: "/images/paym.png",
    title: "Flexible Payments",
    description: "We make payments easy with flexible terms tailored to your business requirements."
  }
];

  return (
    <div>
<div style={{ backgroundImage: 'url(/images/map.PNG)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              backgroundPosition:'center'
      
            }}
            className="bg-gray-100 relative w-screen sm:w-[20%] md:w-[100%] lg:w-[100%] h-[550px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#003080]/70 via-[#0066CC]/50 to-[#3399FF]/30 z-10 flex flex-col items-left justify-center">
         <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white sm:!text-sm lg:!text-4xl font-bold px-5 mt-5"
        >
          EXPLORE
        </motion.h1>

        {/* Heading 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-white sm:!text-sm lg:!text-6xl font-bold px-5 mt-2"
        >
          INFINITY GLOBAL
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="mt-4 text-white px-12 sm:px-14 lg:px-12 lg:text-xl font-normal"
        >
          Leading Supplier of Radiology Equipment Parts
        </motion.p>
 


        </div>
      
          </div>
          <p className='px-6 lg:px-20 text-xl text-justify text-gray-600 mt-5'>We are Infinity Global, deeply committed to empowering the healthcare sector worldwide. As a trusted supplier, we deliver top-tier, high-quality parts for all major radiology modalities—MRI, CT Scan, Digital X-Ray, Ultrasound, Mammography, Angiography, Fluoroscopy, DR & CR Systems.
We ensure your radiology equipment operates at peak performance with reliable parts and expert support.
</p>

         <div class="flex flex-col md:flex-row gap-4 px-12 py-12">
 
  <div class="flex-1 py-12 bg-gradient-to-r from-[#0046A0]/90 via-[#0066CC]/60 to-[#0099FF]/90 text-white p-6 rounded-lg transition-all duration-300 hover:scale-101 hover:shadow-xl">
    <h2 class="text-2xl font-bold mb-4">Our Vision</h2>
    <p className='text-lg text-justify lg:text-center'>
      To fundamentally transform radiology equipment reliability by leading the market in parts supply, driven by a commitment to quality assurance and unwavering customer success.
    </p>
  </div>

 
  <div class="flex-1 py-12 bg-white shadow-lg p-6 rounded-lg transition-all duration-300 hover:scale-101 hover:shadow-2xl">
    <h2 class="text-2xl font-bold mb-4 text-[#0046A0]">Our Mission</h2>
    <p className='text-lg text-gray-500 text-justify lg:text-center'>
      To uphold the operational integrity of the worldwide healthcare sector by serving as the trusted, expert provider of high-quality parts for all advanced radiology systems.
    </p>
  </div>
</div>

<div className='mt-6 mb-12'>
  <h2 className='!text-5xl py-8'>Why choose Infinity Global</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-2 pb-12 pt-12">
  {cardData.map((card, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg p-4 lg:p-2 transition-transform duration-300 hover:scale-101 hover:shadow-xl"
    >
      <img src={card.img} alt={card.title} className="w-48 h-46 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2 text-[#0046A0] text-center">{card.title}</h3>
      <p className="text-gray-600 text-lg text-justify">{card.description}</p>
    </div>
  ))}
</div>

</div>




    </div>
  )
}

export default About
