import React from "react";
import about01 from "../../assets/images/about-n1.png";
import about02 from "../../assets/images/about-n2.png";
import about03 from "../../assets/images/about-n3.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:h-[90vh] w-full md:px-[80px] md:py-0 py-[30px] px-[20px] md:flex md:justify-between md:items-center bg-[#ffffff] md:gap-[80px]">
      <div className="flex items-center justify-center md:w-1/2 gap-[15px]">
        <img
          className="md:h-[465px] h-[315px] rounded-t-full rounded-bl-full"
          src={about01}
          alt=""
        />
        <div className="flex flex-col items-center gap-[15px]">
          <img
            className="rounded-full md:h-[225px] md:w-[225px] h-[150px] w-[150px]"
            src={about02}
            alt=""
          />
          <img
            className="rounded-e-full md:h-[225px] md:w-[225px] h-[150px] w-[150px] rounded-ss-full"
            src={about03}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-start md:w-1/2 md:pt-0 pt-[35px]">
        <p className="md:py-[4px] py-[2px] px-[30px] bg-[#6045ff] rounded-full text-[#ffffff]">
          About Us
        </p>
        <h4 className="md:font-[700] font-[600] md:text-[45px] text-[38px] md:w-[80%] md:leading-[48px] leading-[46px] md:pt-[18px] pt-[15px] md:pb-[30px] pb-[25px]">
          Oriented Learning{" "}
          <span className="text-[#ffa03a] text_style">Environment</span>
        </h4>
        <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pb-[15px] pb-[10px]">
          Education has come long way from its traditional roots, and it will
          continue to evolve
        </p>
        <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pb-[35px] pb-[25px]">
          Since 2007 we have been a visionary and a reliable software
          engineering partner for world-class brands. We are a boutique digital
          transformation consultancy and software development company that
          provides cutting edge engineering solutions.
        </p>
        <Link className="btn py-[10px] px-[30px] rounded-md" to={"/"}>
          Learn More Us
        </Link>
      </div>
    </div>
  );
};

export default About;
