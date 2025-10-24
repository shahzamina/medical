
import React from 'react'
import Allmod from './Allmod'

const Xrint= () => {
   const Angiog=[
      {h:'G41503 - SEDECAL - X-Ray - Interface Control Board - A3009-11/L',h1:'Part Number : ',p1:'G41503',
         h2:'Manufacturer :',p2:'SEDECAL' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:' Interface Control Board ',
         h5:'Modal' , p5:'A3009-11/L',
         btn:'Request Pricing Quote',img:'/images/xryintf1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrint
