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
import {
  FaBookBookmark,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMessage,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import shap1 from "../../assets/images/banner.png";

const AdminAccount = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/instactor/profile/me`
  );

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };

  const [tab, setTab] = useState("profile");
  return (
    <div className="md:px-[80px] px-[20px] md:py-[40px] py-[20px]">
      <div className="h-[180px] w-full rounded-md mb-[40px] bg_image px-[100px] flex items-center justify-between">
        <img
          className="h-[150px] w-[150px] border-[3px] border-[#ffa03a] rounded-md"
          src={data?.photo}
          alt=""
        />
        <div className="pt-[8px]">
          <h4 className="font-bold uppercase text-[30px] leading-[35px] text-[#ffffff]">
            Welcome, {data?.name}
          </h4>
          <p className="text-[#ffffff] font-bold">{data?.occupation}</p>
          <div className="flex items-center gap-[10px] pt-[10px]">
            <div className="box_style h-[35px] w-[35px] rounded-full text-[#ffffff] flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="box_style h-[35px] w-[35px] rounded-full text-[#ffffff] flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="box_style h-[35px] w-[35px] rounded-full text-[#ffffff] flex items-center justify-center">
              <FaLinkedinIn />
            </div>
            <div className="box_style h-[35px] w-[35px] rounded-full text-[#ffffff] flex items-center justify-center">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex md:justify-between md:gap-[30px]">
        <div className="md:w-[25%] h-full md:block hidden">
          <div className=" bg-[#f4f5f8] box_shadow rounded-md p-[30px] h-full">
            <div>
              <div className="pb-[10px]">
                <h4 className="text-[16px] text-[#272727] uppercase font-bold">
                  Instructor Info
                </h4>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <button
                  onClick={() => setTab("profile")}
                  className={`${
                    tab === "profile" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <FaUserAlt className="text-[20px]" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => setTab("order")}
                  className={`${
                    tab === "order" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <FaBookReader className="text-[20px]" />
                  <span>Order History</span>
                </button>
                <button
                  onClick={() => setTab("mycourse")}
                  className={`${
                    tab === "mycourse" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <FaBookBookmark className="text-[20px]" />
                  <span>My Courses</span>
                </button>
                <button
                  onClick={() => setTab("mymessage")}
                  className={`${
                    tab === "mymessage" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <FaMessage className="text-[20px]" />
                  <span>My Message</span>
                </button>
              </div>
            </div>
            <div>
              <div className="pt-[30px] pb-[10px]">
                <h4 className="text-[16px] text-[#272727] uppercase font-bold">
                  setting & upload
                </h4>
              </div>
              <div>
                <button
                  onClick={() => setTab("uploadcourse")}
                  className={`${
                    tab === "uploadcourse" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <IoMdCloudUpload className="text-[20px]" />
                  <span>Upload Course</span>
                </button>
                <button
                  onClick={() => setTab("uploadmessage")}
                  className={`${
                    tab === "uploadmessage"
                      ? "text-[#6045ff]"
                      : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <BsSendFill className="text-[20px]" />
                  <span>Upload Message</span>
                </button>
                <button
                  onClick={() => setTab("setting")}
                  className={`${
                    tab === "setting" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <IoIosSettings className="text-[20px]" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] text-[#666464] font-bold"
                >
                  <IoLogOutSharp className="text-[20px]" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[75%] bg-[#f4f5f8] h-full box_shadow rounded-md p-[30px]">
          {tab === "profile" && <Profile data={data} />}
          {tab === "order" && <EnrolledCourses />}
          {tab === "mycourse" && <MyUploadCourses data={data} />}
          {tab === "uploadcourse" && <UploadCourses />}
          {tab === "uploadmessage" && <UploadCourses />}
          {tab === "mymessage" && <UploadCourses />}
          {tab === "setting" && <Settings data={data} />}
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
