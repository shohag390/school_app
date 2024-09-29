import React from "react";
import { pricing } from "../assets/data/pricing";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdCheckboxOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px] bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center">
        <p className="md:py-[4px] py-[2px] px-[30px] bg-[#6045ff] rounded-full text-[#ffffff]">
          Pricing Plan
        </p>
        <h4 className="md:font-[700] font-[600] text-center md:text-[45px] text-[38px] md:leading-[48px] leading-[46px] md:pt-[15px] pt-[10px]">
          Choose <span className="text-[#ffa03a] text_style">Pricing Plan</span>
        </h4>
        <p className="md:px-[450px] text-center text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pt-[15px] pt-[10px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-[30px] gap-[20px] md:py-[35px] py-[25px]">
        {pricing?.map((item, index) => (
          <div
            key={index}
            className="bg-[#f4f5f8] p-[25px] rounded-md hover_effect"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[35px] font-[900] text-[#272727] categori_name">
                  ${item?.price}
                </span>
                <span className="text-[17px] font-bold text-[#666464]">
                  /month
                </span>
              </div>
              <div className="py-[4px] px-[30px] bg-[#ffa03a] text-[#ffffff] rounded-full font-bold">
                {item?.status}
              </div>
            </div>
            <div className="flex items-center gap-[4px] text-[#666464] font-bold pt-[15px] pb-[25px]">
              <CgCalendarDates className="text-[23px] course_icone" />
              <span>{item?.billed}</span>
            </div>
            <div className="bg-[#ffffff] p-[20px] rounded-md">
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#666464] text-[20px] course_icone" />
                <span className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {item?.plan[0]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#666464] text-[20px] course_icone" />
                <span className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {item?.plan[1]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#666464] text-[20px] course_icone" />
                <span className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {item?.plan[2]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#666464] text-[20px] course_icone" />
                <span className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {item?.plan[3]}
                </span>
              </div>
              <div className="flex items-center gap-[5px]">
                <IoMdCheckboxOutline className="text-[#666464] text-[20px] course_icone" />
                <span className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {item?.plan[4]}
                </span>
              </div>
            </div>
            <div className="w-full pt-[30px]">
              <button className="w-full py-[14px] bg-[#ffffff] border-[1px] border-[#6045ff] rounded-md font-bold text-[#272727]">
                Choose Your Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
