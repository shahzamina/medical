import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Gampro = () => {
  const h1='Precision Gamma Camera Systems for Advanced Nuclear Imaging'
  const p1='Enhance your nuclear medicine capabilities with high-performance gamma camera systems and components. Our solutions deliver exceptional image quality, accurate radiotracer detection, and reliable system uptime.'
  const img='/images/gam.jpg'
    const h2='Equipment /'
  const p=' Gamma Camera'
      const part = [
       
      
        
           {img:'/images/gama1.jpg', p:'552000448 - SCHLEIFRING - Gamma Camera - Slip Ring Board', link:'/gamacam'},
        {img:'/images/gama2.jpg', p:'552000448 - SCHLEIFRING - Gamma Camera - Slip Ring Board', link:'/gamacam'},
        
         
        ];
  return (
    <div>
   <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Gampro
