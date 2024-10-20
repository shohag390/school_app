import React, { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfile = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[18px] text-[#43392d] capitalize pb-[30px]">
        <FaUserAlt className="text-[20px]" />
        <h4>Profile Info</h4>
      </div>
      <div className="flex flex-col gap-[10px]" data-aos="zoom-in-up">
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Name:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%] capitalize">
            {data?.name}
          </h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Email:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%]">
            {data?.email}
          </h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Phone:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%]">
            {data?.phone}
          </h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Skill/Occupation:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%] capitalize">
            {data?.occupation}
          </h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Registration Date:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%]">
            {formatDate(data?.createdAt)}
          </h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[2px] md:w-[25%]">
            Biography:
          </h4>
          <h4 className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal md:w-[75%]">
            {data?.bio}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
