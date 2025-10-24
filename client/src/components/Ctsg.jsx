import React from 'react'
import Allmod from './Allmod'

const Ctsg = () => {
   const Angiog=[
      {h:'PX79-32018 - TOSHIBA AQUILION - CT Scan - GTSA PCB Board - YWM1604',h1:'Part Number : ',p1:'PX79-32018',
         h2:'Manufacturer :',p2:'TOSHIBA AQUILION' , h3:'Modality :',p3:'CT Scan',h4:'Product :' , p4:'GTSA PCB Board',
         h5:'Modal :' , p5:'YWM1604',
         btn:'Request Pricing Quote',img:'/images/ct33.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Ctsg
