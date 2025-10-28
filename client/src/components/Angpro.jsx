import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Angpro = () => {
  const h1='Precision Angiography Solutions for Advanced Vascular Imaging'
  const p1='Experience the next level of vascular imaging with our state-of-the-art angiography systems. Designed for exceptional clarity and speed, our equipment supports accurate diagnostics and smoother workflows for interventional procedures.'
  
  const img='/images/angio.jpg'
    const h2='Equipment /'
  const p=' Angiography'
      const part = [
          { img:'/images/angio21.jpg', p:'5329772 Rev 1 - GE Healthcare - Angiography - Rotation V3 Board ',link:'/angio'},
          { img:'/images/angio2.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},
         { img:'/images/angio1.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},
        ];
  return (
    <div>
      <Parts h1={h1} p1={p1} h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Angpro
