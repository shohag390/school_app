import React from "react";
import { instructor } from "../assets/data/instructor";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Instructor = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px] bg-[#f4f5f8]">
      <div className="flex flex-col items-center justify-center">
        <p className="md:py-[4px] py-[2px] px-[30px] bg-[#6045ff] rounded-full text-[#ffffff]">
          Expert Techer
        </p>
        <h4 className="md:font-[700] font-[600] text-center md:text-[45px] text-[38px] md:leading-[48px] leading-[46px] md:pt-[15px] pt-[10px]">
          Meet Our <span className="text-[#ffa03a] text_style">Instructor</span>
        </h4>
        <p className="md:px-[450px] text-center text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pt-[15px] pt-[10px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="md:py-[35px] py-[25px]">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {instructor?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="text-center bg-[#ffffff] p-[15px] hover_effect rounded-md"
            >
              <Link to={"/"}>
                <img className="h-[240px] w-full" src={item?.image} alt="" />
                <div className="pt-[8px]">
                  <h4 className="text-[20px] capitalize text-[#272727] font-bold categori_name">
                    {item?.name}
                  </h4>
                  <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[8px]">
                    {item?.role}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Instructor;
