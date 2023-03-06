import styles from "../style";

import HeroImage from "../images/robotminified.png";
import Googleplay from "../images/googleplayminified.png";
import Appstore from "../images/applenew.png";
import Herosecond from "./Herosecond";
import Footer from "./Footer";
import TestimonialsSwiper from  "./TestimonialsSwiper";
import Faqs from "./Faqs";
import CTA from "./Cta";
import Swiper from "./Swiper";



import { HiShieldCheck } from "react-icons/hi2";


const Hero = () => {
  return (

    <div className={``}>
      <div>
      <section  className={`flex md:flex-row ${styles.flexStart} ${styles.paddingX} bg-slate-200 flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16  `}>
      <div className="flex bg-slate-200  flex-row items-center pt-28 md:pt-36 py-[6px] px-4  rounded-[10px] mb-6">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
       
          <p className={`${styles.paragraph} text-sm ml-12`}>
            <p className="bg-white font-bold md:py-1 py-1 rounded-3xl md:rounded-3xl ">&nbsp; <span className="bg-[#6dc8d6]  md:px-2 px-1 font-bold  rounded-3xl"> Latest</span> Loans  in 30 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </p>
        </div>


        <div className="flex flex-row  justify-between items-center w-full">
         
     
          <h1 className="flex-1 font-poppins font-bold text-center md:text-left md:text-[60px]   md:px-16 ss:text-[72px] text-[30px] text-[#080357]     ss:leading-[100.8px] leading-[39px] md:leading-[75px]">

            <span> The Best Smart </span>  <br className="sm:block  hidden" />
           
            <span > Digital Loans <span className="md:hidden"> Provider.</span></span>
          </h1>
        
        </div>
       
        <h1 className=" hidden md:block md:px-16 font-bold  ss:text-[68px] text-[60px] text-[#080357]   ss:leading-[100.8px] leading-[75px] w-full">
          Provider.
        </h1>
      
      <p  className={`   max-w-[470px] text-center md:text-left   md:pl-16 md:pt-3   text-xl mt-5`}>

        Download the JIPA app to experience the ease and speed of our loan application process.
        </p>
        {/* Download buttons */}
        <div className=" flex md:pl-16 pl-8 pt-10 pb-5 md:pb-10 md:pt-5">
          <div className="pr-4">
          <img className="w-36   md:w-40  md:pt-2 " alt="googleplay"   src={Googleplay}/>

          </div>  <br/> 
          <div>
          <img className="w-36  md:pt-2 md:w-40" alt="appstore"    src={Appstore}/>

          </div>
         
          
        </div>

<div className="flex ml-10  md:pb-10 md:ml-16 pt-7">
<div className="bg-[#080357]  px-3 md:px-3 md:py-3 py-3 rounded-full">
        <HiShieldCheck color="white" size={35}/>
        
        </div>

        <div className=" flex justify-center  items-center"> 
          <p className="ml-2 font-bold">   Licensed by Bank of Ghana</p>
          
           </div>

      </div>
    
      <div>

      </div>
   

</div>
       
  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`}>
      
       
        <img className="w-[80%] pt-14 md:pt-24  h-[100%] relative z-[5]"    alt="hero" src={HeroImage}/>

      </div>

     <div>
 
   
     </div>

     
    </section>
    <div id="features" className=" md:px-10  ">
      <Swiper/>
      
  
    </div>
   
    <div>
 
      
    </div>
 
    <div id="product">  

    <Herosecond/>

    </div>
    <div id="testimonials" className="  md:px-20 py-10 md:py-44 bg-slate-200">
    <h1 className="text-2xl  md:pb-5 pb-10 pt-5 md:pt-0 px-8  md:text-4xl  text-center text-[#080357] font-semibold "> Our customers love <br className="md:hidden"/> what we do</h1>
    <TestimonialsSwiper/>

    </div>
    <div className="md:py-20 bg-white"> 
    <Faqs/> 
    </div>
    <div>
    <CTA/>
    </div>
    <div>
<Footer/>
    </div>
    
    <div> 
  
    </div>

      </div>
      
   
    </div>
  
  );
};

export default Hero;