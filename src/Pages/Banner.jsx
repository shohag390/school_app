import React from "react";
import { CiStar } from "react-icons/ci";
import user01 from "../assets/images/avatar4.png";
import user02 from "../assets/images/avatar5.png";
import bannerImage from "../assets/images/banner-2.png";

const Banner = () => {
  return (
    <div className="md:h-[90vh] md:px-[80px] px-[20px] md:py-0 py-[40px] md:flex md:items-center md:justify-between bg-[#ffffff] overflow-hidden">
      <div className="md:w-[50%]">
        <div>
          <h1 className="md:font-[900] font-[600] md:text-[55px] text-[40px] md:w-[80%] md:leading-[55px] leading-[42px] md:pb-[30px] pb-[15px]">
            Education is the way to{" "}
            <span className="text-[#ffa03a] text_style">Success.</span>
          </h1>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium md:w-[80%] md:pb-[30px] pb-[15px]">
            Educaation is key to success and freedon from all the forces is a
            power and makes a person powerful.
          </p>
        </div>

        <div className="md:w-[80%] flex items-center justify-between md:h-[55px] h-[45px] bg-[#f4f5f8] rounded-full border-[1px]">
          <input
            className="h-full md:w-[70%] w-[60%] bg-transparent md:px-[30px] px-[20px]"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="md:h-[40px] h-[38px] md:w-[30%] w-[40%] bg-[#6045ff] text-[#ffffff] rounded-full md:mr-[8px] mr-[4px] hover:bg-[#ffa03a] duration-500">
            Subscribe Now
          </button>
        </div>

        <div className="md:pt-[40px] pt-[25px] w-full">
          <div className="flex items-center">
            <div className="flex items-center h-[50px] w-[150px] relative">
              <img
                className="h-[50px] w-[50px] rounded-full absolute"
                src={user01}
                alt=""
              />
              <img
                className="h-[50px] w-[50px] rounded-full absolute left-[43px]"
                src={user02}
                alt=""
              />
              <div className="h-[50px] w-[50px] rounded-full bg-[#ffa03a] flex flex-col items-center justify-center text-[#ffffff] font-bold absolute left-[86px] border-[2px] border-[#ffffff]">
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
      <div className="md:w-[50%] md:flex md:justify-end hidden">
        <img className="md:h-[90vh] md:pt-[20px]" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
