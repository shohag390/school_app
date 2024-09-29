import React from "react";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const FactArea = () => {
  return (
    <div className="px-[20px] md:px-[80px] back_color_fact">
      <div className="py-[30px] md:py-[70px] w-full bg-[#6045ff] rounded-[10px] flex items-center justify-between">
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <FaGraduationCap className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
              100+
            </h4>
            <p className="text-[#ffffff] md:text-[18px] text-[17px] md:font-medium">
              Student Enrolled
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <PiStudentFill className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
              123+
            </h4>
            <p className="text-[#ffffff] md:text-[18px] text-[17px] md:font-medium">
              Certified Techer
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <FaBookOpen className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
              423+
            </h4>
            <p className="text-[#ffffff] md:text-[18px] text-[17px] md:font-medium">
              Premium Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactArea;
