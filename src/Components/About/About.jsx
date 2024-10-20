import { useEffect } from "react";
import about01 from "../../assets/images/about-n1.png";
import about02 from "../../assets/images/about-n2.png";
import about03 from "../../assets/images/about-n3.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div className="lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-full sm:flex sm:items-center sm:justify-between lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full sm:py-0 py-[40px] bg-[#fff] overflow-hidden lg:gap-0 md:gap-[10px] sm:gap-[25px]">
      <div
        className="flex sm:justify-start justify-center sm:w-1/2 md:gap-[15px] gap-[10px]"
        data-aos="fade-right"
      >
        <img
          className="lg:h-[465px] md:h-[355px] h-[280px] lg:w-[340px] sm:w-[260px] w-1/2 sm:h-[304px] rounded-t-full rounded-bl-full"
          src={about01}
          alt=""
        />
        <div className="flex flex-col items-center md:gap-[15px] gap-[10px]">
          <img
            className="rounded-full lg:h-[225px] lg:w-[225px] md:h-[170px] md:w-[170px] sm:h-[147px] sm:w-[147px] h-[135px] w-full"
            src={about02}
            alt=""
          />
          <img
            className="rounded-e-full lg:h-[225px] lg:w-[225px] md:h-[170px] md:w-[170px] sm:h-[147px] sm:w-[147px] rounded-ss-full h-[135px] w-full"
            src={about03}
            alt=""
          />
        </div>
      </div>
      <div
        className="flex flex-col items-start sm:w-1/2 sm:pt-0 pt-[35px]"
        data-aos="fade-left"
      >
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          About Us
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] lg:w-[80%] md:w-[78%] sm:w-[100%] w-[75%] text-[#43392d] lg:py-[20px] md:py-[15px] sm:py-[12px] py-[15px]">
          Oriented Learning{" "}
          <span className="text-[#ffa03a] text_style">Environment</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] lg:w-[80%] md:w-[95%] sm:w-[100%] text-[#43392d] lg:font-semibold md:font-medium font-normal">
          Education has come long way from its traditional roots, and it will
          continue to evolve
        </p>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] lg:w-[100%] md:w-[95%] sm:w-[100%] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:line-clamp-4 sm:line-clamp-3 lg:pt-[20px] md:pt-[15px] pt-[10px]">
          Since 2007 we have been a visionary and a reliable software
          engineering partner for world-class brands. We are a boutique digital
          transformation consultancy and software development company that
          provides cutting edge engineering solutions.
        </p>
        <Link
          className="btn lg:mt-[25px] md:mt-[20px] sm:mt-[15px] mt-[20px] lg:py-[10px] md::py-[8px] py-[6px] lg:px-[30px] md:px-[20px] px-[15px] rounded-md"
          to={"/"}
        >
          Learn More Us
        </Link>
      </div>
    </div>
  );
};

export default About;
