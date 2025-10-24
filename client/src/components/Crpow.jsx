import React from 'react'
import Allparts from './Allparts'

const Crpow = () => {
   const Angiog=[
      {h:'8.5170.4120.4 - AGFA Healthcare - CR - Power Distribution Board',h1:'Part Number : ',p1:'8.5170.4120.4 ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'CR',h4:'Product :' , p4:'Power Distribution Board',
         btn:'Request Pricing Quote',img:'/images/cr3.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Crpow
