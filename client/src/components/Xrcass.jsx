import React from 'react'
import Allparts from './Allparts'

const Xrcass= () => {
   const Angiog=[
      {h:'8.5170.5990.0 - AGFA Healthcare - X-Ray - Cassette Handling Board 2',h1:'Part Number : ',p1:'8.5170.5990.0 ',
         h2:'Manufacturer :',p2:'AGFA Healthcare' , h3:'Modality :',p3:'X-Ray ',h4:'Product :' , p4:'Cassette Handling Board 2',
         btn:'Request Pricing Quote',img:'/images/xrycas2.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrcass
