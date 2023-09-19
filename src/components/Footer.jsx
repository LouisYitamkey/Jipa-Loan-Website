import styles from '../style'
import Logo from '../images/jipalogowhitenew.png'
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im'

import { footerLinks } from '../constants'

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY}  ${styles.paddingX} bg-[#080357] flex-col`}
  >
    <div
      className={`${styles.flexStart} px-6 md:px-20 md:flex-row flex-col mb-8  w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img className=" w-24 md:w-24 logo my-2 pt-5 md:pt-0 " src={Logo} />
        <p className={`${styles.paragraph} text-slate-200 mt-4 max-w-[312px]`}>
          Introducing loan terms that offer easy, reliable, and secure payment
          options.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none text-slate-400 mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full md:px-16 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white">
      <p className="font-poppins md:pl-3 font-normal text-center text-[10px] md:text-[14px] leading-[27px] text-white">
        Copyright &#169;. 2023 Jipa. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        <div className="bg-white  hover:bg-slate-300 px-2 mx-2 py-2 rounded-full">
          <ImFacebook color="#080357 " className="" size={15} />
        </div>
        <div className="bg-white hover:bg-slate-300 px-2 py-2  mx-2 rounded-full">
          <ImTwitter color="#080357" size={15} />
        </div>
        <div className="bg-white hover:bg-slate-300 px-2 py-2 mx-2 rounded-full">
          <ImWhatsapp color="#080357" size={15} />
        </div>
      </div>
    </div>
  </section>
)

export default Footer
