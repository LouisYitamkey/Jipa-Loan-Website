import React from 'react'

const HeroSecond = () => {
  return (
    <section  className={`flex md:flex-row flex-col `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
    <div className="flex  flex-row items-center pt-28 md:pt-36 py-[6px] px-4  rounded-[10px] mb-6">
        {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
     
        <p className={`${styles.paragraph} text-sm ml-12`}>
          <p className="bg-white md:py-1 py-1 rounded-3xl md:rounded-3xl ">&nbsp; <span className="bg-rose-300  md:px-2 px-1   rounded-3xl"> Latest</span> Loans  in 30 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </p>
      </div>


      <div className="flex flex-row  justify-between items-center w-full">
       
   
        <h1 className="flex-1 font-poppins  text-center md:text-left md:text-[70px]   md:px-16 ss:text-[72px] text-[30px] text-[#080357]    ss:leading-[100.8px] leading-[39px] md:leading-[75px]">

          <span> The Best Smart </span>  <br className="sm:block  hidden" />{" "}
         
          <span > Digital Loans <span className="md:hidden"> Provider.</span></span>{" "}
        </h1>
      
      </div>
     
      <h1 className=" hidden md:block md:px-16  ss:text-[68px] text-[70px] text-[#080357]   ss:leading-[100.8px] leading-[75px] w-full">
        Provider.
      </h1>
    
      <p  className={`${styles.paragraph}   max-w-[470px] text-center md:text-left   md:pl-16 md:pt-3 text-slate-900  text-xl mt-5`}>

      Download the JIPA app to experience the ease and speed of our loan application process.
      </p>
      {/* Download buttons */}
      <div className=" flex md:pl-16 pl-10 pt-6 md:pb-4 md:pt-5">
        <div>
        <img className="w-32 md:w-40 pt-2 md:pt-4" alt="googleplay" src={Googleplay}/>

        </div>
        <div>
        <img className="w-36  md:pt-1 md:w-48" alt="googleplay" src={Appstore}/>

        </div>
       
        
      </div>

<div className="flex ml-16">
<div className="bg-rose-300  px-1 py-1 rounded-full">
      <HiShieldCheck size={25}/>
      
      </div>
      <div>  <p className="ml-4 pt-1">   Licensed by Bank of Ghana</p> </div>
     
   
   
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
  )
}

export default HeroSecond