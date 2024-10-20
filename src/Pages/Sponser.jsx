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
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] lg:py-[50px] sm:py-[30px] py-[20px] w-full bg-[#6045ff] flex items-center justify-center">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          675: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          935: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1272: {
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
            className="lg:h-[90px] md:h-[70px]  h-[65px] w-full rounded-full box_style flex items-center justify-center"
          >
            <div>
              <img
                className="lg:h-[40px] md:h-[28px] h-[25px]"
                src={item?.image}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponser;
