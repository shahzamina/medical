import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Angpro = () => {
  const h1='Angiography System'
  const p1='We provide comprehensive parts coverage for multiple manufacturers of Angiography system'
  
  const img='/images/angio.jpeg'
    const h2='Equipment /'
  const p=' Angiography'
      const part = [
          { img:'/images/angio21.jpg', p:'5329772 Rev 1 - GE Healthcare - Angiography - Rotation V3 Board ',link:'/angio'},
          { img:'/images/angio2.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},
         { img:'/images/angio1.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},
        ];
  return (
    <div>
      <Othparts h1={h1} p1={p1} h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Angpro
