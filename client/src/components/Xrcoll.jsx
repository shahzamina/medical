
import React from 'react'
import Allmod from './Allmod'

const Xrcoll= () => {
   const Angiog=[
      {h:'01E5261 13/59 - SIEMENS - Digital X-Ray - Collimator Board - 8628120',h1:'Part Number : ',p1:'01E5261 13/59',
         h2:'Manufacturer :',p2:'SIEMENS' , h3:'Modality :',p3:'Digital X-Ray ',h4:'Product :' , p4:'Collimator Board ',
         h5:'Modal' , p5:'8628120',
         btn:'Request Pricing Quote',img:'/images/xrycol22.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrcoll
