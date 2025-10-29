import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Sign from './Sign';

const Allpro = () => {
 
  const h1='Medical Imaging Parts '
  const p1='High Quality Parts for any Medical Imaging System'
 
const img='/images/home1.jpeg'
const p='High-Quality Replacement Parts for Every Modality'
const partStyle = {
 marginLeft:'10px',
  color: 'black',              // text color: black
  fontSize: '2rem',      // roughly text-xl (20px)
  fontWeight: '700',          // medium weight for a clean look
  textAlign: 'left',          
};

      const part = [
          { img:'/images/angio21.jpg', p:'5329772 Rev 1 - GE Healthcare - Angiography - Rotation V3 Board ',link:'/angio'},
          { img:'/images/angio2.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},
         { img:'/images/angio1.jpg', p:'2337735-2-6 - GE Healthcare - Angiography- FCIB V2 Board', link:'/angiof'},

          { img:'/images/cr1.jpg', p:'A800426.1 - AGFA Healthcare - CR - Laser Board 1', link:'/crlas'},
          { img:'/images/cr2.jpg', p:'F8.5170.3500.X - AGFA Healthcare - CR -Laser Board 2', link:'/crlasb'},
          { img:'/images/cr3.jpg', p:'8.5170.4120.4 - AGFA Healthcare - CR - Power Distribution Board ', link:'/crpow'},
          { img:'/images/cr4.jpg', p:'8517014800 - AGFA Healthcare - CR -Touch Display Board ', link:'/crtouch'},
        
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

          {img:'/images/fluro1.jpg', p:'0 925 - GE Hewalthcare - Fluoroscopy - R & F Backplane Board - 46-264064G3-A', link:'/fluoro'},
        {img:'/images/fluro2.jpg', p:'0 925 - GE Hewalthcare - Fluoroscopy - R & F Backplane Board - 46-264064G3-A', link:'/fluoro'},

          {img:'/images/gama1.jpg', p:'552000448 - SCHLEIFRING - Gamma Camera - Slip Ring Board', link:'/gamacam'},
        {img:'/images/gama2.jpg', p:'552000448 - SCHLEIFRING - Gamma Camera - Slip Ring Board', link:'/gamacam'},

          {img:'/images/mamo11.jpg', p:'2385602-11 - GE Healthcare - Mammography  - CPU Gene Nephtys Sirius Board', link:'/mamocpu'},
          {img:'/images/mamo21.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - DS Positioner Boarda - 2336662-4', link:'/mamods'},
           {img:'/images/mamo22.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - DS Positioner Boarda - 2336662-4', link:'/mamods'},
          {img:'/images/mamo31.jpg', p:'2107747-2 - GE Healthcare - Mammography  - Generator Command Board ', link:'/mamog'},
          {img:'/images/mamo41.jpg', p:'2198370-2 A - GE Healthcare - Mammography - Generator Interface Board  - 400 PL2', link:'/mamogen'},
        {img:'/images/mamo42.jpg', p:'2198370-2 A - GE Healthcare - Mammography - Generator Interface Board  - 400 PL2', link:'/mamogen'},
          {img:'/images/mamo61.jpg', p:'5233827-8-004 - GE Healthcare - Mammography  - Programmed CPU Board', link:'mamopro'},
           {img:'/images/mamo62.jpg', p:'5233827-8-004 - GE Healthcare - Mammography  - Programmed CPU Board', link:'mamopro'},
          //{img:'/images/mamo61.jpg', p:'MR-RBC-91-HITSCHI-MRI-Rapid Body Coil', link:'#'},
          {img:'/images/mamo7.jpg', p:'2375399-5-001 - GE Healthcare - Mammography - TILT/Compression Board', link:'/mamtil'},
          
          {img:'/images/mri1.jpg', p:'6250034 - GE Healthcare - MRI - IXG Board  - 6250035 REV 2', link:'/mri'},
          {img:'/images/mri21.jpg', p:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board ', link:'/mripcb'},
{img:'/images/mri22.jpg', p:'85851328 - HITACHI - MRI - PCB SBS Fiber Optic Board ', link:'/mripcb'},

          {img:'/images/ultras1.jpg', p:'5761561 - GE Healthcare - Ultrasound - OSCO Charger Board - Logiq F8 Vivid', link:'/ultra'},
        
          {img:'/images/aug.jpg', p:'226835E - GE Healthcare - Digital X-Ray - Angulation & Interface X Board - 46-226834', link:'/xrang'},
          {img:'/images/xry2.jpg', p:'G32631 - SEDECAL - Digital X-Ray - ATP Console Board - A3024-21-0', link:'/xratp'},
          {img:'/images/xry3.jpg', p:'288423B - GE Healthcare - Digital X-Ray - Camera Interface Board - 46-288422G1-B', link:'/xrcam'},
          {img:'/images/xry51.jpg', p:'2156215 - GE Healthcare - Digital X-Ray - CARTE CPU V5 Board', link:'/xrcar'},
          {img:'/images/xry52.jpg', p:'2156215 - GE Healthcare - Digital X-Ray - CARTE CPU V5 Board', link:'/xrcar'},
          {img:'/images/xrycas1.jpg', p:'8.5170.5990.0 - AGFA Healthcare - Digital X-Ray - Cassette Handling Board 1', link:'/xrcas'},
          {img:'/images/xrycas2.jpg', p:'8.5170.5990.0 - AGFA Healthcare - Digital X-Ray - Cassette Handling Board 2', link:'/xrcass'},
          {img:'/images/xrycol1.jpg', p:'01E4 12627 - SIEMENS - Digital X-Ray - Collimator Board  - 8628153', link:'/xrcol'},
           {img:'/images/xrycol2.jpg', p:'01E4 12627 - SIEMENS - Digital X-Ray - Collimator Board  - 8628153', link:'/xrcol'},
          {img:'/images/xrycol22.jpg', p:'01E5261 13/59 - SIEMENS - Digital X-Ray - Collimator Board - 8628120', link:'/xrcoll'},
          {img:'/images/xrycol21.jpg', p:'01E5261 13/59 - SIEMENS - Digital X-Ray - Collimator Board - 8628120', link:'/xrcoll'},
          {img:'/images/xrycol31.jpg', p:'2883220 - GE Healthcare - Digital X-Ray - Collimator Control/Servo Board 1 - 46-288322G1-D ', link:'/xrcolcon'},
          {img:'/images/xrycol41.jpg', p:'2883220 - GE Healthcare - Digital X-Ray - Collimator Control/Servo Board 2- 46-288322G1-D  ', link:'/xrcon'},
          {img:'/images/xrycom1.jpg', p:'2167228 - GE Healthcare - Digital X-Ray - Commad 2 Board - 2154879 A ', link:'/xrcomm'},
          {img:'/images/xrycom2.jpg', p:'2167228 - GE Healthcare - Digital X-Ray - Commad 2 Board - 2154879 A ', link:'/xrcomm'},
          {img:'/images/xryfib.jpg', p:'2164594 - GE Healthcare - Digital X-Ray -Fiber Board ', link:'/xrfib'},
        //gate
          {img:'/images/xrygat2.jpg', p:'2209547-4 - GE Healthcare - Digital X-Ray - CPU Gene Nephtys Sirius Board', link:'/xrcpu'},
          {img:'/images/xrygen1.jpg', p:'46-321384-G4C - GE Healthcare - Digital X-Ray - Generic CPU BIU Board - 46-321 385P1 REV 2', link:'/xrgene'},
          {img:'/images/xrygen2.jpg', p:'46-321384-G4C - GE Healthcare - Digital X-Ray - Generic CPU BIU Board - 46-321 385P1 REV 2', link:'/xrygen'},
          {img:'/images/xryhal1.jpg', p:'2407245 - GE Healthcare - Digital X-Ray - Halo Relay Board ', link:'/xrhal'},

          {img:'/images/xryhigv2.jpg', p:'11396.002.R1 - EMD Technologies - Digital X-Ray - High Voltage Generator Inverter Board ', link:'/xrhig'},
          {img:'/images/xeyimg1.jpg', p:'264717C - GE Healthcare - Digital X-Ray - Image Gate Control Board - 46-264716G1-A', link:'/xrimg'},
          {img:'/images/xryimgpro1.jpg', p:'SC 9912  - GE Healthcare - Digital X-Ray - Image Processor Board', link:'/xrimgpro'},
          {img:'/images/xryintf1.jpg', p:'G41503 - SEDECAL - Digital X-Ray - Interface Control Board - A3009-11/L', link:'/int'},
          {img:'/images/xryinv2.jpg', p:'2179057-4 - GE Healthcare - Digital X-Ray - Inverter SCPU Board ', link:'/xrinv'},
          {img:'/images/xryinver1.jpg', p:'2179057-4 - GE Healthcare - Digital X-Ray - Inverter SCPU Board ', link:'/xrinv'},
          {img:'/images/xrykvc.jpg', p:'2214606-25 - GE Healthcare - Digital X-Ray- KV Control V2C Board ', link:'/xrkv'},
        
        
          {img:'/images/xrylvp1.jpg', p:'2212166-8 - GE Healthcare - Digital X-Ray - Low Voltage Power Supply (LVPS) TRI Board', link:'/xrlow'},
          //pi filter board
          {img:'/images/xryposit1.jpg', p:'232731C - GE Healthcare - Digital X-Ray - Positioner Interface Board - 46-232730G1-F', link:'/xrpos'},
          {img:'/images/xryprog1.jpg', p:'2373567-11-001 - GE Healthcare - Digital X-Ray - Programmed Lift Node Board - PL 104', link:'/xrpro'},
          {img:'/images/xrypwr.jpg', p:'46-288142G1-D - GE Healthcare - Digital X-Ray - PWR Assist & Lock Control Board', link:'/xrpwr'},
          {img:'/images/xryqua2.jpg', p:'2307324 - GE Healthcare - Digital X-Ray - Quad Snubber V2 Board', link:'/xrqua'},
            {img:'/images/xryqua3.jpg', p:'2307324 - GE Healthcare - Digital X-Ray - Quad Snubber V2 Board', link:'/xrqua'},
          {img:'/images/xryrot.jpg', p:'2179055 A - GE Healthcare - Digital X-Ray - Rotor Controller SCPU Board', link:'/xrrot'},
          {img:'/images/xryspid1.jpg', p:'5350002-4 - GE Healthcare - Digital X-Ray - Spyder System Controller (CPU Board) - XR-220', link:'/xrspy'},
          {img:'/images/xryspi2.jpg', p:'5350002-4 - GE Healthcare - Digital X-Ray - Spyder System Controller (CPU Board) - XR-220', link:'/xrspy'},
          {img:'/images/xrysynt1.jpg', p:'264641F - GE Healthcare - Digital X-Ray - Sync & Timing Board - 46-264640G2-A', link:'/xrsyn'},
          {img:'/images/xryversc.jpg', p:'264639C - GE Healthcare - Digital X-Ray - Vertical Scan Board - 46-264638G3-B ', link:'xrver'},
          {img:'/images/xryvic.jpg', p:'232687G - GE Healthcare - Digital X-Ray - VIC Power Supply Board - 46-232686G3-B', link:'/xrvic'},
          {img:'/images/xryvidpro.jpg', p:'46-321427P1 - GE Healthcare - Digital X-Ray - Video Processor Board - 46-321426G2-A', link:'/xrvid'},
          {img:'/images/xryvidsig1.jpg', p:'10-44732-01 - ANALOGIC - Digital X-Ray - Video Signal Board', link:'/xrsig'},
          {img:'/images/xryvidsig2.jpg', p:'10-44732-01 - ANALOGIC - Digital X-Ray - Video Signal Board', link:'/xrsig'},
          {img:'/images/xryxpc1.jpg', p:'40645 - SEDECAL - Digital X-Ray - XPC Interface Control Board - A8186-03', link:'/xrxpc'},
          {img:'/images/xryXrii1.jpg', p:'264469G - GE Healthcare - Digital X-Ray - XRII/IRIS Control Board - 46-264468G4-B', link:'/xrxri'},
          {img:'/images/xryxtcon1.jpg', p:'2146643 - GE Healthcare - Digital X-Ray - XT Control Board - 2146642 B', link:'/xrxt'},
              {img:'/images/xrct2.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
                {img:'/images/xrctpp1.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrct'},
          {img:'/images/xrct4.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'},
    {img:'/images/xrct3.jpg', p:'5407237-6 - GE Healthcare - Digital X-Ray - PPC KV Control V3 Board - 5308266 rev 1', link:'/xrctpp'}
        ];
console.log("Part being passed to Sign:", part);

  return (
    <div>
      <Parts h1={h1} p1={p1} img={img} p={p} part={part} style={partStyle} />
      
    </div>
  )
}

export default Allpro
