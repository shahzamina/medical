import React from 'react'
import Allparts from './Allparts'

const Xrhal= () => {
   const Angiog=[
      {h:'2407245 - GE Healthcare - X-Ray - Halo Relay Board',h1:'Part Number : ',p1:'2407245 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray',h4:'Product :' , p4:'Halo Relay Board',
         btn:'Request Pricing Quote',img:'/images/xryhal1.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrhal
