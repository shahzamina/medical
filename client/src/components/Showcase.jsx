import { useNavigate } from "react-router-dom";

const Showcase = ({content=[]}) => {
  const navigate = useNavigate();

 

  return (
    <div className="w-full py-10 px-6">
      {content.map((item, idx) => (
        <div key={idx} className=" max-w-7xl mx-5 pb-5">
          {/* Heading Centered */}
          <h2 className="text-3xl font-bold text-center my-4 text-[#0046A0]">{item.heading}</h2>
 <p className="text-lg text-center text-gray-700">{item.paragraph}</p>
          {/* Content Row */}
          
            {/* Image Left */}
            <div className="w-full lg:w-300 mt-3">
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-130 mt-5 shadow-lg object-cover"
              />
             <button
                onClick={() => navigate('/sign')}
                className="relative inline-flex items-center justify-center font-semibold group mt-5 pt-6"
              >
                {/* Expanding circle */}
                <span
                  className="absolute left-0 w-40 sm:w-10 h-10 border-2 p-4 border-[#39FF14] rounded-full flex items-center justify-center 
                             overflow-hidden transition-all duration-700 ease-in-out sm:group-hover:w-[280px]"
                >
                  <span className="hidden lg:block absolute text-[#39FF14] text-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                    &gt;
                  </span>
                  <span className="block sm:hidden text-black text-sm font-semibold">
                    {item.btn}
                  </span>
                </span>

                <span className="hidden sm:inline-block relative text-lg text-black pl-16 pr-4 transition-all duration-700 ease-in-out">
                  {item.btn}
                </span>
              </button>

            {/* Paragraph + Button Right */}
            
             
           
            </div>
          </div>
       
      ))}
    </div>
  );
};

export default Showcase;
