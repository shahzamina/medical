import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Xctpro = () => {
  const h1='Advanced Digital X-Ray & CT Scan Solutions for Precision Diagnostics'
  const p1='Our Digital X-Ray and CT Scan systems are designed to deliver exceptional image clarity and diagnostic accuracy. Whether it’s detailed cross-sectional imaging or traditional radiography, our components from KV control boards to high-speed detector modules ensure reliable performance and reduced downtime.'
  const img='/images/home2.jpeg'
  const h2='Equipment /'
  const p=' Xry & CT Scan'
      const part = [
        
          {img:'/images/xrct2.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray & CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
          {img:'/images/xrct4.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray & CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'}
        ];
  return (
    <div>
       <Parts h1={h1} p1={p1}  img={img} part={part} h2={h2} p={p} />
    </div>
  )
}

export default Xctpro
