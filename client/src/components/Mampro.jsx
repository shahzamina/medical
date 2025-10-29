import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Mampro = () => {
   const h1='Mammography System'
  const p1='We supply a diverse range of Mammography system parts of various brands'
  const img='/images/mam.jpeg'
   const h2='Equipment /'
  const p=' Mamography'
      const part = [
        
        
         {img:'/images/mamo11.jpg', p:'2385602-11 - GE Healthcare - Mammography  - CPU Gene Nephtys Sirius Board', link:'/mamocpu'},
          {img:'/images/mamo21.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - DS Positioner Boarda - 2336662-4', link:'/mamods'},
           {img:'/images/mamo22.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - DS Positioner Boarda - 2336662-4', link:'/mamods'},
          {img:'/images/mamo31.jpg', p:'2107747-2 - GE Healthcare - Mammography  - Generator Command Board ', link:'/mamog'},
          {img:'/images/mamo41.jpg', p:'2198370-2 A - GE Healthcare - Mammography - Generator Interface Board  - 400 PL2', link:'/mamogen'},
        {img:'/images/mamo42.jpg', p:'2198370-2 A - GE Healthcare - Mammography - Generator Interface Board  - 400 PL2', link:'/mamogen'},
          {img:'/images/mamo61.jpg', p:'5233827-8-004 - GE Healthcare - Mammography  - Programmed CPU Board', link:'mamopro'},
           {img:'/images/mamo62.jpg', p:'5233827-8-004 - GE Healthcare - Mammography  - Programmed CPU Board', link:'mamopro'},
          //{img:'/images/mamo61.jpg', p:'MR-RBC-91-HITSCHI-MRI-Rapid Body Coil', link:'#'},
          {img:'/images/mamo7.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - TILT/Compression Board', link:'/mamtil'},
          
        
        ];
  return (
    <div>
    <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Mampro
