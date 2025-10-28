
import React from 'react'
import Allmod from './Allmod'

const Xrcam = () => {
   const Angiog=[
      {h:'288423B - GE Healthcare - Digital X-Ray - Camera Interface Board - 46-288422G1-B',h1:'Part Number : ',p1:'288423B',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Digital X-Ray',h4:'Product :' , p4:'Camera Interface Board',
         h5:'Modal' , p5:' 46-288422G1-B',
         btn:'Request Pricing Quote',img:'/images/xry3.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrcam
