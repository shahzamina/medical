import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

const Xraypro = () => {
  const h1='Reliable X-Ray Systems for Precise Diagnostic Imaging'
  const p1='Enhance your imaging workflow with dependable X-Ray systems and parts built for accuracy, speed, and durability. Our X-Ray solutions provide sharp, detailed images that support confident diagnoses across a wide range of clinical settings.'
  const img='/images/xray.jpg'
    const h2='Equipment /'
  const p=' X-RAY'
      const part = [
         
        
           {img:'/images/aug.jpg', p:'226835E - GE Healthcare - X-Ray - Angulation & Interface X Board - 46-226834', link:'/xrang'},
          {img:'/images/xry2.jpg', p:'G32631 - SEDECAL - X-Ray - ATP Console Board - A3024-21-0', link:'/xratp'},
          {img:'/images/xry3.jpg', p:'288423B - GE Healthcare - X-Ray - Camera Interface Board - 46-288422G1-B', link:'/xrcam'},
          {img:'/images/xry51.jpg', p:'2156215 - GE Healthcare - X-Ray - CARTE CPU V5 Board', link:'/xrcar'},
          {img:'/images/xry52.jpg', p:'2156215 - GE Healthcare - X-Ray - CARTE CPU V5 Board', link:'/xrcar'},
          {img:'/images/xrycas1.jpg', p:'8.5170.5990.0 - AGFA Healthcare - X-Ray - Cassette Handling Board 1', link:'/xrcas'},
          {img:'/images/xrycas2.jpg', p:'8.5170.5990.0 - AGFA Healthcare - X-Ray - Cassette Handling Board 2', link:'/xrcass'},
          {img:'/images/xrycol1.jpg', p:'01E4 12627 - SIEMENS - X-Ray - Collimator Board  - 8628153', link:'/xrcol'},
           {img:'/images/xrycol2.jpg', p:'01E4 12627 - SIEMENS - X-Ray - Collimator Board  - 8628153', link:'/xrcol'},
          {img:'/images/xrycol22.jpg', p:'01E5261 13/59 - SIEMENS - X-Ray - Collimator Board - 8628120', link:'/xrcoll'},
          {img:'/images/xrycol21.jpg', p:'01E5261 13/59 - SIEMENS - X-Ray - Collimator Board - 8628120', link:'/xrcoll'},
          {img:'/images/xrycol31.jpg', p:'2883220 - GE Healthcare - X-Ray - Collimator Control/Servo Board 1 - 46-288322G1-D ', link:'/xrcolcon'},
          {img:'/images/xrycol41.jpg', p:'2883220 - GE Healthcare - X-Ray - Collimator Control/Servo Board 2- 46-288322G1-D  ', link:'/xrcon'},
          {img:'/images/xrycom1.jpg', p:'2167228 - GE Healthcare - X-Ray - Commad 2 Board - 2154879 A ', link:'/xrcomm'},
          {img:'/images/xrycom2.jpg', p:'2167228 - GE Healthcare - X-Ray - Commad 2 Board - 2154879 A ', link:'/xrcomm'},
          {img:'/images/xryfib.jpg', p:'2164594 - GE Healthcare - X-Ray -Fiber Board ', link:'/xrfib'},
        //gate
          {img:'/images/xrygat2.jpg', p:'2209547-4 - GE Healthcare - X-Ray - CPU Gene Nephtys Sirius Board', link:'/xrcpu'},
          {img:'/images/xrygen1.jpg', p:'46-321384-G4C - GE Healthcare - X-Ray - Generic CPU BIU Board - 46-321 385P1 REV 2', link:'/xrgene'},
          {img:'/images/xrygen2.jpg', p:'46-321384-G4C - GE Healthcare - X-Ray - Generic CPU BIU Board - 46-321 385P1 REV 2', link:'/xrygen'},
          {img:'/images/xryhal1.jpg', p:'2407245 - GE Healthcare - X-Ray - Halo Relay Board ', link:'/xrhal'},

          {img:'/images/xryhigv2.jpg', p:'11396.002.R1 - EMD Technologies - X-Ray - High Voltage Generator Inverter Board ', link:'/xrhig'},
          {img:'/images/xeyimg1.jpg', p:'264717C - GE Healthcare - X-Ray - Image Gate Control Board - 46-264716G1-A', link:'/xrimg'},
          {img:'/images/xryimgpro1.jpg', p:'SC 9912  - GE Healthcare - X-Ray - Image Processor Board', link:'/xrimgpro'},
          {img:'/images/xryintf1.jpg', p:'G41503 - SEDECAL - X-Ray - Interface Control Board - A3009-11/L', link:'/int'},
          {img:'/images/xryinv2.jpg', p:'2179057-4 - GE Healthcare - X-Ray - Inverter SCPU Board ', link:'/xrinv'},
          {img:'/images/xryinver1.jpg', p:'2179057-4 - GE Healthcare - X-Ray - Inverter SCPU Board ', link:'/xrinv'},
          {img:'/images/xrykvc.jpg', p:'2214606-25 - GE Healthcare - X-Ray- KV Control V2C Board ', link:'/xrkv'},
        
        
          {img:'/images/xrylvp1.jpg', p:'2212166-8 - GE Healthcare - X-Ray - Low Voltage Power Supply (LVPS) TRI Board', link:'/xrlow'},
          //pi filter board
          {img:'/images/xryposit1.jpg', p:'232731C - GE Healthcare - X-Ray - Positioner Interface Board - 46-232730G1-F', link:'/xrpos'},
          {img:'/images/xryprog1.jpg', p:'2373567-11-001 - GE Healthcare - X-Ray - Programmed Lift Node Board - PL 104', link:'/xrpro'},
          {img:'/images/xrypwr.jpg', p:'46-288142G1-D - GE Healthcare - X-Ray - PWR Assist & Lock Control Board', link:'/xrpwr'},
          {img:'/images/xryqua2.jpg', p:'2307324 - GE Healthcare - X-Ray - Quad Snubber V2 Board', link:'/xrqua'},
            {img:'/images/xryqua3.jpg', p:'2307324 - GE Healthcare - X-Ray - Quad Snubber V2 Board', link:'/xrqua'},
          {img:'/images/xryrot.jpg', p:'2179055 A - GE Healthcare - X-Ray - Rotor Controller SCPU Board', link:'/xrrot'},
          {img:'/images/xryspid1.jpg', p:'5350002-4 - GE Healthcare - X-Ray - Spyder System Controller (CPU Board) - XR-220', link:'/xrspy'},
          {img:'/images/xryspi2.jpg', p:'5350002-4 - GE Healthcare - X-Ray - Spyder System Controller (CPU Board) - XR-220', link:'/xrspy'},
          {img:'/images/xrysynt1.jpg', p:'264641F - GE Healthcare - X-Ray - Sync & Timing Board - 46-264640G2-A', link:'/xrsyn'},
          {img:'/images/xryversc.jpg', p:'264639C - GE Healthcare - X-Ray - Vertical Scan Board - 46-264638G3-B ', link:'xrver'},
          {img:'/images/xryvic.jpg', p:'232687G - GE Healthcare - X-Ray - VIC Power Supply Board - 46-232686G3-B', link:'/xrvic'},
          {img:'/images/xryvidpro.jpg', p:'46-321427P1 - GE Healthcare - X-Ray - Video Processor Board - 46-321426G2-A', link:'/xrvid'},
          {img:'/images/xryvidsig1.jpg', p:'10-44732-01 - ANALOGIC - X-Ray - Video Signal Board', link:'/xrsig'},
          {img:'/images/xryvidsig2.jpg', p:'10-44732-01 - ANALOGIC - X-Ray - Video Signal Board', link:'/xrsig'},
          {img:'/images/xryxpc1.jpg', p:'40645 - SEDECAL - X-Ray - XPC Interface Control Board - A8186-03', link:'/xrxpc'},
          {img:'/images/xryXrii1.jpg', p:'264469G - GE Healthcare - X-Ray - XRII/IRIS Control Board - 46-264468G4-B', link:'/xrxri'},
          {img:'/images/xryxtcon1.jpg', p:'2146643 - GE Healthcare - X-Ray - XT Control Board - 2146642 B', link:'/xrxt'},
              {img:'/images/xrct2.jpg', p:'5407237-6 - GE Healthcare - X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
                {img:'/images/xrctpp1.jpg', p:'5407237-6 - GE Healthcare - X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
          {img:'/images/xrct4.jpg', p:'5407237-6 - GE Healthcare - X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'},
    {img:'/images/xrct3.jpg', p:'5407237-6 - GE Healthcare - X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'}
        ];
  return (
    <div>
      <Parts h1={h1} p1={p1} h2={h2} p={p} img={img} part={part} />
    </div>
  )
}

export default Xraypro
