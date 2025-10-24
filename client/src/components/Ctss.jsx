import React from 'react'
import Allmod from './Allmod'

const Ctss = () => {
   const Angiog=[
      {h:'PX74-08902C - TOSHIBA AQUILION - CT Scan - SS/ADIS PWB BOARD - YWM1663-A',h1:'Part Number : ',p1:'PX74-08902C',
         h2:'Manufacturer :',p2:'TOSHIBA AQUILION ' , h3:'Modality :',p3:'CT Scan',h4:'Product :' , p4:' SS/ADIS PWB BOARD',
         h5:'Modal :' , p5:'YWM1663-A',
         btn:'Request Pricing Quote',img:'/images/ct62.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Ctss
