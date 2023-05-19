import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const HomeSlider = () => {
    const [datas,setDatas]=useState([])
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the original trigger point
            easing: 'ease-in-out', // Easing function for the animation
            delay: 100, // Delay (in milliseconds) before the animation starts
          });
      }, []);

      useEffect(()=>{
        fetch('https://intelli-kidos-server.vercel.app/bannerInfo')
        .then(res=>res.json())
        .then(data=>{
            setDatas(data)
        })
      },[])
    return (
        <>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        datas.map(data=><SwiperSlide key={data._id}>
        <div className="bg-black flex flex-row-reverse gap-4">
            <img className="w-1/2 h-[600px]" src={data?.image} alt="" />
       <div className="flex flex-col gap-4 justify-center p-4 w-1/2">
       <div>
            <div data-aos="fade-down"
     data-aos-duration="3000" className="text-white lg:p-8">
        <h1 className=" font-semibold text-4xl lg:text-6xl">{data?.title}</h1>
     </div>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="3000" className="text-white lg:p-8 mx-auto">
       <p className="font-semibold mb-8">{data?.description}</p>
       <button className="btn bg-violet-500">{data?.buttonText}</button>
     </div>
       </div>
        </div>

        </SwiperSlide>)
      }
      </Swiper>

        </>
    );
};

export default HomeSlider;