
import React from 'react'
import Allmod from './Allmod'

const Xrygene= () => {
   const Angiog=[
      {h:'46-321384-G4C - GE Healthcare - X-Ray - Generic CPU BIU Board - 46-321 385P1 REV 2',h1:'Part Number : ',p1:'46-321384-G4C ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray  ',h4:'Product :' , p4:'Generic CPU BIU Board',
         h5:'Modal' , p5:'46-321 385P1 REV 2',
         btn:'Request Pricing Quote',img:'/images/xrygen1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrygene
