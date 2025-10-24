import React from 'react'
import Allparts from './Allparts'

const Xrcpu= () => {
   const Angiog=[
      {h:'2209547-4 - GE Healthcare - X-Ray - CPU Gene Nephtys Sirius Board',h1:'Part Number : ',p1:'2209547-4 ',
         h2:'Manufacturer :',p2:'GE ealthcare' , h3:'Modality :',p3:' X-Ray',h4:'Product :' , p4:'CPU Gene Nephtys Sirius Board',
         btn:'Request Pricing Quote',img:'/images/xrygat2.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrcpu
