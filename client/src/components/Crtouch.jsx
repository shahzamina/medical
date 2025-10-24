import React from 'react'
import Allparts from './Allparts'

const Crtouch = () => {
   const Angiog=[
      {h:'8517014800 - AGFA Healthcare - CR - Touch Display Board',h1:'Part Number : ',p1:'8517014800 ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'CR',h4:'Product :' , p4:'Touch Display Board',
         btn:'Request Pricing Quote',img:'/images/cr4.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Crtouch
