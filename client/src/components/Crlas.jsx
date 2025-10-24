import React from 'react'
import Allparts from './Allparts'

const Crlas = () => {
   const Angiog=[
      {h:'A800426.1 - AGFA Healthcare - CR - Laser Board 1',h1:'Part Number : ',p1:'A800426.1 ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'CR',h4:'Product :' , p4:'Laser Board 1',
         btn:'Request Pricing Quote',img:'/images/cr1.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Crlas
