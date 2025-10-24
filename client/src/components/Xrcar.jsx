import React from 'react'
import Allparts from './Allparts'

const Xrcar = () => {
   const Angiog=[
      {h:'2156215 - GE Healthcare - X-Ray - CARTE CPU V5 Board',h1:'Part Number : ',p1:'2156215 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray',h4:'Product :' , p4:'CARTE CPU V5 Board',
         btn:'Request Pricing Quote',img:'/images/xry51.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrcar
