import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Ultrapro = () => {
  const h1='High-Performance Ultrasound Systems for Accurate Real-Time Imaging'
  const p1='Achieve clarity, speed, and precision with our advanced ultrasound systems and replacement parts. Built for versatility and reliability, our solutions support a wide range of clinical applications — from general imaging to specialized diagnostics.'
  const img='/images/ultr.jpg'
    const h2='Equipment /'
  const p=' Ultrasound'
      const part = [
        
          {img:'/images/ultras1.jpg', p:'5761561 - GE Healthcare - Ultrasound - OSCO Charger Board - Logiq F8 Vivid', link:'/ultra'},
        
      
        ];
  return (
    <div>
     <Parts h1={h1} p1={p1}  h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Ultrapro
