
import React from 'react'
import Allmod from './Allmod'

const Xrpro= () => {
   const Angiog=[
      {h:'2373567-11-001 - GE Healthcare - X-Ray - Programmed Lift Node Board - PL 104',h1:'Part Number : ',p1:'2373567-11-001',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:'Programmed Lift Node Board',
         h5:'Modal' , p5:'PL 104',
         btn:'Request Pricing Quote',img:'/images/xryprog1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrpro