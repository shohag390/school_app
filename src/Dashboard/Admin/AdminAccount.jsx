import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader, FaUserAlt } from "react-icons/fa";
import Profile from "./Profile";
import EnrolledCourses from "./EnrolledCourses";
import MyUploadCourses from "./MyUploadCourses";
import UploadCourses from "./UploadCourses";
import Settings from "./Settings";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import { authContext } from "../../context/AuthContext";
import { IoIosSettings, IoMdCloudUpload } from "react-icons/io";
import { FaBookBookmark } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";

const AdminAccount = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/instactor/profile/me`
  );

  console.log(data, "Bappy");

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const [tab, setTab] = useState("profile");
  return (
    <div className="h-[90vh] px-[20px] md:px-[80px] md:py-[30px]">
      <div className="h-[30vh] w-full bg-[#140f86]"></div>
      <div className="h-[60vh] w-full bg-[#ffffff]">
        <div className=""></div>
        <div></div>
      </div>
    </div>
  );
};

export default AdminAccount;

{
  /* <div className="flex justify-between gap-[30px] md:px-[80px] px-[20px] md:py-[30px] bg-[#efebf9]">
<div className="w-[20%] bg-[#ffffff] flex flex-col gap-[10px] px-[15px] py-[20px]">
  <button
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
    onClick={() => setTab("profile")}
  >
    <FaUserAlt />
    <p>My Profile</p>
  </button>
  <button
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
    onClick={() => setTab("enrolled")}
  >
    <FaBookReader />
    <p>Enrolled Courses</p>
  </button>
  <button
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
    onClick={() => setTab("uploadcourse")}
  >
    <IoMdCloudUpload />
    <p>Upload Course</p>
  </button>
  <button
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
    onClick={() => setTab("myuploadcourses")}
  >
    <FaBookBookmark />
    <p>My Upload Courses</p>
  </button>
  <button
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
    onClick={() => setTab("settings")}
  >
    <IoIosSettings />
    <p>Settings</p>
  </button>
  <button
    onClick={handleLogout}
    className="py-[8px] w-full bg-[#bdb9ff] hover:bg-[#5751e1] text-[#06042e] font-medium hover:text-[#ffffff] capitalize rounded-md flex items-center gap-[8px] px-[20px]"
  >
    <IoLogOutSharp />
    <p>Logout</p>
  </button>
</div>
<div className="w-[80%] h-[80vh] px-[40px] bg-[#ffffff]">
  {tab === "profile" && <Profile data={data} />}
  {tab === "enrolled" && <EnrolledCourses />}
  {tab === "myuploadcourses" && <MyUploadCourses />}
  {tab === "uploadcourse" && <UploadCourses />}
  {tab === "settings" && <Settings />}
</div>
</div> */
}
