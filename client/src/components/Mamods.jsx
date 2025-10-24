
import React from 'react'
import Allmod from './Allmod'

const Mamods = () => {
   const Angiog=[
      {h:'2375399-5-001 - GE Healthcare - Mammography - DS Positioner Boarda - 2336662-4',h1:'Part Number : ',p1:'2375399-5-001',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'Mammography ',h4:'Product :' , p4:'DS Positioner Boarda',
         h5:'Modal' , p5:'2336662-4',
         btn:'Request Pricing Quote',img:'/images/mamo21.jpg'
      }
    ]

  return (
    <div>
      <Allmod part={Angiog} />
    </div>
  )
}

export default Mamods
