import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";
import shepe01 from "../../assets/images/newsright.png";
import shepe02 from "../../assets/images/newsleft.png";

const AllCourse = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/course`);
  console.log(data);

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:pb-[50px] md:pb-[40px] pb-[30px] lg:pt-[20px] md:pt-[15px] pt-[12px]">
      <div className="bg-[#6045ff] md:h-[200px] h-[100px] w-full relative flex items-center rounded-md justify-center overflow-hidden">
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
        <div className="absolute flex items-center justify-center w-full h-full">
          <h4 className="md:text-[30px] text-[20px] uppercase text-[#ffffff] md:font-bold font-semibold">
            All Courses
          </h4>
        </div>
      </div>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[30px] gap-[20px] md:pt-[40px] pt-[25px]">
          {data?.map((item) => (
            <Link to={`/courses/${item?._id}`} key={item?._id}>
              <div
                className="bg-[#ffffff] p-[15px] rounded-md duration-500 hover_effect"
                data-aos="zoom-in-up"
              >
                <img
                  className="w-full md:h-[160px] h-[200px] rounded-sm"
                  src={item?.photo}
                  alt=""
                />
                <div>
                  <h4 className="categori_name text-[20px] text-[#43392d] font-bold pt-[8px] line-clamp-1">
                    {item?.name}
                  </h4>

                  <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px] capitalize">
                    {item.instactor?.name}
                  </p>

                  <p className="line-clamp-2 text-[#43392d] md:text-[18px] text-[17px] md:font-medium">
                    {item?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#43392d] md:mt-[15px] mt-[10px]">
                  <div className="flex items-center gap-[4px]">
                    <IoDocumentText className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      {item?.quizzes}
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px] ">
                    <MdCalendarMonth className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      {item?.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <MdPriceChange className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      ${item?.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourse;
