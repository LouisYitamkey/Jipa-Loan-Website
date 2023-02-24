import styles from "../style";


const CTA = () => (
  <section className={`${styles.flexCenter}   md:py-12 md:px-32 sm:flex-row flex-col bg-slate-400  box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Access the loan terms you need to grow your business from anywhere on the planet with our loan app
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <button>Get Started</button>
    
    </div>
  </section>
);

export default CTA;