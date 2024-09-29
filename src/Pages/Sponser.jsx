import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import image01 from "../assets/images/br1.png";
import image02 from "../assets/images/br2.png";
import image03 from "../assets/images/br3.png";
import image04 from "../assets/images/br4.png";
import image05 from "../assets/images/br5.png";

const images = [
  {
    image: image01,
  },
  {
    image: image02,
  },
  {
    image: image03,
  },
  {
    image: image04,
  },
  {
    image: image05,
  },
  {
    image: image03,
  },
];

const Sponser = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[20px] w-full bg-[#6045ff] flex items-center justify-center">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="md:h-[90px] h-[65px] w-full rounded-full box_style flex items-center justify-center"
          >
            <div>
              <img className="md:h-[40px] h-[30px]" src={item?.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponser;
