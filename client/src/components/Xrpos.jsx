
import React from 'react'
import Allmod from './Allmod'

const Xrpos= () => {
   const Angiog=[
      {h:'232731C - GE Healthcare - X-Ray - Positioner Interface Board - 46-232730G1-F',h1:'Part Number : ',p1:'232731C',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray ',h4:'Product :' , p4:' Positioner Interface Board ',
         h5:'Modal' , p5:'46-232730G1-F',
         btn:'Request Pricing Quote',img:'/images/xryposit1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrpos
