import React from 'react'
import Allparts from './Allparts'

const Mripcb = () => {
   const Angiog=[
      {h:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board',h1:'Part Number : ',p1:'85851328 ',
         h2:'Manufacturer :',p2:'HITACHI' , h3:'Modality :',p3:'MRI',h4:'Product :' , p4:'PCB SBS Fiber Optic Board',
         btn:'Request Pricing Quote',img:'/images/mri21.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Mripcb
