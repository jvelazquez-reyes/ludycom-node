import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ active }) => {
  return (
    <div className="w-full h-[75vh] bg-white shadow-sm sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/users/all-users" className="w-full flex items-center">
          <FaUserAlt
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/workplaces/all-workplaces" className="w-full flex items-center">
          <FaIndustry
            size={30}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Workplace
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;