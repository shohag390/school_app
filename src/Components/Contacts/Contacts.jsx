import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[40px] py-[25px]">
      <div className="grid md:grid-cols-3 gap-[30px]">
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
        <div>
          <h4 className="md:font-[700] font-[600] text-center md:text-[45px] text-[38px] md:leading-[48px] leading-[46px] md:pt-[45px] pt-[20px]">
            Contact <span className="text-[#ffa03a] text_style">With Us</span>
          </h4>
          <p className="md:px-[400px] text-center text-[#666464] md:text-[18px] text-[17px] md:font-medium md:pt-[15px] pt-[10px]">
            Educaation is key to success and freedon from all the forces is a
            power.
          </p>
        </div>
        <form className="pt-[30px] w-full md:px-[250px] flex flex-col justify-center md:gap-[30px] gap-[15px] pb-[40px]">
          <div className="flex items-center justify-between md:gap-[30px] gap-[15px]">
            <input
              className="py-[10px] px-[20px] rounded-md w-full input_shadow bg-[#f4f5f8]"
              type="text"
              placeholder="Name"
            />
            <input
              className="py-[10px] px-[20px] rounded-md w-full input_shadow bg-[#f4f5f8]"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center justify-between md:gap-[30px] gap-[15px]">
            <input
              className="py-[10px] px-[20px] rounded-md w-full input_shadow bg-[#f4f5f8]"
              type="text"
              placeholder="Your Subject"
            />
            <input
              className="py-[10px] px-[20px] rounded-md w-full input_shadow bg-[#f4f5f8]"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full">
            <textarea
              className="py-[10px] px-[20px] rounded-md w-full input_shadow bg-[#f4f5f8]"
              name=""
              id=""
              rows={4}
              placeholder="Enter Your Message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-md btn py-[10px] px-[30px]">
              Send Message
            </button>
          </div>
        </form>
        <div className="rounded-md responsive_map">
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
