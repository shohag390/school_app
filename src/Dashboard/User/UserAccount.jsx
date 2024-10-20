import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
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
import UserSetting from "./UserSetting";
import UserProfile from "./UserProfile";
import EnrolledCoursesUser from "./EnrolledCoursesUser";
import shepe01 from "../../assets/images/newsright.png";
import shepe02 from "../../assets/images/newsleft.png";

const UserAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/users/profile/me`
  );

  console.log(data);

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };

  const [tab, setTab] = useState("profile");

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:pb-[50px] md:pb-[40px] pb-[30px] lg:pt-[20px] md:pt-[15px] pt-[12px]">
          <div className="bg-[#6045ff] md:h-[200px] h-[100px] w-full relative md:flex items-center rounded-md justify-center overflow-hidden mb-[25px] hidden">
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
            <div className="flex gap-[20px] h-full w-full absolute px-[50px] items-center justify-between p-[20px]">
              <div className="flex items-center h-full gap-[20px] w-[20%]">
                <img
                  className="h-full w-[200px] border-[1px] box_style rounded-md"
                  src={data?.photo}
                  alt=""
                />
              </div>
              <div className="w-[60%] h-full flex justify-center items-center">
                <h4 className="text-[25px] text-[#fff] font-bold capitalize">
                  Welcome, {data?.name}
                </h4>
              </div>
              <div className="p-[10px] box_style rounded-md w-[20%]">
                <div>
                  <h4 className="text-[20px] text-[#fff] font-bold">
                    Contacts Info
                  </h4>
                </div>
                <div className="flex items-center justify-between md:pt-[6px] pt-[5px]">
                  <div className="h-[35px] w-[35px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaFacebookF />
                  </div>
                  <div className="h-[35px] w-[35px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaInstagram />
                  </div>
                  <div className="h-[35px] w-[35px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaLinkedinIn />
                  </div>
                  <div className="h-[35px] w-[35px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaWhatsapp />
                  </div>
                </div>
                <button className="flex items-center  gap-[6px] w-full justify-center py-[6px] px-[20px] border-[1px] border-[#ffffff] rounded text-[#fff] duration-500 mt-[10px]">
                  <FaPhoneAlt />
                  <span>{data?.phone}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden h-[5vh] w-full bg-[#f4f5f8] mb-[25px] flex items-center justify-between px-[20px]">
            <div>
              <h4 className="font-bold text-[#43392d] text-[18px]">
                User Menu
              </h4>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <MdMenuOpen className="text-[#43392d] text-[35px]" />
              ) : (
                <IoIosClose className="text-[#43392d] text-[35px]" />
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
                  <h4 className="text-center text-[20px] font-bold uppercase text-[#43392d] pt-[5px] pb-[4px]">
                    {data?.name}
                  </h4>
                  <p className="text-center leading-[8px] text-[18px] font-[500]">
                    {data?.occupation}
                  </p>
                </div>
              </div>
              <div className="pb-[10px]">
                <h4 className="text-[16px] text-[#43392d] uppercase font-bold">
                  Student Info
                </h4>
              </div>

              <div className="flex flex-col items-center gap-[10px]">
                <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
                  <button
                    onClick={() => setTab("profile")}
                    className={`${
                      tab === "profile" ? "text-[#6045ff]" : "text-[#43392d]"
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
                      tab === "order" ? "text-[#6045ff]" : "text-[#43392d]"
                    } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                  >
                    <FaBookReader className="text-[20px]" />
                    <span>Order History</span>
                  </button>
                </div>
                <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
                  <button
                    onClick={() => setTab("setting")}
                    className={`${
                      tab === "setting" ? "text-[#6045ff]" : "text-[#43392d]"
                    } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                  >
                    <IoIosSettings className="text-[20px]" />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
                  <button
                    onClick={handleLogout}
                    className="py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] text-[#43392d] font-bold"
                  >
                    <IoLogOutSharp className="text-[20px]" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:justify-between md:gap-[30px]">
            <div className="md:w-[25%] h-full md:block hidden">
              <div className=" bg-[#f4f5f8] box_shadow rounded-md p-[30px] h-full">
                <div>
                  <div className="pb-[10px]">
                    <h4 className="text-[18px] text-[#43392d] uppercase font-bold">
                      Student Info
                    </h4>
                  </div>
                  <div className="flex flex-col items-center gap-[10px]">
                    <button
                      onClick={() => setTab("profile")}
                      className={`${
                        tab === "profile" ? "text-[#6045ff]" : "text-[#43392d]"
                      } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                    >
                      <FaUserAlt className="text-[20px]" />
                      <span>My Profile</span>
                    </button>
                    <button
                      onClick={() => setTab("order")}
                      className={`${
                        tab === "order" ? "text-[#6045ff]" : "text-[#43392d]"
                      } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                    >
                      <FaBookReader className="text-[20px]" />
                      <span>Order History</span>
                    </button>
                  </div>
                </div>
                <div className="pt-[20px]">
                  <div className="pb-[10px]">
                    <h4 className="text-[18px] text-[#43392d] uppercase font-bold">
                      Setting Info
                    </h4>
                  </div>
                  <div>
                    <button
                      onClick={() => setTab("setting")}
                      className={`${
                        tab === "setting" ? "text-[#6045ff]" : "text-[#43392d]"
                      } py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] font-bold `}
                    >
                      <IoIosSettings className="text-[20px]" />
                      <span>Settings</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="py-[8px] px-[20px] hover:text-[#6045ff] rounded-md w-full flex items-center gap-[8px] text-[#43392d] font-bold"
                    >
                      <IoLogOutSharp className="text-[20px]" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[75%] bg-[#f4f5f8] h-full box_shadow rounded-md md:p-[30px] p-[15px]">
              {tab === "profile" && <UserProfile data={data} />}
              {tab === "order" && <EnrolledCoursesUser data={data} />}
              {tab === "setting" && <UserSetting data={data} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAccount;
