import React from "react";
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
  return (
    <footer className="md:px-[80px] px-[20px] bg-[#f4f5f8]">
      <div className="grid grid-cols-2  text-[#272727] md:grid-cols-4 gap-[20px] md:gap-[40px] md:py-[60px] py-[30px]">
        <div className="col-span-2 md:col-span-1">
          <img
            className="md:h-[55px] md:w-[180px] w-[130px] h-[40px] pb-[15px]"
            src={logo}
            alt="logo"
          />
          <p className="text-[#272727] md:text-[18px] text-[17px] md:font-medium pb-[15px]">
            When an unknown printer took galley of type and scrambled it to make
            pspecimen bookt has.
          </p>
          <div className="flex items-center gap-[10px] pb-[8px]">
            <FaLocationDot className="text-[20px]" />
            <p className="text-[#272727] md:text-[18px] text-[17px] md:font-medium">
              463 7th Ave, NY 10018, USA
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt className="text-[20px]" />
            <p className="text-[#272727] md:text-[18px] text-[17px] md:font-medium">
              +123 88 9900 456
            </p>
          </div>
        </div>
        <div className="text-[#272727]">
          <h4 className="text-[20px] font-bold pb-[15px]">Useful Links</h4>
          <ul className="leading-[35px]">
            {footerLink01?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#ffa03a]" />
                </span>
                <Link
                  className="hover:text-[#ffa03a] md:text-[18px] text-[17px] md:font-medium text-[#272727]"
                  to={link?.path}
                >
                  {link?.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#272727]">
          <h4 className="text-[20px] font-bold pb-[15px]">Our Company</h4>
          <ul className="leading-[35px]">
            {footerLink02?.map((link, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <span>
                  <MdKeyboardDoubleArrowRight className="text-[#ffa03a]" />
                </span>
                <Link
                  className="hover:text-[#ffa03a] md:text-[18px] text-[17px] md:font-medium text-[#272727]"
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

          <p className="md:text-[18px] text-[17px] md:font-medium text-[#272727] pb-[15px]">
            When an unknown printer took galley type and scrambled
          </p>
          <div className="flex items-center gap-[10px] pb-[20px]">
            <FaFacebookF className="text-[25px] hover:text-[#ffa03a] hover:translate-y-[-4px] duration-500" />
            <FaTwitter className="text-[25px] hover:text-[#ffa03a] hover:translate-y-[-4px] duration-500" />
            <FaWhatsapp className="text-[25px] hover:text-[#ffa03a] hover:translate-y-[-4px] duration-500" />
            <FaInstagram className="text-[25px] hover:text-[#ffa03a] hover:translate-y-[-4px] duration-500" />
            <FaYoutube className="text-[25px] hover:text-[#ffa03a] hover:translate-y-[-4px] duration-500" />
          </div>
          <div className="flex items-center gap-[15px]">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="text-[#272727] py-[20px] bg-[#f4f5f8] border-t-[1px] border-[#272727]  text-center">
        <div>
          <p className="text-[17px] font-[600] text-[#272727]">
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
