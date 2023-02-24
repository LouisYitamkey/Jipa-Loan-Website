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
       

      <div className=" md:flex md:mt-20 md:justify-center items-center">

     
      <img className="md:mx-32 md:ml-32 ml-36  mb-5 md:mb-0 md:w-60 w-28  rounded-full " src={testimonials.image} alt={testimonials.title} />
    
     
      <div className="mt-10">
        <div className="flex justify-center items-center">
        <p className=" hidden md:block   mb-5">  <span className="text-center font-medium rounded-md px-8 py-1 bg-slate-300"> {testimonials.title}</span> </p>
        </div>
     
      <h1 className="md:mr-32 px-16 md:px-0 text-sm md:text-base ">  <span>{testimonials.testimony}</span></h1>
      <div className="flex justify-center items-center">
      <Rating className="pt-4 md:pt-6   md:ml-0 " name="half-rating-read " defaultValue={4.5} precision={0.5} readOnly />

      </div>
      <div className="justify-center items-center flex">
        
      <h1 className=" pt-2 md:pt-5  md:ml-0  mb-5 md:mb-10 font-bold">{testimonials.name}</h1>

      </div>

      <div className="flex justify-center items-center mb-10">
      <p className=" md:hidden ml-4 ">  <span className="text-center font-medium rounded-md px-8 py-1 bg-slate-300"> {testimonials.title}</span> </p>
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
