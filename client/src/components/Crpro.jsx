import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Crpro = () => {
const h1='Advanced Computed Radiography Solutions for Reliable Digital Imaging'
const p1='Upgrade your imaging workflow with dependable CR technology designed for accuracy and performance. Our Computed Radiography systems and parts provide sharp digital images, quick turnaround times, and long-lasting reliability.'
 const img='/images/cr.jpg'
   const h2='Equipment /'
  const p=' CR'
      const part = [
        
        
          { img:'/images/cr1.jpg', p:'A800426.1 - AGFA Healthcare - CR - Laser Board 1', link:'/crlas'},
          { img:'/images/cr2.jpg', p:'F8.5170.3500.X - AGFA Healthcare - CR -Laser Board 2', link:'/crlasb'},
          { img:'/images/cr3.jpg', p:'8.5170.4120.4 - AGFA Healthcare - CR - Power Distribution Board ', link:'/crpow'},
          { img:'/images/cr4.jpg', p:'8517014800 - AGFA Healthcare - CR -Touch Display Board ', link:'/crtouch'},
        
          
        ];
  return (
    <div>
     <Parts h1={h1} p1={p1} h2={h2} p={p} img={img} part={part} />
    </div>
  )
}

export default Crpro
