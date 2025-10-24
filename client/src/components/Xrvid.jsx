
import React from 'react'
import Allmod from './Allmod'

const Xrvid= () => {
   const Angiog=[
      {h:'46-321427P1 - GE Healthcare - X-Ray - Video Processor Board - 46-321426G2-A',h1:'Part Number : ',p1:'46-321427P1 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray  ',h4:'Product :' , p4:' Video Processor Board',
         h5:'Modal' , p5:' 46-321426G2-A',
         btn:'Request Pricing Quote',img:'/images/xryvidpro.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrvid