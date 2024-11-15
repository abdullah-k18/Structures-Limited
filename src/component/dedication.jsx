import React from "react";
import { FaUsers, FaRegCalendarCheck, FaMoneyCheckAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const StatisticsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#002b3f]">
          Success & <br />
          <span className="text-[#002b3f] font-bold">Dedication</span>
        </h2>
        <p className="text-gray-500 mt-2">We've reached here with our hard work and dedication</p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:w-1/2">
        <div className="flex items-center space-x-4">
          <FaUsers className="text-[#002b3f] text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-black">50+</p>
            <p className="text-gray-500">Courses Students</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaRegCalendarCheck className="text-[#002b3f] text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-black">50+</p>
            <p className="text-gray-500">Projects Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
