import { useState , useEffect} from "react"
import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {

      const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <div>
      <nav className={`fixed top-0 left-0  w-full sm:w-full  lg:w-full z-50 flex flex-row justify-between items-center
    px-4 sm:px-6 md:px-10 lg:px-16 
    h-20 sm:h-24 
      ${isScrolled ? 'bg-white/70 shadow-md' : 'bg-transparent'}
      `}>
      <Link to='/'>
  <img
    className='w-40 sm:w-28 md:w-64 lg:w-80 h-40 mt-5 ml-4 sm:ml-4 md:ml-6 pl-2 sm:pl-4 md:pl-3 pb-12'
    src={isScrolled ? "/images/inf123.png" : "/images/inf123.png"}
    alt="Logo"
  />
</Link>


       <button
        onClick={() => setMenuOpen(!menuOpen)}
     className={` lg:hidden flex flex-col justify-center items-center w-10 h-10  focus:outline-none z-10`}

      >
      <span
  className={`block w-6 h-[2px] ${
    isScrolled ? "bg-black" : "bg-white"
  } transition-all duration-300 ${
    menuOpen ? "rotate-45 translate-y-[7px]" : ""
  }`}
/>
<span
  className={`block w-6 h-[2px] ${
    isScrolled ? "bg-black" : "bg-white"
  } my-[6px] transition-all duration-300 ${
    menuOpen ? "opacity-0" : ""
  }`}
/>
<span
  className={`block w-6 h-[2px] ${
    isScrolled ? "bg-black" : "bg-white"
  } transition-all duration-300 ${
    menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
  }`}
/>
 </button>

 
      <ul className='mr-4 mt-3  hidden lg:flex lg:flex-row  justify-right ml-160 md:ml-80 lg:ml-120 w-full gap-6 p-2'>
<li className='relative group  mt-1'><button className={`mb-0 font-bold text-lg border-b-2 border-transparent cursor-pointer transition-all duration-300  inline-block  ${isScrolled
        ? 'text-black hover:text-gray-700 hover:border-black'
        : 'text-white hover:text-gray-200 hover:border-white'
      }`}>Equipment ▾</button>
<ul className='p-0  hidden absolute left-0 top-full z-10 bg-white  group-hover:block  w-[250px] shadow-lg '>
  <Link to='/mripro'><li className='inline-block text-lg font-bold text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>MRI</li></Link>
  <Link to='/ctpro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>CT Scan</li></Link>
  <Link to='/xrypro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>Digital X-Ray</li></Link>
  <Link to='/crpro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3 hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>CR System</li></Link>
  <Link to='/ultrapro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>Ultrasound</li></Link>
  <Link to='/mampro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>Mammography</li></Link>
  <Link to='/fluopro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  px-3 py-3 cursor-pointer w-full'>Fluoroscopy</li></Link>
  <Link to='/gampro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3  hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>Gamma Camera</li></Link>
<Link to='/angpro'><li className='inline-block text-lg font-bold  text-left text-[#0046A0]/90 px-3 py-3 hover:text-white hover:bg-gradient-to-r hover:from-[#00BFFF] hover:via-[#1E90FF] hover:to-[#104E8B] transition-all duration-300  cursor-pointer w-full'>Angiography</li></Link>









</ul>


</li>
<Link to='allpro'><li className={` font-bold text-lg border-b-2 border-transparent  cursor-pointer transition-all duration-300  inline-block  ${isScrolled
        ? 'text-black hover:text-gray-700 hover:border-black'
        : 'text-white hover:text-gray-200 hover:border-white'
      }`}>Parts</li></Link>
       <Link to='/ser'><li className={`font-bold text-lg border-b-2 border-transparent cursor-pointer transition-all duration-300  inline-block ${isScrolled
        ? 'text-black hover:text-gray-700 hover:border-black'
        : 'text-white hover:text-gray-200 hover:border-white'
      }`}>Rental Services</li></Link>
         <Link to='/about'><li className={` font-bold text-lg border-b-2 border-transparent  cursor-pointer transition-all duration-300  inline-block  ${isScrolled
        ? 'text-black hover:text-gray-700 hover:border-black'
        : 'text-white hover:text-gray-200 hover:border-white'
      }`}>Who we are</li></Link>
         <Link to='/sign'><li className={` font-bold text-lg border-b-2 border-transparent  cursor-pointer transition-all duration-300  inline-block  ${isScrolled
        ? 'text-black hover:text-gray-700 hover:border-black'
        : 'text-white hover:text-gray-200 hover:border-white'
      }`}>Contact Us</li></Link>
        
      </ul>
{menuOpen && (
  <div className="fixed top-0 right-0 w-full h-screen bg-white z-50 transition-transform duration-300 transform translate-x-0 overflow-y-auto bg-gradient-to-r from-[#00BFFF] via-[#1E90FF] to-[#104E8B]">
    
    {/* Close Button */}
  
    {/* Menu Content */}
    <ul className="flex flex-col items-start gap-2 px-6 pt-6 ">
      {/* Equipment Toggle */}
       <div className="relative flex justify-end items-center text-3xl  px-6 pt-4 text-white ml-70">

      <button
        onClick={() => {
          setMenuOpen(false);
          setEquipOpen(false);
        }}
        className="text-3xl font-bold text-white "

        aria-label="Close menu"
      >
        ×
      </button>
    </div>


      {/* Other Links */}
      {[{ to: "/equip", label: "Equipents" },
        { to: "/allpro", label: "Parts" },
        { to: "/ser", label: "Rental Services" },
        { to: "/about", label: "Who we are" },
        { to: "/contact", label: "Contact Us" },
      ].map(({ to, label }) => (
        <Link style={ {textDecoration:'none'}} key={to} to={to} onClick={() => setMenuOpen(false)}>
          <li className="inline-block text-lg text-left  px-2 py-2  text-white   cursor-pointer w-full">
            {label}
          </li>
        </Link>
      ))}
    </ul>
  </div>
)}


    </nav>
    </div>
  )
}

export default Navbar
