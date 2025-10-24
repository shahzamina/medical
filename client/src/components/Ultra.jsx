
import React from 'react'
import Allmod from './Allmod'

const Ultra= () => {
   const Angiog=[
      {h:'5761561 - GE Healthcare - Ultrasound - OSCO Charger Board - Logiq F8 Vivid',h1:'Part Number : ',p1:'5761561',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Ultrasound ',h4:'Product :' , p4:'OSCO Charger Board ',
         h5:'Modal' , p5:'Logiq F8 Vivid',
         btn:'Request Pricing Quote',img:'/images/ultras1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Ultra
