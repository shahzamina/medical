import React from 'react'
import Allparts from './Allparts'

const Xrimgpro= () => {
   const Angiog=[
      {h:'SC 9912 - GE Healthcare - X-Ray - Image Processor Board',h1:'Part Number : ',p1:'SC 9912 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray ',h4:'Product :' , p4:'Image Processor Board',
         btn:'Request Pricing Quote',img:'/images/xryimgpro1.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrimgpro
