import styles from "../style";

import HeroImage from "../images/robot.png";



import { HiShieldCheck } from "react-icons/hi2";


const Hero = () => {
  return (

    <div className={`bg-slate-200`}>
      <div>
      <section  className={`flex md:flex-row ${styles.flexStart} ${styles.paddingX}  flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
     <div className="mt-10">
     
     <img className="w-[80%] pt-14  h-[100%] relative z-[5]" alt="hero" src={HeroImage}/>
     </div>


        <div className="flex flex-row  justify-between items-center w-full">
         
     
         
        
        </div>
       
     
      
    
   

<div className="flex ml-10  md:pb-10 md:ml-16 pt-7">

     
    </div>
    
      <div>

      </div>
   

</div>
       
  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`}>
      
       
     <div className="mt-10 md:mt-60">
     
      <p className=""> <span className="px-3 bg-rose-300 rounded-full font-medium py-1"> Instant Loans</span></p>
      
      <h1 className="text-4xl font-semibold mt-10"> Loan with peace of mind</h1>
      <h3 className="pt-10  text-base md:text-xl"> Get the loan you need with peace of mind. Get a loan from Jipa <br className="hidden md:block"/> and enjoy flexible and affordable  interest rates. <br className="hidden md:block"/>  <br/> <br /> Jipa's repayment options make  borrowing   easy and   stress-free. <br className="hidden md:block" />   Apply now and experience worry-free financing with us.</h3>

      <button className="bg-[#080357] border-4 shadow-2xl border-white hover:border-[#080357]  hover:bg-white hover:text-[#080357] text-white font-semibold px-12 mt-10 md:mt-16 py-4 rounded-full"> Get Started </button>
     </div>

      </div>

     <div>
 
   
     </div>

     
    </section>

    {/* Swiper was here */}
   
    <div>  </div>
    <div>
 
      
    </div>
 
    <div>  

  

    </div>

      </div>
      
   
    </div>
  
  );
};

export default Hero;