
import React from 'react'
import Allmod from './Allmod'

const Xrcolcon= () => {
   const Angiog=[
      {h:'2883220 - GE Healthcare - X-Ray - Collimator Control/Servo Board 1 - 46-288322G1-D',h1:'Part Number : ',p1:'2883220 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:' X-Ray  ',h4:'Product :' , p4:'Collimator Control/Servo Board 1',
         h5:'Modal' , p5:'46-288322G1-D',
         btn:'Request Pricing Quote',img:'/images/xrycol31.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Xrcolcon
