import React from 'react'
import Showcase from './Showcase';

const Services = () => {
   const content = [
    {
      heading: "Multivendor Magnet Power Supply",
      paragraph: "As the first universal power supply compatible with leading MRI brands such as Siemens, Philips, GE, and Canon, it simplifies operations by combining multiple ramp tools into one versatile unit. ",
      img: "/images/ren1.png",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Coldhead Replacement Kit",
      paragraph: "The GE Coldhead Change Kit offers a comprehensive and easy-to-use solution for replacing coldheads on GE magnets. Designed with premium components and advanced functionality, it ensures a safe, seamless, and efficient replacement process. ",
      img: "/images/ren2.png",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Coldhead Maintenance Kit",
      paragraph: "The Philips Coldhead Service Kit provides a comprehensive and effective solution for maintaining IGC magnets. Equipped with advanced features and all essential tools, it enables smooth, dependable, and professional coldhead servicing. ",
      img: "/images/ren3.png",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "MRI-Compatible Tools",
      paragraph: "We provide customizable nonmagnetic service tool kits crafted from beryllium, copper, or titanium—engineered to deliver exceptional durability, performance, and safety within MRI environments. ",
      img: "/images/ren4.png",
      btn: "Request A Service Quote",
     
    },
     {
      heading: "Helium Filling Kits",
      paragraph: "The Helium Filling Kit is a specialized service tool designed to simplify helium refill operations while reducing potential risks and ensuring safe, efficient handling. ",
      img: "/images/ren5.png",
      btn: "Request A Service Quote",
     
    },
  ];
  return (
    <>
<div className='bg-gray-300 h-26'>

</div>
    <div className='mt-16'>
     <h1>Rental Services</h1>
<p className='pt-4 px-20 pb-4 text-xl text-left'>We provide flexible MRI rental services for smooth and reliable operations.</p>

<p className='px-20 pb-4 text-lg text-left'>We are proud to be equipped with a complete range of advanced tools and equipment, including Multivendor Magnet Power Supplies (GE, Siemens, Philips, Toshiba), Coldhead Replacement Kits, Helium Filling Kits, MRI-Compatible Tools, and RTI kV/mA Meters.</p>

<p className='text-left px-20'>These specialized instruments enable us to maintain and operate radiology systems at their highest efficiency, ensuring consistent performance and dependable scan quality.</p>
<p className='text-left px-20'>We also provide these tools on a rental basis, such as:</p>

<Showcase content={content}  />
    </div>
    </>
  )
}

export default Services
