import React from 'react'
import Allparts from './Allparts'

const Xrfib= () => {
   const Angiog=[
      {h:'2164594 - GE Healthcare - Digital X-Ray - Fiber Board',h1:'Part Number : ',p1:' 2164594',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Digital X-Ray',h4:'Product :' , p4:'Fiber Board',
         btn:'Request Pricing Quote',img:'/images/xrfib.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrfib
