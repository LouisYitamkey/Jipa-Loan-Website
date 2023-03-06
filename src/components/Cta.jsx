import styles from "../style";
import ResponsiveDialog from "./ResponsiveDialog";
import GetStartedCta from "../images/startcta.png";


const CTA = () => (
  <section className={`${styles.flexCenter}  pb-16 md:pb-20 md:pt-16  md:py-12  md:px-32 sm:flex-row flex-col bg-[#6dc8d6]  box-shadow`}>
    <div className="flex-1 flex flex-col">
     <h1 className="text-4xl pl-6 text-[#080357] pb-5 md:pb-0 font-semibold mt-16"> Let's try our services now.</h1>
      <p className='text-xl text-[#080357] px-6 pt-7 mb-12 md md:mb-6 font-normal  md:text-lg' >
      Looking for a quick and easy way to get the funds you need? <br className="hidden md:block"/> Look no further than our loan app! With just a few taps on <br className="hidden md:block"/> your phone, you can apply for a loan.
      </p>
      <div className="pl-6 md:pt-5 pb-10">
      <ResponsiveDialog/>
      </div>
   
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-5 md:mt-10`}>
  
    <img className=" w-56 md:w-72 " src={GetStartedCta} alt='Get Started'/>
    </div>
  </section>
);

export default CTA;