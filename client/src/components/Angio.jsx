import React from 'react'
import Allparts from './Allparts'

const Angio = () => {
   const Angiog=[
      {h:'5329772 Rev 1 - GE Healthcare - 5456518 - Rotation V3 Board',h1:'Part Number : ',p1:'5329772 Rev 1',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Angiography',h4:'Product :' , p4:'Rotation V3 Board',
         btn:'Request Pricing Quote',img:'/images/angio21.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Angio
