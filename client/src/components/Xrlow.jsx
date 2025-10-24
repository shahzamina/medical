import React from 'react'
import Allparts from './Allparts'

const Xrlow= () => {
   const Angiog=[
      {h:'2212166-8 - GE Healthcare - X-Ray - Low Voltage Power Supply (LVPS) TRI Board',h1:'Part Number : ',p1:'2212166-8 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray',h4:'Product :' , p4:'Low Voltage Power Supply (LVPS) TRI Board',
         btn:'Request Pricing Quote',img:'/images/xrylvp1.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrlow
