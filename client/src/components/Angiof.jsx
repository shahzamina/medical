import React from 'react'
import Allparts from './Allparts'

const Angiof = () => {
   const Angiog=[
      {h:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board',h1:'Part Number : ',p1:'2337735-2-6',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Angiography',h4:'Product :' , p4:'FCIB V2 Board',
         btn:'Request Pricing Quote',img:'/images/angio2.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Angiof
