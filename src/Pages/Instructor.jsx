import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetProfile from "../hooks/useFetchData";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";
import Loading from "../Components/Loader/Loading";
import Error from "../Components/Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

const Instructor = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/instactor`);
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px] bg-[#f4f5f8] overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Expert Techer
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Meet Our <span className="text-[#ffa03a] text_style">Instructor</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="md:py-[35px] py-[25px]" data-aos="zoom-out-left">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            675: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            935: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1272: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && (
            <div>
              {data?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="text-center bg-[#ffffff] p-[15px] hover_effect rounded-md"
                >
                  <Link to={"/"}>
                    <img
                      className="lg:h-[240px] md:h-[220px] sm:h-[180px] h-[170px] w-full"
                      src={item?.photo}
                      alt=""
                    />
                    <div className="pt-[8px]">
                      <h4 className="categori_name text-[20px] text-[#272727] font-bold pt-[3px] capitalize line-clamp-1 items-center">
                        {item?.name}
                      </h4>
                      <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize pb-[8px]">
                        {item?.occupation}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Instructor;
