import { useEffect } from "react";
import { blogs } from "../../assets/data/blog";
import { FaCalendarCheck, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full lg:py-[50px] md:py-[40px] py-[30px] bg-[#f4f5f8]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Blog & News
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Latest From Our{" "}
          <span className="text-[#ffa03a] text_style">Blogs</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px]">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-[30px] gap-[20px] md:py-[35px] py-[25px]">
        {blogs?.map((item, index) => (
          <div
            data-aos="zoom-in-up"
            className="bg-[#ffffff] p-[15px] hover_effect rounded-md"
            key={index}
          >
            <img className="rounded-[5px]" src={item?.image} alt="image" />
            <div>
              <div className="flex items-center justify-between pt-[10px] pb-[15px] text-[#43392d]">
                <div className="flex items-center gap-[5px]">
                  <FaCalendarCheck />
                  <p className="text-[#43392d] font-bold">{item?.date}</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FaUser />
                  <p className="text-[#43392d] font-bold">{item?.post}</p>
                </div>
              </div>
              <h4 className="line-clamp-2 categori_name text-[20px] text-[#272727] font-bold capitalize">
                {item?.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
