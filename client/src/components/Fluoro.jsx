import React from 'react'
import Allmod from './Allmod'

const Fluoro = () => {
   const Angiog=[
      {h:'0 925 - GE Healthcare - Fluoroscopy - R & F Backplane Board - 46-264064G3-A',h1:'Part Number : ',p1:'0 925',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Fluoroscopy',h4:'Product :' , p4:'R & F Backplane Board',
         h5:'Modal :' , p5:'46-264064G3-A',
         btn:'Request Pricing Quote',img:'/images/fluro1.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Fluoro
