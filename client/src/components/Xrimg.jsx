import React from 'react'
import Allmod from './Allmod'

const Xrimg = () => {
   const Angiog=[
      {h:'264717C - GE Healthcare - X-Ray - Image Gate Control Board - 46-264716G1-A',h1:'Part Number : ',p1:'264717C',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'X-Ray',h4:'Product :' , p4:'Image Gate Control Board',
         h5:'Modal :' , p5:'46-264716G1-A',
         btn:'Request Pricing Quote',img:'/images/xeyimg1.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Xrimg
