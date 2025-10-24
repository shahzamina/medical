import React from 'react'
import Allparts from './Allparts'

const Mamog = () => {
   const Angiog=[
      {h:'2107747-2 - GE Healthcare - Mammography - Generator Command Board',h1:'Part Number : ',p1:'2107747-2',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography',h4:'Product :' , p4:'Generator Command Board',
         btn:'Request Pricing Quote',img:'/images/mamo31.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Mamog
