import styles from "../style";

import HeroImage from "../images/robotminified.png";

import ResponsiveDialog from "./ResponsiveDialog";

const Hero = () => {
  return (
    <div className={`bg-[#9DE2E4]`}>
      <div>
        <section
          className={`flex md:flex-row ${styles.flexStart} ${styles.paddingX}  flex-col `}
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}
          >
            <div className="mt-10 ">
              <img
                className="w-[80%] pt-14 ml-5 md:ml-0 md:mb-8  h-[100%] relative z-[5]"
                alt="hero"
                loading="lazy"
                src={HeroImage}
              />
            </div>

            <div className="flex flex-row  justify-between items-center w-full"></div>

            <div className="flex ml-10  md:pb-10 md:ml-16 pt-7"></div>

            <div></div>
          </div>

          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 relative`}
          >
            <div className="mt-10 mb-8 md:mb-0 md:mt-60">
              <p className="">
                {" "}
                <span className="px-3 bg-[#6dc8d6] rounded-full font-medium py-1">
                  {" "}
                  Instant Loans
                </span>
              </p>

              <h1 className="text-4xl text-[#080357] font-semibold mt-10">
                {" "}
                Loan with peace of mind
              </h1>
              <h3 className="pt-10  md:mb-12 mb-10 text-lg md:text-lg">
                {" "}
                Get the loan you need with peace of mind. Get a loan from Jipa{" "}
                <br className="hidden md:block" /> and enjoy flexible and
                affordable interest rates. <br className="hidden md:block" />{" "}
                <br className="md:hidden" /> <br /> Jipa's repayment options
                make borrowing easy and stress-free.{" "}
                <br className="hidden md:block" /> Apply now and experience
                worry-free financing with us.
              </h3>
              <div>
                <ResponsiveDialog />
              </div>
            </div>
          </div>

          <div></div>
        </section>

        {/* Swiper was here */}

        <div> </div>
        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
