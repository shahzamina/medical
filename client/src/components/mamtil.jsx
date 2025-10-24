import React from 'react'
import Allparts from './Allparts'

const Mamtil = () => {
   const Angiog=[
      {h:'2375399-5-001 - GE Healthcare - Mammography - TILT/Compression Board',h1:'Part Number : ',p1:'2375399-5-001',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography',h4:'Product :' , p4:'TILT/Compression Board',
         btn:'Request Pricing Quote',img:'/images/mamo7.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Mamtil
