
import React from 'react'
import Allmod from './Allmod'

const Xrsyn= () => {
   const Angiog=[
      {h:'264641F - GE Healthcare - X-Ray - Sync & Timing Board - 46-264640G2-A',h1:'Part Number : ',p1:'264641F ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray ',h4:'Product :' , p4:'Sync & Timing Board ',
         h5:'Modal' , p5:'46-264640G2-A',
         btn:'Request Pricing Quote',img:'/images/xrysynt1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrsyn