import { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import user01 from "../assets/images/avatar4.png";
import user02 from "../assets/images/avatar5.png";
import bannerImage from "../assets/images/banner-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-full sm:flex sm:items-center sm:justify-between lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full sm:py-0 py-[40px] bg-[#fff] overflow-hidden">
      {/* -------Banner Left Side------ */}
      <div className="sm:w-[50%] w-full" data-aos="fade-right">
        <div>
          <h1 className="lg:text-[60px] md:text-[45px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[60px] md:leading-[45px] sm:leading-[30px] leading-[35px] lg:w-[80%] md:w-[78%] sm:w-[70%] w-[75%] text-[#43392d]">
            Education is the way to{" "}
            <span className="text-[#ffa03a] text_style">Success.</span>
          </h1>
          <p className="lg:pt-[20px] md:pt-[15px] sm:pt-[8px] pt-[12px] lg:pb-[30px] md:pb-[20px] sm:pb-[12px] pb-[16px] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:w-[80%] md:w-[95%] sm:w-[100%] text-[#43392d] lg:font-semibold md:font-medium font-normal">
            Educaation is key to success and freedon from all the forces is a
            power and makes a person powerful.
          </p>
        </div>

        <div className="lg:w-[80%] md:w-[95%] w-[100%] lg:h-[55px] md:h-[45px] sm:h-[38px] h-[45px] flex items-center justify-between bg-[#f4f5f8] rounded-full text-[#43392d] p-[3px]">
          <input
            className="h-full bg-transparent md:px-[20px] px-[15px] placeholder:text-[#43392d] lg:w-[70%] w-[60%]"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="bg-[#ffa03a] lg:w-[30%] w-[40%] text-[#fff] h-full rounded-full lg:font-semibold md:font-medium">
            Subscribe
          </button>
        </div>

        <div className="lg:pt-[40px] md:pt-[30px] sm:pt-[20px] pt-[15px] w-full">
          <div className="flex items-center">
            <div className="flex items-center h-[50px] md:w-[150px] w-[135px] sm:w-[110px] relative">
              <img
                className="md:h-[50px] h-[45px] sm:h-[40px] md:w-[50px] w-[45px] sm:w-[40px] rounded-full absolute"
                src={user01}
                alt=""
              />
              <img
                className="md:h-[50px] h-[45px] sm:h-[40px] sm:w-[40px] md:w-[50px] w-[45px] rounded-full absolute md:left-[43px] left-[39px] sm:left-[30px]"
                src={user02}
                alt=""
              />
              <div className="md:h-[50px] sm:h-[40px] h-[45px] md:w-[50px] sm:w-[40px] w-[45px] rounded-full bg-[#ffa03a] flex flex-col items-center justify-center text-[#ffffff] font-bold absolute md:left-[86px] left-[78px] sm:left-[60px] border-[2px] border-[#ffffff]">
                <p>4.9</p>
                <CiStar />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[18px]">Learners Reviews</h4>
              <p className="text-[14px] text-[#666464]">
                2000+ Fully Satisfied SStudent
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------Banner Right Side------ */}
      <div
        className="sm:w-[50%] sm:flex sm:justify-end hidden"
        data-aos="fade-left"
      >
        <img
          className="lg:h-[90vh] md:h-[70vh] sm:h-[60vh] sm:pt-[20px]"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
