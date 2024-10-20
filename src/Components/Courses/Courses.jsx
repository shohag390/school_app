import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/course`);
  console.log(data);

  const topEight = data?.slice(0, 8);

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div className="bg-[#f4f5f8] lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Trending Courses
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Popular <span className="text-[#ffa03a] text_style">Courses</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[30px] gap-[20px] md:py-[35px] py-[25px]">
          {topEight?.map((item) => (
            <Link to={`/courses/${item?._id}`} key={item?._id}>
              <div
                className="bg-[#ffffff] p-[15px] rounded-md duration-500 hover_effect"
                data-aos="zoom-in-up"
              >
                <img
                  className="w-full md:h-[160px] h-[200px] rounded-sm"
                  src={item?.photo}
                  alt=""
                />
                <div>
                  <h4 className="categori_name text-[20px] text-[#43392d] font-bold pt-[8px] line-clamp-1">
                    {item?.name}
                  </h4>

                  <p className="text-[16px] text-[#666464] font-medium leading-[15px] pb-[15px] capitalize">
                    {item.instactor?.name}
                  </p>

                  <p className="line-clamp-2 text-[#43392d] md:text-[18px] text-[17px] md:font-medium">
                    {item?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pb-[5px] pt-[10px] border-t-[1px] border-[#43392d] md:mt-[15px] mt-[10px]">
                  <div className="flex items-center gap-[4px]">
                    <IoDocumentText className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      {item?.quizzes}
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px] ">
                    <MdCalendarMonth className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      {item?.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <MdPriceChange className="course_icone text-[20px] text-[#666464]" />
                    <p className="text-[16px] font-medium text-[#43392d]">
                      ${item?.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center w-full">
        <Link className="btn py-[10px] px-[30px] rounded-md" to={"/allcourses"}>
          All Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
