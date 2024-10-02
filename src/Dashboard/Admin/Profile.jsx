import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

const Profile = ({ data }) => {
  return (
    <div>
      <div className="font-bold flex items-center gap-[8px] text-[#272727] pb-[30px]">
        <FaUserAlt className="text-[20px]" />
        <h4>Profile Info</h4>
      </div>
      <table className="w-full table-auto">
        <tbody className="w-full ">
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:flex hidden">
              Name
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {data?.name}
            </td>
          </tr>
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:flex hidden">
              Email
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {data?.email}
            </td>
          </tr>
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:flex hidden">
              Phone
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {data?.phone}
            </td>
          </tr>
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:flex hidden">
              Skill/Occupation
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {data?.occupation}
            </td>
          </tr>
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:block hidden">
              Registration
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {formatDate(data?.createdAt)}
            </td>
          </tr>
          <tr className="w-full">
            <td className="md:w-[30%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize md:flex md:items-stretch hidden">
              Biography
            </td>
            <td className="md:w-[70%] md:py-[10px] md:px-[20px] text-[#666464] md:text-[18px] text-[17px] md:font-medium capitalize">
              {data?.bio}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
