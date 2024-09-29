import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="md:h-[90vh] w-full md:px-[80px] bg-[#efebf9] px-[20px] flex items-center justify-center">
      <div className="h-[70vh] w-[80%] border-[2px] rounded-md flex items-center justify-between">
        <div className="w-1/2 h-full bg-[#5751e1] px-[30px] py-[50px]">
          <div>
            <h4 className="md:text-[30px] text-[25px] font-[700] md:leading-[45px] leading-[35px] text-[#ffffff]">
              Contact Us
            </h4>
            <p className="text-[#ffffff] pb-[20px]">
              Groove's intuitive shared inbox makes it easy for team members to
              organize, prioritize and.In this episode of the Smashing Pod we’re
              talking about Web Platform Baseline.
            </p>
          </div>
          <div className="text-[#ffffff] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[10px]">
                <FaPhoneAlt className="text-[#ffffff] text-[20px]" />
                <h4 className="text-[20px] font-bold">Call Us</h4>
              </div>
              <p>+1 (237)-243 2436</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[10px]">
                <MdEmail className="text-[#ffffff] text-[20px]" />
                <h4 className="text-[20px] font-bold">Email</h4>
              </div>
              <p>121 Rock Steet, 21 Avenue, New York,NY 9210</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[10px]">
                <FaLocationDot className="text-[#ffffff] text-[20px]" />
                <h4 className="text-[20px] font-bold">Location</h4>
              </div>
              <p>121 Rock Steet, 21 Avenue, New York,NY 9210</p>
            </div>
          </div>
        </div>

        <form
          className="w-1/2 h-full bg-[#ffffff] flex flex-col gap-[20px] px-[30px] justify-center items-center"
          action=""
        >
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="text"
            placeholder="Subject"
          />
          <input
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            type="text"
            placeholder="Your Email"
          />
          <textarea
            rows={3}
            className="w-full py-[10px] border-[1px] border-[#140f86] px-[20px] bg-[#efebf9] rounded-[8px] focus:outline-none"
            placeholder="Message"
          ></textarea>
          <div className="w-full">
            <button className="btnOne rounded-[8px] py-[8px] w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
