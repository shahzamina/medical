import React from 'react'
import Allparts from './Allparts'

const Mamopro = () => {
   const Angiog=[
      {h:'5233827-8-004 - GE Healthcare - Mammography - Programmed CPU Board',h1:'Part Number : ',p1:'5233827-8-004',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography',h4:'Product :' , p4:'Programmed CPU Board',
         btn:'Request Pricing Quote',img:'/images/mamo51.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Mamopro
