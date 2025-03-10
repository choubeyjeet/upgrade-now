import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { IoMdAddCircle } from "react-icons/io";
import service from "../../../assets/service.png";
import { IoSearch } from "react-icons/io5";
import { FiBarChart2, FiInbox, FiSettings } from "react-icons/fi";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";


function Dashboard() {
  const [sideBar, setSideBar] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = location.pathname.split("/")[2];
  const activeSubPath = location.pathname.split("/")[3];

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu], // Toggle the clicked menu
    }));
  };

  const menuItems = [
    {
      name: "Organization",
      path: "organization",
      icon: <GoOrganization size={20} />,
      children: [
        { name: "Create", path: "create", icon: <IoMdAddCircle size={18} /> },
        { name: "Manage", path: "manage", icon: <MdManageAccounts size={18} /> },
      ],
    },
    {
      name: "Analytics",
      path: "analytics",
      icon: <FiBarChart2 size={20} />,
    },
    {
      name: "Inbox",
      path: "inbox",
      icon: <FiInbox size={20} />,
    },
    {
      name: "Settings",
      path: "settings",
      icon: <FiSettings size={20} />,
    },

  ];

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div
        className={`h-screen border overflow-y-scroll scrollbar-hide transition-all duration-300 ${sideBar ? "w-[80px]" : "w-[240px]"
          }`}
      >
        {/* Logo */}
        <div
          className="p-4 flex justify-center cursor-pointer"
          onClick={() => navigate("/dashboard/home")}
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
        <ul className="mt-7 cursor-pointer">
          {menuItems.map((item, index) => {
            const isActive = activePath === item.path;
            const isOpen = openMenus[item.path];

            return (
              <li key={index}>
                {/* Parent Item */}
                <div
                  className={`flex items-center justify-between rounded-md h-[40px] px-4 transition-all duration-300 cursor-pointer ${isActive ? "text-blue-500 bg-gray-100" : "text-gray-600"
                    } hover:bg-gray-200 hover:text-black font-semibold`}
                  onClick={() => {
                    if (item.children) {
                      toggleMenu(item.path);
                    } else {
                      navigate(`/dashboard/${item.path}`);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {!sideBar && <span>{item.name}</span>}
                  </div>
                  {!sideBar && item.children && (
                    <IoIosArrowDown
                      className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  )}
                </div>

                {/* Sub-items with smooth transition */}
                <ul
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {item.children?.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div
                        onClick={() =>
                          navigate(`/dashboard/${item.path}/${sub.path}`)
                        }
                        className={`flex ${sideBar && "justify-end"} items-center gap-2 text-[14px] px-8 h-[35px] transition-all duration-300 cursor-pointer ${activeSubPath === sub.path
                          ? "text-blue-500"
                          : "text-gray-500"
                          } hover:text-black hover:bg-gray-200 font-medium`}
                      >
                        {/* Dot Indicator for Active Sub-item */}
                        {activeSubPath === sub.path && !sideBar && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}

                        {/* Icon is always visible */}
                        <span>{sub.icon}</span>

                        {/* Show text only if sidebar is expanded */}
                        {!sideBar && <span>{sub.name}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col">
        <div className="w-full h-[65px] border flex justify-start items-center px-4 gap-3">
          {/* Sidebar Toggle Button */}
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

          {/* Search Icon */}
          <div className="w-[40px] h-[40px] rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center">
            <IoSearch className="text-[1.5em]" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
