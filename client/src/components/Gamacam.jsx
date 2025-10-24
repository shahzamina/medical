import React from 'react'
import Allparts from './Allparts'

const Gamacam = () => {
   const Angiog=[
      {h:'552000448 - SCHLEIFRING - Gamma Camera - Slip Ring Board',h1:'Part Number : ',p1:'552000448 ',
         h2:'Manufacturer :',p2:'SCHLEIFRING' , h3:'Modality :',p3:'Gamma Camera ',h4:'Product :' , p4:'Slip Ring Board',
         btn:'Request Pricing Quote',img:'/images/gama1.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Gamacam
