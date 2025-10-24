import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Mripro = () => {
  const h1='Advanced MRI Systems for Superior Diagnostic Precision'
  const p1='Experience powerful imaging performance with our state-of-the-art MRI systems and components. Engineered for clarity, reliability, and patient comfort, our MRI solutions deliver detailed anatomical visuals essential for accurate diagnoses.'
  const img='/images/mri.jpg'
   const h2='Equipment /'
  const p=' MRI'
      const part = [
        
         
          {img:'/images/mri1.jpg', p:'6250034 - GE Healthcare - MRI - IXG Board  - 6250035 REV 2', link:'/mri'},
          {img:'/images/mri21.jpg', p:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board ', link:'/mripcb'},
        
        ];
  return (
    <div>
       <Parts h1={h1} p1={p1} h2={h2} p={p}   img={img} part={part} />
    </div>
  )
}

export default Mripro
