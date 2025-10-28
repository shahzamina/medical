
import React from 'react'
import Allmod from './Allmod'

const Xrvic= () => {
   const Angiog=[
      {h:'232687G - GE Healthcare - Digital X-Ray - VIC Power Supply Board - 46-232686G3-B',h1:'Part Number : ',p1:'232687G ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Digital X-Ray ',h4:'Product :' , p4:'VIC Power Supply Board',
         h5:'Modal' , p5:'46-232686G3-B',
         btn:'Request Pricing Quote',img:'/images/xryvic.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrvic