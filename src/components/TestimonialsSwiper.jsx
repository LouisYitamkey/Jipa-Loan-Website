import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from '@mui/material/Rating';

import { testimonials } from "../constants";

export default function App() {
  const slides = testimonials.map((testimonials) => (
    <SwiperSlide key={testimonials.id}>
       

      <div className=" w-full md:flex  md:justify-center items-center">
      

     
      <img className="md:mx-32 md:ml-32 ml-36 md:mt-10  md:mb-0 md:w-60 w-28  rounded-2xl " src={testimonials.image} alt={testimonials.title} />
    
     
      <div className="mt-10">
        <div className="  ">
        {/* <p className=" hidden md:block   mb-5">  <span className="text-center font-medium rounded-2xl px-8 py-1 bg-slate-300"> {testimonials.title}</span> </p> */}
        </div>
     
      <h1 className="md:mr-32 px-20 md:px-0 md:pt-12 text-sm md:text-lg ">  <span>{testimonials.testimony}</span></h1>
      <div className="flex justify-center items-center md:block">
      <Rating className="pt-4 md:pt-6   md:ml-0 " name="half-rating-read " defaultValue={4.5} precision={0.5} readOnly />

      </div>
      <div className="flex justify-center items-center md:block">
        
      <h1 className=" pt-2 md:pt-5 text-xl md:text-base  md:ml-0  mb-3 md:mb-2 font-normal">{testimonials.name}</h1>

      </div>

      <div className=" mb-10">
      <p className=" flex justify-center items-center md:block  ">  <span className="text-center font-light "> {testimonials.title}</span> </p>
      </div>


      </div>
     
     

      </div>
    
    </SwiperSlide>
  ));

  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      
    >
      {slides}
    </Swiper>
  );
}
