import React, { useEffect } from "react";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookReader } from "react-icons/fa";

const EnrolledCourses = ({ data }) => {
  const newOrder = data.flatMap((item) => item?.order);
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[18px] text-[#43392d] capitalize pb-[30px]">
        <FaBookReader className="text-[20px]" />
        <h4>Enrolled Course</h4>
      </div>
      {newOrder?.length === 0 && (
        <div className="h-[400px]">
          <h2 className="mt-5 text-center text-[#002570] text-[20px] font-semibold ">
            No one has enrolled in any of your courses yet!
          </h2>
        </div>
      )}
      <div className="grid md:grid-cols-3 md:gap-[30px] gap-[20px] ">
        {newOrder?.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
            data-aos="zoom-in-up"
          >
            <img
              className="w-full md:h-[160px] h-[200px] rounded-sm"
              src={item?.user?.photo}
              alt=""
            />
            <div>
              <h4 className="categori_name text-[20px] text-[#43392d] font-bold pt-[8px] line-clamp-1">
                {item?.user.name}
              </h4>
              <p className="line-clamp-1 text-[#43392d] md:text-[18px] text-[17px] md:font-medium">
                {item?.course?.name}
              </p>
            </div>
            <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#666464] md:mt-[15px] mt-[10px]">
              <div className="flex items-center gap-[4px]">
                <IoDocumentText className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
                  {item?.course?.quizzes}
                </p>
              </div>
              <div className="flex items-center gap-[4px] ">
                <MdCalendarMonth className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
                  {item?.course?.duration}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <MdPriceChange className="course_icone text-[20px] text-[#43392d]" />
                <p className="text-[16px] font-medium text-[#43392d]">
                  ${item?.course?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
