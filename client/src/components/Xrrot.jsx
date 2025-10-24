import React from 'react'
import Allparts from './Allparts'

const Xrrot= () => {
   const Angiog=[
      {h:'2179055 A - GE Healthcare - X-Ray - Rotor Controller SCPU Board',h1:'Part Number : ',p1:'2179055 A ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray',h4:'Product :' , p4:'Rotor Controller SCPU Board',
         btn:'Request Pricing Quote',img:'/images/xryrot.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog}/>
    </div>
  )
}

export default Xrrot
