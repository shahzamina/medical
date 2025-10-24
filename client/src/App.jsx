import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";
import {Routes, Route,Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import viteLogo from '/vite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './components/Home';
import Card from './components/card';

import { FaInstagram } from "react-icons/fa";
import Footer from './components/Footer';
import Parts from './components/Parts';
import Angio from './components/Angio';
import Angiof from './components/Angiof';
import Crlas from './components/Crlas';
import Crlasb from './components/Crlasb';
import Crpow from './components/Crpow';

import Navbar from './components/Navbar';
import Allparts from './components/Allparts';
import Crtouch from './components/Crtouch';
import { CctvIcon, Contact } from 'lucide-react';
import Ctcon from './components/Ctcon';
import Ctfru from './components/Ctfru';
import Ctsg from './components/Ctsg';
import Ctrt from './components/Ctrt';
import Ctss from './components/Ctss';
import Ctvct from './components/Ctvct';
import Ctsrg from './components/Ctsrg';
import Fluoro from './components/Fluoro';
import Gamacam from './components/Gamacam';
import Mamocp from './components/Mamocp';
import Mamods from './components/Mamods';
import Mamopro from './components/Mamopro';
import Mamog from './components/Mamog';
import Mamogen from './components/Mamogen';

import Mamtil from './components/mamtil';
import Mripcb from './components/Mripcb';
import Mri from './components/Mri';
import Ultra from './components/Ultra';
import Xrang from './components/Xrang';
import Xratp from './components/Xratp';
import Xrcam from './components/Xrcam';
import Xrcar from './components/Xrcar';
import Xrcas from './components/Xrcas';
import Xrcass from './components/Xrcass';
import Xrcol from './components/Xrcol';
import Xrcoll from './components/Xrcoll';
import Xrcolcon from './components/Xrcolcon';
import Xrcon from './components/Xrcon';
import Xrfib from './components/Xrfib';
import Xrcomm from './components/Xrcomm';
import Xrgene from './components/Xrgene';
import Xrcpu from './components/Xrcpu';
import Xrhal from './components/Xrhal';
import Xrhig from './components/Xrhig';
import Xrimg from './components/Xrimg';
import Xrkv from './components/Xrkv';
import Xrlow from './components/Xrlow';
import Xrpos from './components/Xrpos';
import Xrpro from './components/Xrpro';
import Xrpwr from './components/Xrpwr';
import Xrqua from './components/Xrqua';
import Xrrot from './components/Xrrot';
import Xrspy from './components/Xrspy';
import Xrsyn from './components/Xrsyn';
import Xrver from './components/xrver';
import Xrvic from './components/Xrvic';
import Xrvid from './components/Xrvid';
import Xrsig from './components/Xrsig';
import Xrxpc from './components/Xrxpc';
import Xrxri from './components/Xrxri';
import Xrxt from './components/Xrxt';
import Xrct from './components/Xrct';
import Xrctpp from './components/Xrctpp';
import Xrimgpro from './components/Xrimgpro';
import Xrinv from './components/Xrinv';
import Xrint from './components/Xrint';
import Xrygen from './components/Xrygen';
import Ctgt from './components/Ctgt';
import Allpro from './components/Allpro';
import Angpro from './components/Angpro';
import Crpro from './components/Crpro';
import Ctpro from './components/Ctpro';
import Fluopro from './components/Fluopro';
import Gampro from './components/Gampro';
import Mampro from './components/Mampro';
import Mripro from './components/Mripro';
import Ultrapro from './components/Ultrapro';
import Xraypro from './components/Xraypro';
import Xctpro from './components/Xctpro';
import Equip from './components/Equip';

import Services from './components/Services';
import About from './components/About';
function App() {

  return (
  
    <>
 
    

   



<Routes>
  <Route path='/' element={<Home />}  />
   <Route path='card' element={<Card />}  />
  
   <Route path='footer' element={<Footer />}  />
    <Route path='parts' element={<Parts />}  />
     <Route path='allparts' element={<Allparts />}  />
 <Route path='allpro' element={<Allpro />}  />

     <Route path='angio' element={<Angio />}  />
       <Route path='angiof' element={<Angiof />}  />
<Route path='crlas' element={<Crlas/>}  />
<Route path='crlasb' element={<Crlasb />}  />
<Route path='crpow' element={<Crpow />}  />
<Route path='crtouch' element={<Crtouch />}  />

<Route path='ctcon' element={<Ctcon />}  />
<Route path='ctfru' element={<Ctfru />}  />
<Route path='ctsg' element={<Ctsg />}  />
<Route path='ct' element={<Ctgt />}  />
<Route path='ctsrg' element={<Ctsrg />}  />
<Route path='ctrt' element={<Ctrt />}  />
<Route path='ctss' element={<Ctss />}  />
<Route path='ctvct' element={<Ctvct />}  />


<Route path='fluoro' element={<Fluoro />}  />
<Route path='gamacam' element={<Gamacam />}  />
<Route path='mamocpu' element={<Mamocp />}  />
<Route path='mamods' element={<Mamods />}  />
<Route path='mamog' element={<Mamog />}  />
<Route path='mamogen' element={<Mamogen />}  />
<Route path='mamopro' element={<Mamopro />}  />
<Route path='mamtil' element={<Mamtil />}  />

<Route path='mripcb' element={<Mripcb />}  />
<Route path='mri' element={<Mri />}  />
<Route path='ultra' element={<Ultra />}  />

<Route path='xrang' element={<Xrang />}  />
<Route path='xratp' element={<Xratp />}  />
<Route path='xrcam' element={<Xrcam />}  />
<Route path='xrcar' element={<Xrcar />}  />
<Route path='xrcas' element={<Xrcas />}  />
<Route path='xrcass' element={<Xrcass />}  />
<Route path='xrcol' element={<Xrcol />}  />
<Route path='xrcoll' element={<Xrcoll />}  />
<Route path='xrcolcon' element={<Xrcolcon />}  />
<Route path='xrcon' element={<Xrcon />}  />
<Route path='xrcomm' element={<Xrcomm />}  />
<Route path='xrfib' element={<Xrfib />}  />

<Route path='xrcpu' element={<Xrcpu />}  />
<Route path='xrgene' element={<Xrgene />}  />
<Route path='xrygen' element={<Xrygen />}  />
<Route path='xrcpu' element={<Xrcpu />}  />
<Route path='xrhal' element={<Xrhal/>}  />
<Route path='xrhig' element={<Xrhig />}  />
<Route path='xrimg' element={<Xrimg />}  />
<Route path='xrimgpro' element={<Xrimgpro />}  />
<Route path='xrint' element={<Xrint />}  />
<Route path='xrinv' element={<Xrinv />}  />
<Route path='xrkv' element={<Xrkv />}  />
<Route path='xrlow' element={<Xrlow />}  />
<Route path='xrpos' element={<Xrpos />}  />
<Route path='xrpro' element={<Xrpro />}  />
<Route path='xrpwr' element={<Xrpwr />}  />
<Route path='xrqua' element={<Xrqua />}  />
<Route path='xrrot' element={<Xrrot />}  />
<Route path='xrspy' element={<Xrspy />}  />
<Route path='xrimg' element={<Xrimg />}  />
<Route path='xrsyn' element={<Xrsyn />}  />
<Route path='xrver' element={<Xrver />}  />
<Route path='xrvic' element={<Xrvic />}  />
<Route path='xrvid' element={<Xrvid />}  />
<Route path='xrsig' element={<Xrsig />}  />
<Route path='xrxpc' element={<Xrxpc />}  />
<Route path='xrxri' element={<Xrxri />}  />
<Route path='xrxt' element={<Xrxt />}  />
<Route path='xrct' element={<Xrct />}  />
<Route path='xrctpp' element={<Xrctpp />}  />
<Route path='angpro' element={<Angpro />}  />
<Route path='crpro' element={<Crpro />}  />
<Route path='ctpro' element={<Ctpro />}  />
<Route path='fluopro' element={<Fluopro />}  />
<Route path='gampro' element={<Gampro />}  />
<Route path='mampro' element={<Mampro />}  />
<Route path='mripro' element={<Mripro />}  />
<Route path='ultrapro' element={<Ultrapro />}  />
<Route path='xrypro' element={<Xraypro />}  />
<Route path='xctpro' element={<Xctpro />}  />
<Route path='equip' element={<Equip />}  />
<Route path='contact' element={<Contact />}  />
<Route path='ser' element={<Services />}  />
<Route path='about' element={<About />}  />
</Routes>
  <Navbar  />
<Footer  />





    </>
   


   
  )
}

export default App
