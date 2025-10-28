import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Ctpro = () => {
const h1='High-Performance CT Scan Systems for Accurate Diagnostic Imaging'
const p1='Deliver precise and detailed diagnostic results with our advanced CT scan systems and replacement parts. Designed for reliability, speed, and clarity, our CT solutions help healthcare providers capture high-resolution images with reduced downtime.'
const img='/images/ctscan.jpg'
  const h2='Equipment /'
  const p=' CT Scan'
      const part = [
     
        
         
          { img:'/images/cts1.jpg', p:'PX74-08866E - TOSHIBA AQUILION - CT Scan - Console Board  - MHR2-FC', link:'/ctcon'},
          { img:'/images/ct2.jpg', p:'5262747-004 - GE Healthcare - CT Scan - FRU GITANE Programmed Board V8 ', link:'/ctfru'},
          { img:'/images/ct33.jpg', p:'PX79-32018 - TOSHIBA AQUILION - CT Scan - GTSA PCB Board - YWM1604', link:'/ctsg'},
           { img:'/images/ct31.jpg', p:'PX79-32018 - TOSHIBA AQUILION - CT Scan - GTSA PCB Board - YWM1604', link:'/ctgt'},
          {img:'/images/ct4.jpg', p:'83SF28RF164MB-6811 - Infortrend Technology - CT Scan - RDD FRU Board  - ES S12F-G2840', link:'/ctsrg'},
          {img:'/images/ctrtm.jpg', p:'PX74-09747-1 - Toshiba - CT Scan - RTM Assembly Board ', link:'/ctrt'},
          {img:'/images/ct62.jpg', p:'PX74-08902C - TOSHIBA AQUILION - CT Scan - SS/ADIS PWB BOARD - YWM1663-A', link:'/ctss'},
            {img:'/images/ct61.jpg', p:'PX74-08902C - TOSHIBA AQUILION - CT Scan - SS/ADIS PWB BOARD - YWM1663-A', link:'/ctss'},
          {img:'/images/ct72.jpg', p:'5175034 - GE Healthcare - CT Scan - VCT Collimator Control Board - 5175035 REV 3', link:'/ctvct'},
          {img:'/images/ct71.jpg', p:'5175034 - GE Healthcare - CT Scan - VCT Collimator Control Board - 5175035 REV 3', link:'/ctvct'},
              {img:'/images/xrct2.jpg', p:'5407237-6 - GE Healthcare - CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
                {img:'/images/xrctpp1.jpg', p:'5407237-6 - GE Healthcare - CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
          {img:'/images/xrct4.jpg', p:'5407237-6 - GE Healthcare - CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'},
{img:'/images/xrct3.jpg', p:'5407237-6 - GE Healthcare - CT Scan - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'},
         
        ];
  return (
    <div>
        <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} part={part} />
    </div>
  )
}

export default Ctpro
