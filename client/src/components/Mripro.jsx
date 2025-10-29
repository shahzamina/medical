import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Mripro = () => {
  const h1='MRI System'
  const p1='We provide a wide range of MRI system parts of various manufacturers'
  const img='/images/mri.jpg'
   const h2='Equipment /'
  const p=' MRI'
      const part = [
        
         
           {img:'/images/mri1.jpg', p:'6250034 - GE Healthcare - MRI - IXG Board  - 6250035 REV 2', link:'/mri'},
          {img:'/images/mri21.jpg', p:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board ', link:'/mripcb'},
{img:'/images/mri22.jpg', p:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board ', link:'/mripcb'},

        
        ];
  return (
    <div>
       <Othparts h1={h1} p1={p1} h2={h2} p={p}   img={img} part={part} />
    </div>
  )
}

export default Mripro
