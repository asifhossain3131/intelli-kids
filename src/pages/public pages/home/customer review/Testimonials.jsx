import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const[testimonials,setTestimonials]=useState([])
    useEffect(()=>{
        fetch('https://intelli-kidos-server.vercel.app/testimonials')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[])
    return (
        <div className='mt-20'>
            <div className='w-1/2 mx-auto text-center mb-12'>
                <h1 className='font-semibold text-3xl lg:text-5xl'>What They Say</h1>
                <p className='text-gray-600 mt-4 lg:text-xl'>Our Favorite Little Kid's testimonials</p>
            </div>
  <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
            testimonials.map(testimonial=>
                <SwiperSlide key={testimonial._id} className=' bg-[#F4F3F0]'>
                    <div className="h-[400px] flex flex-col items-center shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-24 mx-auto rounded-full">
    <img src={testimonial?.picture} />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <p>"{testimonial?.comment}"</p>
    <p><FaQuoteLeft></FaQuoteLeft></p>
    <div className="card-actions">
        <h1 className='text-2xl'>{testimonial?.name}</h1>
    </div>
    <div>
        <Rating
      style={{ maxWidth: 180 }}
      value={testimonial.rating}
      readOnly
    />
        </div>
  </div>
</div>
                </SwiperSlide>
                )
        }
    
      </Swiper>
        </div>
    );
};

export default Testimonials;