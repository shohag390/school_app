import React from "react";
import shepe01 from "../assets/images/newsright.png";
import shepe02 from "../assets/images/newsleft.png";

const Newslatter = () => {
  return (
    <div className="md:px-[80px] px-[20px] bg-[#6045ff] md:h-[250px] h-[150px] w-full relative flex items-center justify-center">
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
      <div className="absolute flex flex-col items-center justify-center md:gap-[20px] gap-[10px] w-full h-full">
        <h4 className="md:text-[35px] text-[25px] text-center font-bold text-[#ffffff]">
          Subscribe To Our Newsletter
        </h4>
        <div className="h-[45px] md:w-[35%] box_style rounded-full p-[2px]">
          <input
            className="placeholder:text-[#ffffff] bg-transparent h-full w-[70%] px-[30px] text-[#ffffff]"
            type="email"
            placeholder="Email Address"
          />
          <button className="bg-[#ffa03a] w-[30%] h-full rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
