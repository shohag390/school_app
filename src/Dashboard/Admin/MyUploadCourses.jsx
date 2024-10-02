import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { courses } from "../../assets/data/data";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";

const MyUploadCourses = ({ data }) => {
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[#272727] pb-[30px]">
        <FaBookBookmark className="text-[20px]" />
        <h4>My Courses</h4>
      </div>
      <div className="grid md:grid-cols-3 gap-[20px]">
        {data.course?.map((item) => (
          <div
            className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
            key={item?._id}
          >
            <img
              className="w-full h-[160px] rounded-sm"
              src={item?.photo}
              alt=""
            />
            <div>
              <h4 className="categori_name text-[20px] text-[#272727] font-bold pt-[8px]">
                {item?.categorie}
              </h4>
              <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px]">
                {data?.name}
              </p>
              <p className="line-clamp-2 text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                {item?.description}
              </p>
            </div>
            <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#666464] md:mt-[15px] mt-[10px]">
              <div className="flex items-center gap-[4px]">
                <IoDocumentText className="course_icone text-[20px] text-[#666464]" />
                <p className="text-[16px] font-medium text-[#666464]">
                  {item?.quizzes}
                </p>
              </div>
              <div className="flex items-center gap-[4px] ">
                <MdCalendarMonth className="course_icone text-[20px] text-[#666464]" />
                <p className="text-[16px] font-medium text-[#666464]">
                  {item?.duration}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <MdPriceChange className="course_icone text-[20px] text-[#666464]" />
                <p className="text-[16px] font-medium text-[#666464]">
                  ${item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyUploadCourses;
