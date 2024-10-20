import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { testimonial } from "../assets/data/testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="bg-[#fff] lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px] overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Trending Courses
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Students Says{" "}
          <span className="text-[#ffa03a] text_style">About Us</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="md:py-[35px] py-[25px]" data-aos="zoom-out-right">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            675: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            935: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1272: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testimonial?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-[#f4f5f8] p-[20px] hover_effect rounded-md"
            >
              <div>
                <div className="flex items-center gap-[10px] pb-[20px]">
                  <img
                    className="h-[60px] w-[60px] rounded-full border-[2px] border-[#ffffff]"
                    src={item?.image}
                    alt=""
                  />
                  <div>
                    <h4 className="categori_name text-[20px] text-[#43392d] font-bold pt-[3px] capitalize line-clamp-1">
                      {item?.name}
                    </h4>
                    <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize pb-[8px]">
                      {item?.role}
                    </p>
                  </div>
                </div>
                <p className="text-[#43392d] md:text-[18px] text-[17px] md:font-medium">
                  "{item?.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
