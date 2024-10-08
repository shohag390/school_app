import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";

const Courses = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/course`);

  const topEight = data?.slice(0, 8);

  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px] bg-[#f4f5f8]">
      <div className="flex flex-col items-center justify-center">
        <p className="md:py-[4px] py-[2px] px-[30px] bg-[#6045ff] rounded-full text-[#ffffff]">
          Trending Courses
        </p>
        <h4 className="md:font-[700] font-[600] md:text-[45px] text-[38px] md:leading-[48px] leading-[46px] md:pt-[15px] pt-[10px]">
          Popular <span className="text-[#ffa03a] text_style">Courses</span>
        </h4>
        <p className="md:px-[400px] text-center text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pt-[15px] pt-[10px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid md:grid-cols-4 md:gap-[30px] gap-[20px] md:py-[35px] py-[25px]">
          {topEight?.map((item) => (
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
      )}
      <div className="flex items-center justify-center w-full">
        <Link className="btn py-[10px] px-[30px] rounded-md" to={"/allcourses"}>
          All Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
