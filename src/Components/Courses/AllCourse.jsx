import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const AllCourse = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/course`);
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px]">
      <div className="grid md:grid-cols-4 md:gap-[30px] gap-[20px]">
        {data?.map((item) => (
          <Link
            to={`/courses/${item?._id}`}
            key={item?._id}
            className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
          >
            <img
              className="w-full md:h-[160px] h-[200px] rounded-sm"
              src={item?.photo}
              alt=""
            />
            <div>
              <h4 className="categori_name text-[20px] text-[#272727] font-bold pt-[8px]">
                {item?.categorie}
              </h4>

              <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px]">
                {item.instactor?.name}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
