
import React from 'react'
import Allmod from './Allmod'

const Xrspy= () => {
   const Angiog=[
      {h:'5350002-4 - GE Healthcare - Digital X-Ray - Spyder System Controller (CPU Board) - XR-220',h1:'Part Number : ',p1:'5350002-4 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Digital X-Ray ',h4:'Product :' , p4:'Spyder System Controller (CPU Board)',
         h5:'Modal' , p5:'XR-220',
         btn:'Request Pricing Quote',img:'/images/xryspid1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrspy