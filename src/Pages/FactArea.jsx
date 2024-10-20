import { useState } from "react";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FactArea = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] back_color_fact">
      <div className="py-[30px] md:py-[70px] sm:px-0 px-[10px] w-full bg-[#6045ff] rounded-[10px] flex items-center justify-between">
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <FaGraduationCap className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h4>
            </ScrollTrigger>
            <p className="text-[#ffffff] md:text-[18px] md:font-medium">
              Student Enrolled
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <PiStudentFill className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
                {counterOn && (
                  <CountUp start={0} end={123} duration={2} delay={0} />
                )}
                +
              </h4>
            </ScrollTrigger>
            <p className="text-[#ffffff] md:text-[18px] md:font-medium">
              Certified Techers & Admin
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full h-full md:gap-[25px]">
          <div className="box_style md:h-[70px] md:w-[70px] md:rounded-full md:flex md:items-center md:justify-center hidden">
            <FaBookOpen className="text-[#ffffff] md:text-[35px]" />
          </div>
          <div className="text-center md:text-start">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h4 className="text-[#ffffff] md:text-[35px] text-[25px] md:font-[900] font-[700] md:leading-[40px] leading-[30px]">
                {counterOn && (
                  <CountUp start={0} end={423} duration={2} delay={0} />
                )}
                +
              </h4>
            </ScrollTrigger>
            <p className="text-[#ffffff] md:text-[18px] md:font-medium">
              Premium Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactArea;
