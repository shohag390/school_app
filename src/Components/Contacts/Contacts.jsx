import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[25px] px-[15px] overflow-hidden w-full lg:py-[40px] md:py-[30px] py-[20px]">
      <div className="flex flex-col items-center justify-center">
        <p className="lg:py-[4px] md:py-[2px] px-[30px] rounded-full text-[#fff] bg-[#6145ff]">
          Constcts Us
        </p>
        <h4 className="lg:text-[48px] md:text-[38px] sm:text-[28px] text-[34px] lg:font-bold md:font-semibold sm:font-medium font-semibold lg:leading-[48px] md:leading-[40px] sm:leading-[30px] leading-[35px] text-[#43392d] lg:pt-[10px] md:pt-[8px] pt-[7px]">
          Contacts <span className="text-[#ffa03a] text_style">With Us</span>
        </h4>
        <p className="lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal lg:pt-[10px] md:pt-[8px] pt-[7px] lg:w-[500px] md:w-[400px] w-[300px] text-center">
          Educaation is key to success and freedon from all the forces is a
          power.
        </p>
      </div>
      <div
        className="grid md:grid-cols-3 gap-[30px] pt-[25px]"
        data-aos="fade-right"
      >
        <div className="h-[200px] w-full bg-[#f4f5f8] flex flex-col justify-center items-center rounded-md hover_effect">
          <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#ffa03a] text-[#fff]">
            <FaPhone className="text-[20px]" />
          </div>
          <h4 className="font-[900] text-[20px] pt-[8px] text-center">
            Call Us
          </h4>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            +1 (238)-364-2655
          </p>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            +1 (238)-674-4857
          </p>
        </div>
        <div className="h-[200px] w-full bg-[#f4f5f8] flex flex-col justify-center items-center rounded-md hover_effect">
          <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#ffa03a] text-[#fff]">
            <MdEmail className="text-[20px]" />
          </div>
          <h4 className="font-[900] text-[20px] pt-[8px] text-center">
            Email Us
          </h4>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            yourmail@gmail.com
          </p>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            eduxo@gmail.com
          </p>
        </div>
        <div className="h-[200px] w-full bg-[#f4f5f8] flex flex-col justify-center items-center rounded-md hover_effect">
          <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#ffa03a] text-[#fff]">
            <MdLocationPin className="text-[20px]" />
          </div>
          <h4 className="font-[900] text-[20px] pt-[8px] text-center">
            Locations
          </h4>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            VWGV+XW2
          </p>
          <p className="text-[#666464] md:text-[18px] text-[17px] md:font-medium text-center">
            W2R3+MMH, Mirpur
          </p>
        </div>
      </div>
      <div>
        <div className="pt-[40px] text-center">
          <h4 className="md:text-[35px] text-[25px] text-[#43392d] font-bold">
            Just Drop a Message
          </h4>
        </div>
        <form
          className="md:pt-[30px] pt-[15px] w-full md:px-[250px] flex flex-col justify-center md:gap-[30px] gap-[15px] pb-[40px]"
          data-aos="fade-left"
        >
          <div className="flex items-center justify-between md:gap-[30px] gap-[15px]">
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="text"
              placeholder="Name"
            />
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center justify-between md:gap-[30px] gap-[15px]">
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="text"
              placeholder="Your Subject"
            />
            <input
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full">
            <textarea
              className="py-[8px] px-[20px] rounded-md w-full input_shadow lg:text-[19px] md:text-[18px] sm:text-[16px] text-[#43392d] lg:font-semibold md:font-medium font-normal"
              name=""
              id=""
              rows={4}
              placeholder="Enter Your Message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-md btn py-[10px] px-[50px]">
              Send Message
            </button>
          </div>
        </form>
        <div className="rounded-md responsive_map" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14593.244565885849!2d88.93848778202425!3d23.87858317396658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febb0c3ed3b0f1%3A0xb8bb0c3a788a1501!2sBurapara%20Miton%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1727886952654!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
