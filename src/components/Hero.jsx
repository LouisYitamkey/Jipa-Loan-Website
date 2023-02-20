import styles from "../style";

import HeroImage from "../images/robot.png";
import Googleplay from "../images/googleplayjipa.png";
import Appstore from "../images/applestore.png";


const Hero = () => {
  return (

    
    <div className={`${styles.flexStart} ${styles.paddingX}  bg-slate-200`}>
      <div>
      <section  className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins  font-bold md:px-16 ss:text-[72px] text-[70px] text-[#080357]   ss:leading-[100.8px] leading-[75px]">
            The Best Smart   <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Digital Loans</span>{" "}
          </h1>
        
        </div>
       
        <h1 className="font-poppins md:px-16 font-bold ss:text-[68px] text-[70px] text-[#080357]   ss:leading-[100.8px] leading-[75px] w-full">
          Provider.
        </h1>
        <p  className={`${styles.paragraph}   max-w-[470px] px-16 md:pt-3 text-slate-900 font-bold text-xl mt-5`}>

        Download the JIPA app to experience the ease and speed of our loan application process.
        </p>
        {/* Download buttons */}
        <div className=" flex md:pl-16 md:pt-5">
          <div>
          <img className="w-48 md:pt-4" alt="googleplay" src={Googleplay}/>

          </div>
          <div>
          <img className="w-56" alt="googleplay" src={Appstore}/>

          </div>
          
        </div>
        
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      
       
        <img className="w-[80%] pt-14 h-[100%] relative z-[5]" alt="hero" src={HeroImage}/>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

     
    </section>

      </div>

    </div>
  
  );
};

export default Hero;