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
import { IoIosClose, IoIosSettings, IoMdCloudUpload } from "react-icons/io";
import {
  FaBookBookmark,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { MdMenuOpen } from "react-icons/md";

const AdminAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="md:h-[180px] h-[100px] w-full rounded-md md:mb-[40px] mb-[25px] bg_image md:px-[100px] px-[20px] md:flex md:items-center md:justify-between hidden">
          <img
            className="md:h-[150px] h-[70px] md:w-[150px] w-[70px] md:border-[3px] border-[1px] border-[#ffa03a] rounded-md"
            src={data?.photo}
            alt=""
          />
          <div className="md:pt-[8px]">
            <h4 className="md:font-bold md:uppercase md:text-[30px] md:leading-[35px] leading-[20px] text-[#ffffff]">
              {data?.name}
            </h4>
            <p className="text-[#ffffff] md:font-bold md:text-[18px] text-[12px]">
              {data?.occupation}
            </p>
            <div className="flex items-center md:gap-[10px] gap-[6px] md:pt-[10px] pt-[5px]">
              <div className="box_style md:h-[35px] h-[25px] w-[25px] md:w-[35px] rounded-full text-[#ffffff] flex items-center justify-center md:hover:translate-y-[-6px] hover:translate-y-[-3px] duration-500">
                <FaFacebookF />
              </div>
              <div className="box_style md:h-[35px] h-[25px] w-[25px] md:w-[35px] rounded-full text-[#ffffff] flex items-center justify-center md:hover:translate-y-[-6px] hover:translate-y-[-3px] duration-500">
                <FaInstagram />
              </div>
              <div className="box_style md:h-[35px] h-[25px] w-[25px] md:w-[35px] rounded-full text-[#ffffff] flex items-center justify-center md:hover:translate-y-[-6px] hover:translate-y-[-3px] duration-500">
                <FaLinkedinIn />
              </div>
              <div className="box_style md:h-[35px] h-[25px] w-[25px] md:w-[35px] rounded-full text-[#ffffff] flex items-center justify-center md:hover:translate-y-[-6px] hover:translate-y-[-3px] duration-500">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden h-[5vh] w-full bg-[#f4f5f8] mb-[25px] flex items-center justify-between px-[20px]">
        <div>
          <h4 className="font-bold text-[#272727] text-[18px]">User Menu</h4>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <MdMenuOpen className="text-[#272727] text-[35px]" />
          ) : (
            <IoIosClose className="text-[#272727] text-[35px]" />
          )}
        </button>
      </div>

      <div
        className={`${
          !isOpen ? "left-[-100%]" : "left-0"
        } absolute h-[100%] duration-500 top-[8vh] w-[70%] z-40  bg-[#ffffff]`}
      >
        <div className="p-[30px]">
          <div className="mb-[30px]">
            <img
              className="h-[200px] w-full rounded-md"
              src={data?.photo}
              alt=""
            />
            <div>
              <h4 className="text-center text-[20px] font-bold uppercase text-[#272727] pt-[5px] pb-[4px]">
                {data?.name}
              </h4>
              <p className="text-center leading-[8px] text-[18px] font-[500]">
                {data?.occupation}
              </p>
            </div>
          </div>
          <div className="pb-[10px]">
            <h4 className="text-[16px] text-[#272727] uppercase font-bold">
              Instructor Info
            </h4>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
              <button
                onClick={() => setTab("profile")}
                className={`${
                  tab === "profile" ? "text-[#6045ff]" : "text-[#666464]"
                } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
              >
                <FaUserAlt className="text-[20px]" />
                <span>My Profile</span>
              </button>
            </div>
            <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
              <button
                onClick={() => setTab("order")}
                className={`${
                  tab === "order" ? "text-[#6045ff]" : "text-[#666464]"
                } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
              >
                <FaBookReader className="text-[20px]" />
                <span>Order History</span>
              </button>
            </div>
            <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
              <button
                onClick={() => setTab("mycourse")}
                className={`${
                  tab === "mycourse" ? "text-[#6045ff]" : "text-[#666464]"
                } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
              >
                <FaBookBookmark className="text-[20px]" />
                <span>My Courses</span>
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
              <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <button
                  onClick={() => setTab("uploadcourse")}
                  className={`${
                    tab === "uploadcourse" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <IoMdCloudUpload className="text-[20px]" />
                  <span>Upload Course</span>
                </button>
              </div>
              <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
                <button
                  onClick={() => setTab("setting")}
                  className={`${
                    tab === "setting" ? "text-[#6045ff]" : "text-[#666464]"
                  } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                >
                  <IoIosSettings className="text-[20px]" />
                  <span>Settings</span>
                </button>
              </div>
              <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
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
        <div className="md:w-[75%] bg-[#f4f5f8] h-full box_shadow rounded-md md:p-[30px] p-[15px]">
          {tab === "profile" && <Profile data={data} />}
          {tab === "order" && <EnrolledCourses />}
          {tab === "mycourse" && <MyUploadCourses data={data} />}
          {tab === "uploadcourse" && <UploadCourses />}
          {tab === "setting" && <Settings data={data} />}
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
