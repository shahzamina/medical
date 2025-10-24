import React from 'react'
import Allparts from './Allparts'

const Crfru = () => {
   const Angiog=[
      {h:'5262747-004 - GE Healthcare - CT Scan - FRU GITANE Programmed Board V8',h1:'Part Number : ',p1:'5262747-004 ',
         h2:'Manufacturer :',p2:'GE Healthcare' , h3:'Modality :',p3:'CT-Scan',h4:'Product :' , p4:'FRU GITANE Programmed Board V8',
         btn:'Request Pricing Quote',img:'/images/ct2.jpg'
      }
    ]

  return (
    <div>
      < Allparts part={Angiog} />
    </div>
  )
}

export default Crfru
