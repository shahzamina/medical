import React from 'react'
import Allparts from './Allparts'

const Xrinv= () => {
   const Angiog=[
      {h:'2179057-4 - GE Healthcare - Digital X-Ray - Inverter SCPU Board',h1:'Part Number : ',p1:'2179057-4 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Digital X-Ray ',h4:'Product :' , p4:'Inverter SCPU Board',
         btn:'Request Pricing Quote',img:'/images/xryinv2.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrinv
