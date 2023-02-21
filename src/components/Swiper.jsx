import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fixedrate from '../images/fixedrate.png';
import Interest from '../images/lowinterestrates.jpg';
import Icon from '../images/noicon.png';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
  
    color: '#fff',
  },
  slide1: {
    background: '#080357',
  },
  slide2: {
    background: '#6464C8',
  },
  slide3: {
    background: '#080357',
  },
};

const Swiper = () => (
    
  <AutoPlaySwipeableViews  interval={2000} style={{ width: '100%', height:'100%' }}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <div className='flex justify-around '>
        <div className='pt-10'>
           {/* <p> Interest Section</p> */}
            <span className=' text-xs md:text-base   '> Lowest Interest  Rates </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4' src={Fixedrate}/>

         </div>

        </div>
        <div className='pt-10'>
            <span className='text-xs md:text-base'> No Hidden Fees </span>
         <div className='flex justify-center items-center'>
         <img src={Fixedrate}/>

         </div>

        </div>
        <div className='pt-10'>
            <span className='text-xs md:text-base'> No Collateral </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4' src={Fixedrate}/>

         </div>

        </div>

      </div>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      <div className='flex justify-around '>
        <div className='pt-11'>
        {/* <p> Time Frame</p> */}
            <span className='text-xs md:text-base'> Instant Application </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4 pb-3' src={Icon}/>

         </div>

        </div>
        <div className='pt-10'>
            <span className='text-xs md:text-base'> Instant Review </span>
         <div className='flex justify-center items-center'>
         <img src={Icon}/>

         </div>

        </div>
        <div className='pt-10'>
            <span className='text-xs md:text-base'> Instant Cash </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4' src={Icon}/>

         </div>

        </div>

      </div>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      <div className='flex justify-around '>
        <div className='pt-10'>
            <span className='text-xs md:text-base '> Flexible Repayment </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4' src={Fixedrate}/>

         </div>

        </div>
        <div className='pt-10'>
            <span className='text-xs md:text-base'> No prepayment Penalty </span>
         <div className='flex justify-center items-center'>
         <img src={Fixedrate}/>

         </div>

        </div>
        <div className='pt-10'>
            {/* <p>Payment</p> */}
            <span className='text-xs md:text-base'> Pay-Off Option </span>
         <div className='flex justify-center items-center'>
         <img className='mb-4' src={Fixedrate}/>

         </div>

        </div>

      </div>
    </div>
  </AutoPlaySwipeableViews>
);

export default Swiper;
