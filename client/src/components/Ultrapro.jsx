import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Ultrapro = () => {
  const h1='Ultrasound System'
  const p1='We offer a comprehensive range of Ultrasound system parts of different manufacturers'
  const img='/images/ultr.jpeg'
    const h2='Equipment /'
  const p=' Ultrasound'
      const part = [
        
          {img:'/images/ultras1.jpg', p:'5761561 - GE Healthcare - Ultrasound - OSCO Charger Board - Logiq F8 Vivid', link:'/ultra'},
        
      
        ];
  return (
    <div>
     <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Ultrapro
