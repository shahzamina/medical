import React from 'react'
import Allparts from './Allparts'

const Xrkv= () => {
   const Angiog=[
      {h:'2214606-25 - GE Healthcare - X-Ray- KV Control V2C Board',h1:'Part Number : ',p1:'2214606-25 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray',h4:'Product :' , p4:'KV Control V2C Board',
         btn:'Request Pricing Quote',img:'/images/xrykvc.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog} />
    </div>
  )
}

export default Xrkv
