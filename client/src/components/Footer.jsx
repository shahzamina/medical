import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
   <div className='py-10 mt-auto' 
     style={{
       backgroundImage: "url('/images/map.PNG')",
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundAttachment: "fixed",
     }}
>
  <div className='flex flex-col gap-0'>

    <div className=' sm:flex sm:flex-col lg:flex lg:flex-row justify-between border-b-2 border-gray-600 px-5 mx-10'>
      <div>
        <ul className='ml-2 text-left'>
          <Link className='text-black text-lg'><li>About Infinity Global</li></Link>
        </ul>
      </div>

      <div className='lg:mr-30'>
        <ul>
          <Link style={{textDecoration:'none'}} className='text-black text-left text-lg font-bold'><li>Main: 517-668-8800</li></Link>
          <Link style={{textDecoration:'none'}} className='text-black text-left text-lg font-bold'><li>Toll free: 888-694-6478</li></Link>
          <Link style={{textDecoration:'none'}} className='text-black text-left text-lg font-bold'><li>Parts: 877-621-2887</li></Link>
          <Link style={{textDecoration:'none'}} className='text-black text-left text-lg font-bold'><li>Service: 877-733-7142</li></Link>
        </ul>
      </div>
    </div>

    <div className='flex flex-col items-center md:flex-row md:justify-between px-5'>
      <div className='hidden md:block'> 
        <Link><img className=' w-40 ml-18' src="/images/inf123.png" alt="" /></Link>
      </div>

      <div className='flex gap-4 justify-center md:justify-end lg:mr-50 sm:mt-3 md:mt-0'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaFacebookF className="text-2xl text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaInstagram className="text-3xl text-yellow-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
           className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102">
          <FaYoutube className="text-3xl text-red-500" />
        </a>
      </div>
    </div>

    <div className=' flex flex-col'>
      <ul className='flex gap-3 ml-22'>
        <li>
          <Link style={{textDecoration:'none'}} 
                className='text-black text-md inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102 hover:text-[#39FF14]'>
            Terms of use
          </Link>
        </li>
        <li>
          <Link style={{textDecoration:'none'}} 
                className='text-black text-md inline-block transform transition duration-300 hover:-translate-y-0.5 hover:scale-102 hover:text-[#39FF14]'>
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p className='text-left ml-28 text-black'>© 2025 Infinity Global, Inc. | 1845 Cedar St. Holt MI 48842</p>
    </div>

  </div>
</div>

  )
}

export default Footer
