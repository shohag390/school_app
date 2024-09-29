import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Profile = ({ data }) => {
  console.log(data, "Shohag");
  return (
    <div>
      <div className="flex items-center gap-[8px] pb-[30px]">
        <FaUserAlt />
        <h4 className="text-[18px] font-bold text-[#202020]">My Profile</h4>
      </div>
      <div>
        <img className="h-[200px] w-[200px]" src={data?.photo} alt="" />
        <div>
          <h4 className="text-[18px] uppercase font-semibold pt-[6px]">
            Name: {data?.name}
          </h4>
          <p className="">{data?.email}</p>
          <p>{data?.phone}</p>
          <p>{data?.occupation}</p>
          <p>{data?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
