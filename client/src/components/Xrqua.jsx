import React from 'react'
import Allparts from './Allparts'

const Xrqua= () => {
   const Angiog=[
      {h:'2307324 - GE Healthcare - X-Ray - Quad Snubber V2 Board',h1:'Part Number : ',p1:'2307324 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:' Quad Snubber V2 Board',
         btn:'Request Pricing Quote',img:'/images/xryqua2.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog}/>
    </div>
  )
}

export default Xrqua
