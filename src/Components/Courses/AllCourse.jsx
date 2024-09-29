import React, { useState } from "react";
import { courses } from "../../assets/data/data";
import { FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";

const AllCourse = () => {
  const [getCourse, setGetCourse] = useState(courses);
  const categoryName = [...new Set(courses?.map((val) => val.category))];

  const filterItem = (cat) => {
    const newItem = courses.filter((newValue) => newValue.category === cat);
    setGetCourse(newItem);
  };

  return (
    <div className="flex md:px-[80px] px-[20px] md:py-[50px] py-[30px] gap-[30px]">
      <div className="w-[20%]">
        <div className="bg-[#efebf9] w-full py-[10px] px-[20px] rounded-[10px]">
          <div>
            <h4 className="md:text-[19px] text-[#06042e] font-[700] pb-[5px] border-b-2 border-[#ffffff]">
              Categories
            </h4>
          </div>
          <div className="flex items-center justify-center gap-[10px] flex-col py-[10px]">
            {categoryName?.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => filterItem(item)}
                  className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md"
                >
                  {item}
                </button>
              </div>
            ))}
            <button
              className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize"
              onClick={() => setGetCourse(courses)}
            >
              All Categories
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <div className="flex items-center justify-between w-full">
          <h4 className="md:text-[19px] text-[#06042e] font-[700] pb-[15px]">
            All Courses
          </h4>
          <div className="flex items-center gap-[10px]">
            <NavLink
              className={`h-[30px] rounded-md w-[30px] border-[1px] border-[#06042e] flex items-center justify-center`}
            >
              <CiGrid41 className="text-[20px]" />
            </NavLink>
            <NavLink
              className={`h-[30px] rounded-md w-[30px] border-[1px] border-[#06042e] flex items-center justify-center`}
            >
              <FaListUl className="text-[20px]" />
            </NavLink>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-[30px] gap-[20px] grid-cols-1">
          {getCourse?.map((item, index) => (
            <div key={index} className="card bg-[#ffffff] p-[20px]">
              <img className="rounded-[5px]" src={item?.image} alt="" />
              <div>
                <div className="flex items-center justify-between pt-[18px] pb-[10px]">
                  <p className="inline-block text-[15px] text-[#06042e] capitalize font-[600] bg-[#e8e8e8] py-[3px] px-[10px] rounded-full">
                    {item?.category}
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <FaStar className="text-[#ffc224]" />
                    <p className="text-[16px] font-[600] text-[#6d6969]">
                      (4.8 Reviews)
                    </p>
                  </div>
                </div>
                <h4 className="md:text-[19px] text-[#06042e] font-[700] line_fix">
                  {item?.name}
                </h4>
                <p className="text-[17px] font-[600] text-[#6d6969] pt-[3px]">
                  By {item?.techer}
                </p>
                <div className="flex items-center justify-between pt-[15px] pb-[10px]">
                  <Link
                    className="btnThree px-[20px] py-[6px] text-[16px]"
                    to={"/"}
                  >
                    Enroll Now
                  </Link>
                  <p className="font-bold text-[25px] text-[#5751e1]">
                    ${item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
