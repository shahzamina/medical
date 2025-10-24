
import React from 'react'
import Allmod from './Allmod'

const Mri= () => {
   const Angiog=[
      {h:'6250034 - GE Healthcare - MRI - IXG Board - 6250035 REV 2',h1:'Part Number : ',p1:'6250034 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'MRI ',h4:'Product :' , p4:'IXG Board - 6250035 REV 2',
         h5:'Modal' , p5:'400 PL2',
         btn:'Request Pricing Quote',img:'/images/mri1.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Mri
