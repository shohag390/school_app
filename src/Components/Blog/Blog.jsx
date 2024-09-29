import React from "react";
import { blogs } from "../../assets/data/blog";
import { FaCalendarCheck, FaUser } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px] bg-[#f4f5f8]">
      <div className="flex flex-col items-center justify-center">
        <p className="md:py-[4px] py-[2px] px-[30px] bg-[#6045ff] rounded-full text-[#ffffff]">
          Blog & News
        </p>
        <h4 className="md:font-[700] font-[600] text-center md:text-[45px] text-[38px] md:leading-[48px] leading-[46px] md:pt-[15px] pt-[10px]">
          Latest From Our{" "}
          <span className="text-[#ffa03a] text_style">Blogs</span>
        </h4>
        <p className="md:px-[450px] text-center text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pt-[15px] pt-[10px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="grid md:grid-cols-4 md:gap-[30px] gap-[20px] grid-cols-1 md:py-[35px] py-[25px]">
        {blogs?.map((item, index) => (
          <div
            className="bg-[#ffffff] p-[15px] hover_effect rounded-md"
            key={index}
          >
            <img className="rounded-[5px]" src={item?.image} alt="image" />
            <div>
              <div className="flex items-center justify-between pt-[10px] pb-[15px] text-[#6d6969]">
                <div className="flex items-center gap-[5px]">
                  <FaCalendarCheck />
                  <p className="text-[#666464] font-bold">{item?.date}</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FaUser />
                  <p className="text-[#666464] font-bold">{item?.post}</p>
                </div>
              </div>
              <h4 className="line-clamp-2 text-[20px] capitalize text-[#272727] font-bold categori_name ">
                {item?.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
