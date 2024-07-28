
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
       
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    
    <SwiperSlide>

        <div>
          <img className=' lg:h-[600px] w-full   ' src={"https://i.ibb.co/vkqXgYX/Brown-Minimalist-Helping-Value-Business-Blog-Banner-2.jpg"} alt="" />
        </div>
    </SwiperSlide>
  
    <SwiperSlide>

        <div>
          <img className=' lg:h-[600px] w-full  ' src={"https://i.ibb.co/SBzN8N7/Colorful-Men-s-Fashion-Sale-Facebook-Cover-1.png"} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>

        <div>
          <img className=' lg:h-[600px] w-full  ' src={"https://i.ibb.co/kSk0kf5/BOOK.png"} alt="" />
        </div>
    </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;