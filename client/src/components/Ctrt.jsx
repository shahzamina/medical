import React from 'react'
import Allparts from './Allparts'

const Ctrt = () => {
   const Angiog=[
      {h:'PX74-09747-1 - Toshiba - CT Scan - RTM Assembly Board',h1:'Part Number : ',p1:'PX74-09747-1',
         h2:'Manufacturer :',p2:'Toshiba' , h3:'Modality :',p3:' CT Scan',h4:'Product :' , p4:'RTM Assembly Board',
         btn:'Request Pricing Quote',img:'/images/ctrtm.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Ctrt
