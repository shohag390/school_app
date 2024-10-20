import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import apple from "../../assets/image/playstor.svg";
import google from "../../assets/image/apple.svg";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const footerLink01 = [
  {
    path: "/",
    display: "Our values",
  },
  {
    path: "/",
    display: "Our advisory board",
  },
  {
    path: "/",
    display: "Our partners",
  },
  {
    path: "/",
    display: "Become a partner",
  },
  {
    path: "/",
    display: "Future Learn",
  },
  {
    path: "/",
    display: "Quizlet Plus",
  },
];
const footerLink02 = [
  {
    path: "/",
    display: "Contact Us",
  },
  {
    path: "/",
    display: "Become Teacher",
  },
  {
    path: "/",
    display: "Blog",
  },
  {
    path: "/",
    display: "Instructor",
  },
  {
    path: "/",
    display: "Events",
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <footer className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] w-full bg-[#f4f5f8] overflow-hidden">
      <div className="grid grid-cols-2 text-[#43392d] md:grid-cols-4 gap-[20px] md:gap-[40px] md:py-[60px] py-[30px]">
        <div className="col-span-2 md:col-span-1" data-aos="flip-up">
          <img
            className="md:h-[55px] md:w-[180px] w-[130px] h-[40px] pb-[15px]"
            src={logo}
            alt="logo"
          />
          <p className="text-[#43392d] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:font-semibold md:font-medium font-normal pb-[15px]">
            When an unknown printer took galley of type and scrambled it to make
            pspecimen bookt has.
          </p>
          <div className="flex items-center gap-[10px] pb-[8px]">
            <FaLocationDot className="text-[20px] text-[#6045ff]" />
            <p className="text-[#43392d] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:font-semibold md:font-medium font-normal">
              463 7th Ave, NY 10018, USA
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt className="text-[20px] text-[#6045ff]" />
            <p className="text-[#43392d] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:font-semibold md:font-medium font-normal">
              +123 88 9900 456
            </p>
          </div>
        </div>
        <div className="text-[#43392d]" data-aos="flip-up">
          <h4 className="text-[20px] font-bold pb-[15px]">Useful Links</h4>
          <ul className="leading-[35px]">
            {footerLink01?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#6045ff]" />
                </span>
                <Link
                  className="hover:text-[#6045ff] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:font-semibold md:font-medium font-normal text-[#43392d]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#43392d]" data-aos="flip-up">
          <h4 className="text-[20px] font-bold pb-[15px]">Our Company</h4>
          <ul className="leading-[35px]">
            {footerLink02?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#6045ff]" />
                </span>
                <Link
                  className="hover:text-[#6045ff] lg:text-[19px] md:text-[18px] sm:text-[16px] lg:font-semibold md:font-medium font-normal text-[#43392d]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1" data-aos="flip-up">
          <h4 className="text-[20px] font-bold pb-[15px]">Get In Touch</h4>

          <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal pb-[15px]">
            When an unknown printer took galley type and scrambled
          </p>
          <div className="flex items-center gap-[10px] pb-[20px]">
            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
              <FaFacebookF className="text-[20px]" />
            </div>
            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
              <FaTwitter className="text-[20px]" />
            </div>

            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
              <FaWhatsapp className="text-[20px]" />
            </div>

            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
              <FaInstagram className="text-[20px]" />
            </div>

            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#ffffff] btn_icone hover:text-[#ffffff] text-[#6046ff] hover:translate-y-[-6px] duration-500 border-[1px] border-[#6045ff]">
              <FaYoutube className="20px" />
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <img className="w-[130px] rounded-md" src={google} alt="" />
            <img className="w-[130px] rounded-md" src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="text-[#272727] py-[20px] bg-[#f4f5f8] border-t-[1px] border-[#43392d]  text-center">
        <div>
          <p className="text-[17px] font-[600] text-[#43392d]">
            Copyright &copy; 2024 eduxo-sm29.netlify.app. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// .netlify.app
