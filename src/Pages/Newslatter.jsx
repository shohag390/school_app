import React, { useEffect } from "react";
import shepe01 from "../assets/images/newsright.png";
import shepe02 from "../assets/images/newsleft.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Newslatter = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="bg-[#6045ff] md:h-[250px] h-[35vh] w-full relative flex items-center justify-center overflow-hidden">
      <img
        className="absolute bottom-0 right-0 md:h-[220px] h-[120px]"
        src={shepe01}
        alt=""
      />
      <img
        className="absolute top-0 left-0 md:h-[220px] h-[120px]"
        src={shepe02}
        alt=""
      />
      <div className="absolute md:flex flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between w-full h-full lg:px-[230px] md:px-[50px] sm:px-[25px] px-[15px]">
        <div className="md:w-1/2" data-aos="fade-right">
          <p className="lg:py-[4px] md:py-[2px] w-[230px] flex items-center justify-center rounded-full text-[#43392d] bg-[#fff]">
            Get Every Single Updates
          </p>
          <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#fff] pt-[15px]">
            Subscribe
            <span className="text_style_white"> Newsletter</span>
          </h4>
        </div>
        <div
          className="flex flex-col gap-[15px] md:items-end md:w-1/2 w-full md:pt-0 pt-[30px]"
          data-aos="fade-left"
        >
          <input
            className="md:w-[70%] py-[12px] px-[20px] rounded-full"
            type="email"
            placeholder="Email Address"
          />
          <button className="md:w-[70%] text-[#fff] h-full rounded-full lg:font-semibold md:font-medium bg-[#ffa03a] py-[12px]">
            Subscribe Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
