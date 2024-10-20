import { useEffect } from "react";
import { pricing } from "../assets/data/pricing";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdCheckboxOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px]">
      <div className="flex flex-col items-center justify-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Pricing Plan
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Choose <span className="text-[#ffa03a] text_style">Pricing Plan</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px] text-center">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[30px] gap-[20px] md:py-[35px] py-[25px]">
        {pricing?.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="bg-[#f4f5f8] p-[25px] rounded-md hover_effect"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[35px] font-[900] text-[#43392d] categori_name">
                  ${item?.price}
                </span>
                <span className="text-[17px] font-bold text-[#43392d]">
                  /month
                </span>
              </div>
              <div className="py-[4px] px-[30px] bg-[#ffa03a] text-[#ffffff] rounded-full font-bold">
                {item?.status}
              </div>
            </div>
            <div className="flex items-center gap-[4px] text-[#43392d] font-bold pt-[15px] pb-[25px]">
              <CgCalendarDates className="text-[23px] course_icone" />
              <span>{item?.billed}</span>
            </div>
            <div className="bg-[#ffffff] p-[20px] rounded-md">
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#43392d] text-[20px] course_icone" />
                <span className="text-[#43392d] lg:font-semibold md:font-medium font-normal lg:text-[19px] md:text-[18px] sm:text-[16px]">
                  {item?.plan[0]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#43392d] text-[20px] course_icone" />
                <span className="text-[#43392d] lg:font-semibold md:font-medium font-normal lg:text-[19px] md:text-[18px] sm:text-[16px]">
                  {item?.plan[1]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#43392d] text-[20px] course_icone" />
                <span className="text-[#43392d] lg:font-semibold md:font-medium font-normal lg:text-[19px] md:text-[18px] sm:text-[16px]">
                  {item?.plan[2]}
                </span>
              </div>
              <div className="flex items-center gap-[5px] pb-[10px]">
                <IoMdCheckboxOutline className="text-[#43392d] text-[20px] course_icone" />
                <span className="text-[#43392d] lg:font-semibold md:font-medium font-normal lg:text-[19px] md:text-[18px] sm:text-[16px]">
                  {item?.plan[3]}
                </span>
              </div>
              <div className="flex items-center gap-[5px]">
                <IoMdCheckboxOutline className="text-[#43392d] text-[20px] course_icone" />
                <span className="text-[#43392d] lg:font-semibold md:font-medium font-normal lg:text-[19px] md:text-[18px] sm:text-[16px]">
                  {item?.plan[4]}
                </span>
              </div>
            </div>
            <div className="w-full pt-[30px]">
              <button className="flex items-center  gap-[6px] w-full justify-center py-[10px] border-[1px] border-[#6145ff] rounded text-[#43392d] btn_icone duration-500">
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
