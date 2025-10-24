import React from 'react'
import Allmod from './Allmod'

const Ctsrg = () => {
   const Angiog=[
      {h:'83SF28RF164MB-6811 - Infortrend Technology - CT Scan - RDD FRU Board - ES S12F-G2840',h1:'Part Number : ',p1:'83SF28RF164MB-6811',
         h2:'Manufacturer :',p2:'Infortrend Technology ' , h3:'Modality :',p3:'CT Scan',h4:'Product :' , p4:'RDD FRU Board',
         h5:'Modal :' , p5:'ES S12F-G2840',
         btn:'Request Pricing Quote',img:'/images/ct4.jpg'
      }
    ]

  return (
    <div>

      < Allmod part={Angiog} />
    </div>
  )
}

export default Ctsrg
