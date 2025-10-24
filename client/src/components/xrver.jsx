
import React from 'react'
import Allmod from './Allmod'

const Xrver= () => {
   const Angiog=[
      {h:'264639C - GE Healthcare - X-Ray - Vertical Scan Board - 46-264638G3-B',h1:'Part Number : ',p1:'264639C',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray  ',h4:'Product :' , p4:' Vertical Scan Board',
         h5:'Modal' , p5:'46-264638G3-B',
         btn:'Request Pricing Quote',img:'/images/xryversc.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrver