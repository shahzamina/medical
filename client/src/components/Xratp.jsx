
import React from 'react'
import Allmod from './Allmod'

const Xratp = () => {
   const Angiog=[
      {h:'G32631 - SEDECAL - Digital X-Ray - ATP Console Board - A3024-21-0',h1:'Part Number : ',p1:'G32631 ',
         h2:'Manufacturer :',p2:'SEDECAL' , h3:'Modality',p3:'Digital X-Ray  ',h4:'Product :' , p4:' ATP Console Board',
         h5:'Modal' , p5:'A3024-21-0',
         btn:'Request Pricing Quote',img:'/images/xry2.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xratp
