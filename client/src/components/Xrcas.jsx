import React from 'react'
import Allparts from './Allparts'

const Xrcas = () => {
   const Angiog=[
      {h:'8.5170.5990.0 - AGFA Healthcare - Digital X-Ray - Cassette Handling Board 1',h1:'Part Number : ',p1:'8.5170.5990.0 ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'Digital X-Ray',h4:'Product :' , p4:' Cassette Handling Board 1',
         btn:'Request Pricing Quote',img:'/images/xrycas1.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrcas
