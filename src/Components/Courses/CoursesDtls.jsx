import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import {
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaTwitter,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth, MdPriceChange } from "react-icons/md";
import ReviewFrom from "./ReviewFrom";
import Rating from "react-rating";
import { formatDate } from "../../utils/formatDate";
import { TiStarFullOutline } from "react-icons/ti";

const CoursesDtls = () => {
  const { id } = useParams();
  const [showFeedback, setShowFeedback] = useState(false);
  const [tab, setTab] = useState("overview");

  const { data, loading, error } = useGetProfile(`${BASE_URL}/course/${id}`);

  console.log(data);

  return (
    <div className="md:px-[80px] px-[20px] md:py-[40px] py-[25px] flex justify-between gap-[30px]">
      <div className="w-[80%] h-full">
        <div>
          <img className="w-full h-[350px]" src={data?.photo} alt="" />
        </div>
        <div className="pt-[20px] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img
              className="h-[60px] w-[60px] rounded-full"
              src={data.instactor?.photo}
              alt=""
            />
            <div>
              <h4 className="text-[20px] font-[900] capitalize text-[#272727] leading-[20px]">
                {data.instactor?.name}
              </h4>
              <p className="text-[#666464] leading-[20px] font-bold text-[14px]">
                {data.instactor?.occupation}
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[20px] font-[900] capitalize text-[#272727] leading-[20px]">
              Categories
            </h4>
            <p className="text-[#666464] leading-[20px] font-bold text-[14px]">
              {data?.categorie}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[30px] pt-[30px]">
          <button
            onClick={() => setTab("overview")}
            className={`${
              tab === "overview"
                ? "bg-[#6045ff] text-[#ffffff]"
                : "bg-[#f4f5f8] text-[#272727]"
            } flex items-center gap-[8px] py-[10px] w-full justify-center font-bold rounded-md`}
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
                : "bg-[#f4f5f8] text-[#272727]"
            } flex items-center gap-[8px] py-[10px] w-full justify-center  font-bold rounded-md`}
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
                : "bg-[#f4f5f8] text-[#272727]"
            } flex items-center gap-[8px] py-[10px] w-full justify-center  font-bold rounded-md`}
          >
            <div>
              <FaStar />
            </div>
            <span>Review</span>
          </button>
        </div>
        <div className="pt-[20px]">
          {tab === "overview" && (
            <div>
              <div>
                <h4 className="text-[25px] font-bold text-[#272727] pb-[10px] ">
                  Course Overview
                </h4>
                <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium">
                  {data?.description}
                </p>
                <ul className="pt-[20px] list-decimal pl-[40px]">
                  <li className="text-[#666464] md:text-[18px] text-[17px] md:font-medium pb-[5px]">
                    The duration of this course is 5 months .
                  </li>
                  <li className="text-[#666464] md:text-[18px] text-[17px] md:font-medium pb-[5px]">
                    You will be given full amount of guidelines in this course.
                  </li>
                  <li className="text-[#666464] md:text-[18px] text-[17px] md:font-medium pb-[5px]">
                    Doing this will teach you many lessons
                  </li>
                  <li className="text-[#666464] md:text-[18px] text-[17px] md:font-medium pb-[5px]">
                    This course has many quizzes through which your skills will
                    be tested
                  </li>
                </ul>
              </div>
              <div className="pt-[20px]">
                <div className="flex items-center justify-between">
                  <h4 className="text-[25px] font-bold text-[#272727] pb-[10px] ">
                    More Course By{" "}
                    <span className="text-[#6045ff]">
                      {data?.instactor?.name}
                    </span>
                  </h4>
                  <Link
                    className="py-[10px] px-[30px] border-[2px] border-[#272727] rounded-md font-bold hover:bg-[#6045ff] hover:text-[#ffffff] duration-500 hover:border-[#6045ff]"
                    to={"/allcourses"}
                  >
                    All Courses
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-[20px] pt-[20px]">
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
          {tab === "instructor" && (
            <div>
              <div>
                <h4 className="text-[25px] font-bold text-[#272727] pb-[20px] ">
                  Instructor
                </h4>
                <div className="p-[30px] bg-[#f4f5f8] rounded-md flex justify-between items-center gap-[40px]">
                  <div className="w-[35%]">
                    <img
                      className="h-[350px] rounded-md w-full border-[2px] border-[#272727]"
                      src={data?.instactor?.photo}
                      alt=""
                    />
                  </div>
                  <div className="w-[65%]">
                    <h4 className="text-[25px] leading-[25px] font-bold text-[#272727]">
                      {data?.instactor?.name}
                    </h4>
                    <p className="text-[16px] font-bold text-[#666464] pb-[10px]">
                      {data?.instactor?.occupation}
                    </p>
                    <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium pb-[15px]">
                      {data?.instactor?.bio}
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#ffffff] hover:bg-[#6045ff] hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                        <FaFacebookF />
                      </div>
                      <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#ffffff] hover:bg-[#6045ff] hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                        <FaTwitter />
                      </div>
                      <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#ffffff] hover:bg-[#6045ff] hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                        <FaWhatsapp />
                      </div>
                      <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#ffffff] hover:bg-[#6045ff] hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-[30px]">
                <div className="flex items-center justify-between">
                  <h4 className="text-[25px] font-bold text-[#272727] pb-[10px] ">
                    More Course By{" "}
                    <span className="text-[#6045ff]">
                      {data?.instactor?.name}
                    </span>
                  </h4>
                  <Link
                    className="py-[10px] px-[30px] border-[2px] border-[#272727] rounded-md font-bold hover:bg-[#6045ff] hover:text-[#ffffff] duration-500 hover:border-[#6045ff]"
                    to={"/allcourses"}
                  >
                    All Courses
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-[20px] pt-[20px]">
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
          {tab === "review" && (
            <div>
              <div>
                <h4 className="text-[25px] font-bold text-[#272727] pb-[20px] ">
                  Review <span>({data?.totalRating})</span>
                </h4>
                <div>
                  {data?.reviews?.map((item) => (
                    <div key={item?._id} className="flex flex-col gap-[15px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center gap-[10px]">
                          <img
                            className="h-[50px] w-[50px] rounded-full border-[1px] border-[#272727]"
                            src={item?.user?.photo}
                            alt=""
                          />
                          <div>
                            <h4>{item?.user?.name}</h4>
                            <p>{formatDate(item?.createdAt)}</p>
                          </div>
                        </div>
                        <div>
                          <Rating
                            readonly
                            initialRating={item?.rating}
                            emptySymbol={
                              <TiStarFullOutline className="text-[#666464]" />
                            }
                            fullSymbol={
                              <TiStarFullOutline className="text-[#ffa03a]" />
                            }
                          />
                        </div>
                      </div>
                      <p className="pl-[50px]">"{item?.reviewText}"</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {!showFeedback && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowFeedback(true)}
                      className="btnOne py-[10px] px-[30px]"
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
      </div>
      <div className="w-[30%] h-full"></div>
    </div>
  );
};

export default CoursesDtls;
