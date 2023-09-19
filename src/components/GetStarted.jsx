import styles from '../style'
import { HiArrowUpRight } from 'react-icons/hi2'

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] shadow-lg rounded-full bg-white p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className=" font-medium text-[18px] leading-[23.4px]">
          <span className=" text-white">Get</span>
        </p>
      </div>

      <p className=" mb-2 font-medium text-[18px] leading-[23.4px]">
        <span className="text-white">Started</span>
      </p>
      <HiArrowUpRight color="white" size={25} />
    </div>
  </div>
)

export default GetStarted
