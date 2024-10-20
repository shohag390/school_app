import React, { useEffect } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const MyUploadCourses = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[18px] text-[#43392d] capitalize pb-[30px]">
        <FaBookBookmark className="text-[20px]" />
        <h4>My Course</h4>
      </div>
      {data?.course?.length === 0 && (
        <div className="h-[400px]">
          <h2 className="mt-5 text-center text-[#002570] text-[20px] font-semibold ">
            You have not uploaded the course yet!
          </h2>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-[20px]">
        {data.course?.map((item) => (
          <div
            className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
            key={item?._id}
            data-aos="zoom-in-up"
          >
            <img
              className="w-full h-[160px] rounded-sm"
              src={item?.photo}
              alt=""
            />
            <div>
              <h4 className="categori_name text-[20px] text-[#43392d] font-bold pt-[8px] line-clamp-1">
                {item?.name}
              </h4>
              <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize">
                {data?.name}
              </p>
              <p className="line-clamp-2 text-[#43392d] md:text-[18px] text-[17px] md:font-medium pt-[12px]">
                {item?.description}
              </p>
            </div>
            <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#666464] md:mt-[15px] mt-[10px]">
              <div className="flex items-center gap-[4px]">
                <IoDocumentText className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
                  {item?.quizzes}
                </p>
              </div>
              <div className="flex items-center gap-[4px] ">
                <MdCalendarMonth className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
                  {item?.duration}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <MdPriceChange className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
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
