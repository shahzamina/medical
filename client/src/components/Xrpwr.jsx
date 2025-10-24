import React from 'react'
import Allparts from './Allparts'

const Xrpwr= () => {
   const Angiog=[
      {h:'46-288142G1-D - GE Healthcare - X-Ray - PWR Assist & Lock Control Board',h1:'Part Number : ',p1:'46-288142G1-D ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray',h4:'Product :' , p4:'PWR Assist & Lock Control Board',
         btn:'Request Pricing Quote',img:'/images/xrypwr.jpg'
      }
    ]

  return (
    <div>
      <Allparts part={Angiog}/>
    </div>
  )
}

export default Xrpwr
