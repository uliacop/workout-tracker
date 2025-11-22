import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-3.jpg/" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/img/slider/fitnes-exe-6.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
