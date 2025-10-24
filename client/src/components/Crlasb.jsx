import React from 'react'
import Allparts from './Allparts'

const Crlasb = () => {
   const Angiog=[
      {h:'F8.5170.3500.X - AGFA Healthcare - CR -Laser Board 2',h1:'Part Number : ',p1:'F8.5170.3500.X ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'CR',h4:'Product :' , p4:'Laser Board 2',
         btn:'Request Pricing Quote',img:'/images/cr2.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Crlasb
