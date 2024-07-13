import SectionTitle from "../../SectionTitle/SectionTitle";
import icon from '../../../assets/logo/FavIcon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const Category = () => {
    return (
        <div>

          <SectionTitle heading={"CATEGORY ALL PRODUCT"} imageHeading={icon}  ></SectionTitle>
     <div className="mt-7">
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/5xC1pWm/punjabi1-square.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/6WXXZdq/watch1.png"
          alt="card-image"
          className="h-full w-full object-cover rounded-2xl"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/fpsJQMG/ezgif-1-3d0f4bc7e5.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/sHY5FVC/ACCESSORIES-mobile-laptop.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/C8JJrKq/207a246677-3-bf85c33570f58c756a71c759abaed375.webp"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
        <SwiperSlide><Card className="w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://i.ibb.co/ydj60Kk/glasses-1.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
     
     
    </Card></SwiperSlide>
       
      </Swiper>
     </div>

        </div>
    );
};

export default Category;