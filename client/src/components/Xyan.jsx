
import React from 'react'
import Allmod from './Allmod'

const Xran = () => {
   const Angiog=[
      {h:'226835E - GE Healthcare - Digital X-Ray - Angulation & Interface X Board - 46-226834',h1:'Part Number : ',p1:' 226835E',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' Digital X-Ray  ',h4:'Product :' , p4:'Angulation & Interface X Board',
         h5:'Modal' , p5:'46-226834',
         btn:'Request Pricing Quote',img:'/images/angio21.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xran
