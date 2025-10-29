import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Fluoro from './Fluoro';
import Othparts from './Othparts';

const Fluopro = () => {
  const h1='Fluoroscopy System'
  const p1='We deliver a wide array of Fluoroscopy system parts of multiple OEMs'
  const img='/images/fluro.jpeg'
   const h2='Equipment /'
  const p=' Fluoroscopy'
      const part = [
         
         
          {img:'/images/fluro1.jpg', p:'0 925 - GE Hewalthcare - Fluoroscopy - R & F Backplane Board - 46-264064G3-A', link:'/fluoro'},
        {img:'/images/fluro2.jpg', p:'0 925 - GE Hewalthcare - Fluoroscopy - R & F Backplane Board - 46-264064G3-A', link:'/fluoro'},
        
         
        ];
  return (
    <div>
      <Othparts h1={h1} p1={p1} h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Fluopro
