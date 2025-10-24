
import React from 'react'
import Allmod from './Allmod'

const Xrctpp= () => {
   const Angiog=[
      {h:'5407237-6 - GE Healthcare - X-Ray & CT Scan - PPC KV Control V3 Board - 5308266 rev 1',h1:'Part Number : ',p1:'5407237-6',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray & CT Scan ',h4:'Product :' , p4:'PPC KV Control V3 Board',
         h5:'Modal' , p5:'5308266 rev 1',
         btn:'Request Pricing Quote',img:'/images/xrct4.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrctpp