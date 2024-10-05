import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

const Profile = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[#272727] pb-[30px]">
        <FaUserAlt className="text-[20px]" />
        <h4>Profile Info</h4>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Name:</h4>
          <h4 className="w-[75%]">{data?.name}</h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Email:</h4>
          <h4 className="w-[75%]">{data?.email}</h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Phone:</h4>
          <h4 className="w-[75%]">{data?.phone}</h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Skill/Occupation:</h4>
          <h4 className="w-[75%]">{data?.occupation}</h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Registration Date:</h4>
          <h4 className="w-[75%]">{formatDate(data?.createdAt)}</h4>
        </div>
        <div className="text-[17px] font-medium md:p-[4px] p-[10px] md:flex md:justify-between items-start text-[#272727] md:bg-transparent bg-[#fff] rounded-md">
          <h4 className="mmd:pb-0 pb-[3px] md:w-[25%]">Biography:</h4>
          <h4 className="w-[75%]">{data?.bio}</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
