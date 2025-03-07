import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import {
  FiBarChart2,
  FiEdit,
  FiFolder,
  FiInbox,
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi";

import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const [dropDown, setDropDown] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="w-full flex">
        {/* Sidebar */}
        <div
          className={`h-screen border overflow-y-scroll scrollbar-hide transition-all duration-300 ${
            sideBar ? "w-[80px]" : "w-[240px]"
          }`}
        >
          {/* Logo */}
          <div
            className="p-4 flex justify-center cursor-pointer"
            onClick={() => {
              navigate("/dashboard/home");
            }}
          >
            <img
              src={
                sideBar
                  ? "https://ecme-react.themenate.net/img/logo/logo-light-streamline.png"
                  : "https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              }
              alt="logo"
              className={`${sideBar ? "w-[30px] h-[30px]" : "w-[85%] h-[85%]"}`}
            />
          </div>

          {/* Sidebar Items */}
          <p
            className={`text-[#767477] font-medium text-[19px] px-6 mt-2 ${
              sideBar ? "hidden" : "block"
            }`}
          >
            Dashboard
          </p>

          <ul className="mt-7 cursor-pointer">
            {/* Organization Dropdown */}
            <li data-tooltip-id="tooltip" data-tooltip-content="Organization">
              <div
                className="text-gray-500 cursor-pointer font-medium text-[15px] rounded-md h-[35px] px-4 flex justify-between items-center transition-all duration-300 hover:text-black hover:bg-gray-300"
                onClick={() => setDropDown(!dropDown)}
              >
                <div className="flex items-center gap-2">
                  <GoOrganization size={18} />
                  {!sideBar && "Organization"}
                </div>
                {!sideBar && (
                  <IoIosArrowDown
                    className={`transform transition-transform duration-300 ${
                      dropDown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Items */}
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  dropDown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {[
                  { name: "Create", icon: <FiPlusCircle size={16} /> },
                  //   { name: "update", icon: <FiEdit size={16} /> },
                  { name: "Manage", icon: <FiFolder size={16} /> },
                ].map((item, index) => (
                  <li key={index}>
                    <div
                      onClick={() => {
                        const toLo = item.name.toLocaleLowerCase();
                        navigate(`/dashboard/organization/${toLo}`);
                      }}
                      data-tooltip-id="tooltip"
                      data-tooltip-content={item.name}
                      className="text-gray-500 capitalize cursor-pointer font-medium text-[15px] px-4 h-[35px] flex items-center gap-2 transition-all duration-300 hover:text-black hover:bg-gray-300"
                    >
                      {item.icon} {!sideBar && item.name}
                    </div>
                  </li>
                ))}
              </ul>
            </li>

            {/* Other Sidebar Items */}
            {[
              { name: "Analytics", icon: <FiBarChart2 size={18} /> },
              { name: "Inbox", icon: <FiInbox size={18} /> },
              { name: "Settings", icon: <FiSettings size={18} /> },
            ].map((item, index) => (
              <li
                key={index}
                data-tooltip-id="tooltip"
                data-tooltip-content={item.name}
              >
                <div className="text-gray-500 cursor-pointer font-medium text-[15px] rounded-md h-[35px] px-4 flex items-center gap-2 transition-all duration-300 hover:text-black hover:bg-gray-300">
                  {item.icon} {!sideBar && item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col">
          <div className="w-full h-[65px] border flex justify-start items-center px-4 gap-3">
            <div
              className="w-[40px] h-[40px] rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center"
              onClick={() => setSideBar(!sideBar)}
            >
              {sideBar ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
              )}
            </div>
            <div className=" w-[40px] h-[40px] rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center">
              <IoSearch className="text-[1.5em]" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>{" "}
    </>
  );
}

export default Dashboard;
