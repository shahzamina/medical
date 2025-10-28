import React from 'react'
import Allparts from './Allparts'

const Xrsig= () => {
   const Angiog=[
      {h:'10-44732-01 - ANALOGIC - Digital X-Ray - Video Signal Board',h1:'Part Number : ',p1:'10-44732-01 ',
         h2:'Manufacturer :',p2:'ANALOGIC' , h3:'Modality :',p3:'Digital X-Ray ',h4:'Product :' , p4:'Video Signal Board',
         btn:'Request Pricing Quote',img:'/images/xryvidsig1.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog}/>
    </div>
  )
}

export default Xrsig
