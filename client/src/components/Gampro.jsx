import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Gampro = () => {
  const h1='Gamma Camera System'
  const p1='We supply a wide variety of parts for Gamma Camera system of various brands'
  const img='/images/gam.jpeg'
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
