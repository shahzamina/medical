import React from 'react'
import Allparts from './Allparts'

const Mamocp = () => {
   const Angiog=[
      {h:'2385602-11 - GE Healthcare - Mammography - CPU Gene Nephtys Sirius Board',h1:'Part Number : ',p1:'2385602-11 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography ',h4:'Product :' , p4:' CPU Gene Nephtys Sirius Board',
         btn:'Request Pricing Quote',img:'/images/mamo11.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Mamocp
