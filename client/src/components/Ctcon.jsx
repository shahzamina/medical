import React from 'react'
import Allmod from './Allmod'

const Ctcon = () => {
   const Angiog=[
      {h:'PX74-08866E - TOSHIBA AQUILION - CT Scan - Console Board - MHR2-FC',h1:'Part Number : ',p1:'PX74-08866E ',
         h2:'Manufacturer :',p2:'TOSHIBA AQUILION' , h3:'Modality :',p3:'CT Scan',h4:'Product :' , p4:'Console Board',
         h5:'Modal :' , p5:'MHR2-FC',
         btn:'Request Pricing Quote',img:'/images/cts1.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Ctcon
