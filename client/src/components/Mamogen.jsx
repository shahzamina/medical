
import React from 'react'
import Allmod from './Allmod'

const Mamogen= () => {
   const Angiog=[
      {h:'2198370-2 A - GE Healthcare - Mammography - Generator Interface Board - 400 PL2',h1:'Part Number : ',p1:'2198370-2 A ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography ',h4:'Product :' , p4:'Generator Interface Board',
         h5:'Modal' , p5:'400 PL2',
         btn:'Request Pricing Quote',img:'/images/mamo41.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Mamogen
