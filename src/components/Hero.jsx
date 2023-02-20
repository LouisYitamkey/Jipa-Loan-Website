import styles from "../style";

import HeroImage from "../images/robot.png";
import Googleplay from "../images/googleplayjipa.png";
import Appstore from "../images/applenew.png";
import { HiShieldCheck } from "react-icons/hi2";






const Hero = () => {
  return (

    
    <div className={`${styles.flexStart} ${styles.paddingX}   bg-slate-200`}>
      <div>
      <section  className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
      <div className="flex  flex-row items-center pt-28 md:pt-36 py-[6px] px-4  rounded-[10px] mb-6">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
       
          <p className={`${styles.paragraph} text-sm ml-12`}>
            <p className="bg-white md:py-1 py-1 rounded-3xl md:rounded-3xl ">&nbsp; <span className="bg-rose-300  md:px-2 px-1   rounded-3xl"> Latest</span> Loans  in 30 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </p>
        </div>


        <div className="flex flex-row  justify-between items-center w-full">
         
     
          <h1 className="flex-1 font-poppins font-bold  text-center md:text-left md:text-[70px]   md:px-16 ss:text-[72px] text-[30px] text-[#080357]    ss:leading-[100.8px] leading-[39px] md:leading-[75px]">

            <span> The Best Smart </span>  <br className="sm:block  hidden" />{" "}
           
            <span > Digital Loans <span className="md:hidden"> Provider.</span></span>{" "}
          </h1>
        
        </div>
       
        <h1 className=" hidden md:block md:px-16 font-bold  ss:text-[68px] text-[70px] text-[#080357]   ss:leading-[100.8px] leading-[75px] w-full">
          Provider.
        </h1>
      
        <p  className={`${styles.paragraph}   max-w-[470px] text-center md:text-left   md:pl-16 md:pt-3 text-slate-900  text-xl mt-5`}>

        Download the JIPA app to experience the ease and speed of our loan application process.
        </p>
        {/* Download buttons */}
        <div className=" flex md:pl-16 pl-10 pt-6 md:pb-10 pb-12 md:pt-5">
          <div className="pr-4">
          <img className="w-36  md:w-40  md:pt-2 " alt="googleplay" src={Googleplay}/>

          </div>  <br/> 
          <div>
          <img className="w-36  md:pt-2 md:w-40" alt="appstore" src={Appstore}/>

          </div>
         
          
        </div>

<div className="flex ml-16">
<div className="bg-rose-300  px-1 py-1 rounded-full">
        <HiShieldCheck size={25}/>
        
        </div>
        <div className="">  <p className="ml-4 pt-1">   Licensed by Bank of Ghana</p> </div>
       
     
     
      </div>
      <div>

      </div>
   

</div>
       

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      
       
        <img className="w-[80%] pt-14 h-[100%] relative z-[5]" alt="hero" src={HeroImage}/>

      </div>

     <div>
   
     </div>

 
      
    
   
     
    </section>
    <div className="bg-red-200 ">
    <p>hello</p>
    </div>


      </div>
   
    </div>
  
  );
};

export default Hero;