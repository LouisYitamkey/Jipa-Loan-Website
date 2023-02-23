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
       

      <div className=" md:flex md:justify-center items-center">

     
      <img className="md:mx-32 md:ml-32 ml-36  mb-10 md:mb-0 md:w-60 w-28  rounded-full " src={testimonials.image} alt={testimonials.title} />
    
     
      <div className="">
      <p className=" hidden md:block   mb-5">  <span className="text-center font-medium px-8 py-1 bg-slate-300"> {testimonials.title}</span> </p>
      <h1 className="md:mr-32 px-20 md:px-0 text-sm md:text-base ">  <span>{testimonials.testimony}</span></h1>
      <Rating className="pt-4 md:pt-6 ml-36  md:ml-0 " name="half-rating-read " defaultValue={4.5} precision={0.5} readOnly />
      <h1 className=" pt-2 md:pt-5 ml-36 md:ml-0  mb-5 md:mb-10 font-bold">{testimonials.name}</h1>
      <div className="flex justify-center items-center mb-10">
      <p className=" md:hidden ml-4 ">  <span className="text-center font-medium px-8 py-1 bg-slate-300"> {testimonials.title}</span> </p>
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
