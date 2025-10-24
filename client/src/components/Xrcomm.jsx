
import React from 'react'
import Allmod from './Allmod'

const Xrcomm= () => {
   const Angiog=[
      {h:'2167228 - GE Healthcare - X-Ray - Commad 2 Board - 2154879 A',h1:'Part Number : ',p1:'2167228 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:'Commad 2 Board ',
         h5:'Modal' , p5:'2154879 A',
         btn:'Request Pricing Quote',img:'/images/xrycom1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrcomm
