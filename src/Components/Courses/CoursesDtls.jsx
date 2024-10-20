import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL, token } from "../../config";
import {
  FaClipboardList,
  FaFacebookF,
  FaGift,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaStar,
  FaTwitter,
  FaUser,
  FaUserAlt,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import {
  MdCalendarMonth,
  MdLanguage,
  MdPriceChange,
  MdPublishedWithChanges,
} from "react-icons/md";
import ReviewFrom from "./ReviewFrom";
import Rating from "react-rating";
import { formatDate } from "../../utils/formatDate";
import { TiStarFullOutline } from "react-icons/ti";
import { GiDuration } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiCertificateBold } from "react-icons/pi";
import { toast } from "react-toastify";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

const CoursesDtls = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showFeedback, setShowFeedback] = useState(false);
  const [tab, setTab] = useState("overview");

  const { data, loading, error } = useGetProfile(`${BASE_URL}/course/${id}`);

  console.log(data);

  const orderHandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/checkout-session/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
      navigate("/courses");
    } catch (error) {
      toast.error(err.message);
      setLoad(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px] md:flex md:justify-between md:gap-[80px] overflow-hidden">
          <div className="md:w-[80%] h-full" data-aos="zoom-out-right">
            {/* ---------Image Section Here--------- */}
            <div>
              <img
                className="w-full lg:h-[350px] h-[200px] rounded-md"
                src={data?.photo}
                alt=""
              />
            </div>
            {/* ---------Image Section Close--------- */}

            {/* ----------Course Dtls here---------- */}
            <div className="pt-[20px] flex md:items-center md:flex-row flex-col md:justify-between md:gap-0 gap-[10px]">
              {/* -------Instactor Dtls Here------ */}
              <div className="flex items-center gap-[10px]">
                <img
                  className="h-[60px] w-[60px] rounded-full"
                  src={data?.instactor?.photo}
                  alt=""
                />
                <div>
                  <h4 className="text-[20px] text-[#272727] font-bold capitalize">
                    {data?.instactor?.name}
                  </h4>
                  <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize">
                    {data?.instactor?.occupation}
                  </p>
                </div>
              </div>

              <div className="">
                <h4 className="text-[20px] text-[#272727] font-bold capitalize">
                  Reviews
                </h4>
                <div className="flex items-center gap-[10px]">
                  <Rating
                    className="mt-[3px]"
                    initialRating={data?.averageRating}
                    readonly
                    emptySymbol={
                      <FaStar className="text-[#666464] text-[16px]" />
                    }
                    fullSymbol={
                      <FaStar className="text-[#ffa03a] text-[16px]" />
                    }
                  />
                  <p className="text-[16px] text-[#666464] font-medium capitalize">
                    ({data?.totalRating} Reviews)
                  </p>
                </div>
              </div>

              <div className="">
                <h4 className="text-[20px] text-[#272727] font-bold capitalize">
                  Categories
                </h4>
                <p className="text-[16px] text-[#666464] font-medium capitalize">
                  {data?.categorie}
                </p>
              </div>

              {/* -------Instactor Dtls Close------ */}
            </div>
            {/* ----------Course Dtls Close---------- */}

            {/* ------------Button Section Here----------- */}
            <div className="flex items-center justify-between md:gap-[30px] gap-[8px] pt-[30px] pb-[20px]">
              <button
                onClick={() => setTab("overview")}
                className={`${
                  tab === "overview"
                    ? "bg-[#6045ff] text-[#ffffff]"
                    : "bg-[#f4f5f8] text-[#272727] btn_icone"
                } flex items-center gap-[8px] py-[10px] w-full justify-center md:font-bold font-medium rounded-md duration-500`}
              >
                <div>
                  <IoIosBookmark />
                </div>
                <span>Overview</span>
              </button>
              <button
                onClick={() => setTab("instructor")}
                className={`${
                  tab === "instructor"
                    ? "bg-[#6045ff] text-[#ffffff]"
                    : "bg-[#f4f5f8] text-[#272727] btn_icone"
                } flex items-center gap-[8px] py-[10px] w-full justify-center md:font-bold font-medium rounded-md duration-500`}
              >
                <div>
                  <FaUser />
                </div>
                <span>Instructor</span>
              </button>
              <button
                onClick={() => setTab("review")}
                className={`${
                  tab === "review"
                    ? "bg-[#6045ff] text-[#ffffff]"
                    : "bg-[#f4f5f8] text-[#272727] btn_icone"
                } flex items-center gap-[8px] py-[10px] w-full justify-center md:font-bold font-medium rounded-md duration-500`}
              >
                <div>
                  <FaStar />
                </div>
                <span>Review</span>
              </button>
            </div>
            {/* ------------Button Section Close----------- */}

            <div className="pt-[20px]">
              {/* ---------OverView Section Here----------  */}
              {tab === "overview" && (
                <div>
                  <div>
                    <h4 className="md:text-[25px] text-[20px] font-bold text-[#43392d] md:pb-[10px] pb-[6px]">
                      Course Overview
                    </h4>
                    <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal">
                      {data?.description}
                    </p>
                    <ul className="pt-[20px] list-decimal pl-[40px]">
                      <li className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[5px]">
                        The duration of this course is 5 months .
                      </li>
                      <li className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[5px]">
                        You will be given full amount of guidelines in this
                        course.
                      </li>
                      <li className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[5px]">
                        Doing this will teach you many lessons
                      </li>
                      <li className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[5px]">
                        This course has many quizzes through which your skills
                        will be tested
                      </li>
                    </ul>
                  </div>
                  <div className="pt-[20px]">
                    <div className="flex items-center justify-between">
                      <h4 className="md:text-[25px] text-[20px] md:font-bold font-semibold text-[#272727] pb-[15px]">
                        More Course By{" "}
                        <span className="text-[#6045ff]">
                          {data?.instactor?.name}
                        </span>
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-3 gap-[20px]">
                      {data?.instactor?.course?.map((item) => (
                        <Link
                          to={`/courses/${item?._id}`}
                          key={item?._id}
                          className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
                        >
                          <img
                            className="w-full md:h-[160px] h-[200px] rounded-sm"
                            src={item?.photo}
                            alt=""
                          />
                          <div>
                            <h4 className="categori_name text-[20px] text-[#272727] font-bold pt-[8px]">
                              {item?.categorie}
                            </h4>

                            <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px]">
                              {data.instactor?.name}
                            </p>

                            <p className="line-clamp-2 text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                              {item?.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#666464] md:mt-[15px] mt-[10px]">
                            <div className="flex items-center gap-[4px]">
                              <IoDocumentText className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                {item?.quizzes}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px] ">
                              <MdCalendarMonth className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                {item?.duration}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px]">
                              <MdPriceChange className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                ${item?.price}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* ---------OverView Section Close----------  */}

              {/* -------------Instactor Section Here------------- */}
              {tab === "instructor" && (
                <div>
                  <div>
                    <h4 className="md:text-[25px] text-[20px] font-bold text-[#43392d] md:pb-[10px] pb-[6px]">
                      Instructor
                    </h4>
                    <div className="p-[30px] bg-[#f4f5f8] rounded-md md:flex md:justify-between md:items-center md:gap-[40px]">
                      <div className="md:w-[35%]">
                        <img
                          className="h-[350px] rounded-md w-full border-[1px] border-[#fff]"
                          src={data?.instactor?.photo}
                          alt=""
                        />
                      </div>
                      <div className="md:w-[65%] md:pt-0 pt-[15px]">
                        <h4 className="md:text-[24px] text-[20px] text-[#43392d] font-bold">
                          {data?.instactor?.name}
                        </h4>
                        <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize">
                          {data?.instactor?.occupation}
                        </p>
                        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal py-[15px]">
                          {data?.instactor?.bio}
                        </p>
                        <div className="flex items-center gap-[10px]">
                          <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                            <FaFacebookF />
                          </div>
                          <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                            <FaTwitter />
                          </div>
                          <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                            <FaWhatsapp />
                          </div>
                          <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                            <FaInstagram />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-[30px]">
                    <div className="flex items-center justify-between">
                      <h4 className="md:text-[25px] text-[20px] md:font-bold font-semibold text-[#272727] pb-[15px]">
                        More Course By{" "}
                        <span className="text-[#6045ff]">
                          {data?.instactor?.name}
                        </span>
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-3 gap-[20px]">
                      {data?.instactor?.course?.map((item) => (
                        <Link
                          to={`/courses/${item?._id}`}
                          key={item?._id}
                          className="bg-[#ffffff] p-[15px] rounded-md hover_effect"
                        >
                          <img
                            className="w-full md:h-[160px] h-[200px] rounded-sm"
                            src={item?.photo}
                            alt=""
                          />
                          <div>
                            <h4 className="categori_name text-[20px] text-[#272727] font-bold pt-[8px]">
                              {item?.categorie}
                            </h4>

                            <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px]">
                              {data.instactor?.name}
                            </p>

                            <p className="line-clamp-2 text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                              {item?.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#666464] md:mt-[15px] mt-[10px]">
                            <div className="flex items-center gap-[4px]">
                              <IoDocumentText className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                {item?.quizzes}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px] ">
                              <MdCalendarMonth className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                {item?.duration}
                              </p>
                            </div>
                            <div className="flex items-center gap-[4px]">
                              <MdPriceChange className="course_icone text-[20px] text-[#666464]" />
                              <p className="text-[16px] font-medium text-[#666464]">
                                ${item?.price}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* -------------Instactor Section Close------------- */}

              {/* -------------Review Section Here----------- */}
              {tab === "review" && (
                <div>
                  <div className="pb-[30px]">
                    <h4 className="md:text-[25px] text-[20px] font-bold text-[#43392d] pb-[20px]">
                      All review <span>({data?.totalRating})</span>
                    </h4>
                    <div className="flex flex-col gap-[30px]">
                      {data?.reviews?.map((item) => (
                        <div key={item?._id} className="flex gap-[15px]">
                          <div className="md:w-[6%] w-[15%]">
                            <img
                              className="rounded-full"
                              src={item?.user?.photo}
                              alt=""
                            />
                          </div>
                          <div className="md:w-[94%] w-[85%] h-[100%]">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="md:text-[20px] text-[16px] text-[#43392d] font-bold capitalize">
                                  {item?.user?.name}
                                </h4>
                                <p className="text-[16px] text-[#666464] font-medium leading-[15px] capitalize">
                                  {formatDate(item?.createdAt)}
                                </p>
                              </div>
                              <Rating
                                className="mt-[3px]"
                                initialRating={data?.averageRating}
                                readonly
                                emptySymbol={
                                  <FaStar className="text-[#666464] md:text-[16px] text-[12px]" />
                                }
                                fullSymbol={
                                  <FaStar className="text-[#ffa03a] md:text-[16px] text-[12px]" />
                                }
                              />
                            </div>
                            <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pt-[15px]">
                              {item?.reviewText}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    {!showFeedback && (
                      <div className="text-center">
                        <button
                          onClick={() => setShowFeedback(true)}
                          className="md:py-[10px] py-[8px] px-[30px] mt-[30px] btn rounded-md"
                        >
                          Give Feedback
                        </button>
                      </div>
                    )}
                    {showFeedback && <ReviewFrom />}
                  </div>
                </div>
              )}
            </div>
            {/* ------------Review Section Close----------- */}
          </div>

          {/* --------Left Side Close--------- */}

          {/* --------Right Side Start--------- */}

          <div
            className="md:w-[30%] h-full md:mt-0 mt-[30px]"
            data-aos="zoom-out-left"
          >
            <div className="border-2 p-[20px] rounded-md">
              <div className="pb-[35px]">
                <h4 className="text-[#43392d] text-[30px] font-bold">
                  ${data?.price}{" "}
                  <span className="text-[18px] font-medium text-[#666464] line-through">
                    $210
                  </span>
                </h4>
                <button
                  onClick={orderHandeler}
                  className="md:py-[10px] py-[9px] w-full mt-[15px] btn rounded-md"
                >
                  Enroll Now
                </button>
              </div>
              <div className="flex flex-col pb-[30px]">
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <MdPublishedWithChanges className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Published
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    {formatDate(data?.createdAt)}
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <FaUserAlt className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Instructor
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    {data?.instactor?.name}
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <FaClipboardList className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Lectures
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    {data?.lessons}
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <GiDuration className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Duration
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    {data?.duration}
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <FaUsers className="text-[18px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Enrolled
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    2K Student
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <LiaCertificateSolid className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#666464]">
                      Course level
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    Intermediate
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <MdLanguage className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#666464]">
                      Language
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    English
                  </p>
                </div>
                <div className="flex items-center justify-between border-b py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <PiCertificateBold className="text-[18px] text-[#43392d]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Certificate
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">
                    {data?.certifications}
                  </p>
                </div>
                <div className="flex items-center justify-between py-[15px]">
                  <div className="flex items-center gap-[6px]">
                    <FaGift className="text-[18px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      Pass Percentage
                    </p>
                  </div>
                  <p className="text-[16px] font-medium text-[#43392d]">89%</p>
                </div>
              </div>
              <div className="bg-[#f4f5f8] rounded-md p-[20px]">
                <h4 className="text-center text-[20px] font-bold">
                  Share It On
                </h4>
                <div className="flex items-center gap-[10px] w-full justify-center py-[20px]">
                  <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaFacebookF />
                  </div>
                  <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaLinkedinIn />
                  </div>
                  <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaYoutube />
                  </div>
                  <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaTwitter />
                  </div>
                  <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                    <FaInstagram />
                  </div>
                </div>
                <button className="flex items-center  gap-[6px] w-full justify-center py-[8px] border-[1px] border-[#6145ff] rounded text-[#43392d] btn_icone duration-500">
                  <FaPhoneAlt />
                  <span>Call Us: {data?.instactor?.phone}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesDtls;
