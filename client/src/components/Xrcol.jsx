
import React from 'react'
import Allmod from './Allmod'

const Xrcol= () => {
   const Angiog=[
      {h:'01E4 12627 - SIEMENS - X-Ray - Collimator Board - 8628153',h1:'Part Number : ',p1:'01E4 12627',
         h2:'Manufacturer :',p2:'SIEMENS' , h3:'Modality :',p3:' X-Ray',h4:'Product :' , p4:'Collimator Board',
         h5:'Modal' , p5:'8628153',
         btn:'Request Pricing Quote',img:'/images/xrycol1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrcol
