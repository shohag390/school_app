import React from "react";
import logo from "../../assets/image/logo1.png";
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
    display: "Work at Future Learn",
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
  return (
    <footer className="md:px-[80px] px-[20px] bg-[#06042e]">
      <div className="grid grid-cols-2  text-[#ffffff] md:grid-cols-4 gap-[20px] md:gap-[40px] py-[60px]">
        <div className="col-span-2 md:col-span-1">
          <img
            className="md:h-[55px] md:w-[180px] w-[130px] h-[40px] pb-[15px]"
            src={logo}
            alt="logo"
          />
          <p className="text-[17px] font-[600] text-[#ffffff] pb-[15px]">
            When an unknown printer took galley of type and scrambled it to make
            pspecimen bookt has.
          </p>
          <div className="flex items-center gap-[10px] pb-[8px]">
            <FaLocationDot className="text-[20px]" />
            <p className="text-[17px] font-[600] text-[#ffffff]">
              463 7th Ave, NY 10018, USA
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt className="text-[20px]" />
            <p className="text-[17px] font-[600] text-[#ffffff]">
              +123 88 9900 456
            </p>
          </div>
        </div>
        <div className="text-[white]">
          <h4 className="text-[20px] font-bold pb-[15px]">Useful Links</h4>
          <ul className="leading-[35px]">
            {footerLink01?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#ffc224]" />
                </span>
                <Link
                  className="hover:text-[#ffc224] md:text-[17px] md:font-semibold text-[white]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[white]">
          <h4 className="text-[20px] font-bold pb-[15px]">Our Company</h4>
          <ul className="leading-[35px]">
            {footerLink02?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#ffc224]" />
                </span>
                <Link
                  className="hover:text-[#ffc224] md:text-[17px] md:font-semibold text-[white]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-[20px] font-bold pb-[15px]">Get In Touch</h4>

          <p className="text-[17px] font-[600] text-[#ffffff] pb-[15px]">
            when an unknown printer took galley type and scrambled
          </p>
          <div className="flex items-center gap-[10px] pb-[20px]">
            <FaFacebookF className="text-[25px] hover:text-[#ffc224] hover:translate-y-[-4px] duration-500" />
            <FaTwitter className="text-[25px] hover:text-[#ffc224] hover:translate-y-[-4px] duration-500" />
            <FaWhatsapp className="text-[25px] hover:text-[#ffc224] hover:translate-y-[-4px] duration-500" />
            <FaInstagram className="text-[25px] hover:text-[#ffc224] hover:translate-y-[-4px] duration-500" />
            <FaYoutube className="text-[25px] hover:text-[#ffc224] hover:translate-y-[-4px] duration-500" />
          </div>
          <div className="flex items-center gap-[15px]">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="text-[#ffffff] py-[20px] bg-[#06042e] border-t-[2px]  text-center">
        <div>
          <p className="text-[17px] font-[600] text-[#ffffff]">
            Copyright &copy; 2024 skillgro-sm29.netlify.app. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// .netlify.app
