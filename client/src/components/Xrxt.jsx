
import React from 'react'
import Allmod from './Allmod'

const Xrxt= () => {
   const Angiog=[
      {h:'2146643 - GE Healthcare - X-Ray - XT Control Board - 2146642 B',h1:'Part Number : ',p1:'2146643',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:'XT Control Board ',
         h5:'Modal' , p5:'2146642 B',
         btn:'Request Pricing Quote',img:'/images/xryxtcon1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrxt