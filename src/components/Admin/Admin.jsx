import React, { useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { FiBarChart2, FiInbox, FiSettings } from "react-icons/fi";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


function Admin() {
  const [sideBar, setSideBar] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
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
      name: "Student",
      path: "student",
      icon: <PiStudentBold size={20} />,
      children: [
        { name: "Create", path: "create", icon: <IoMdAddCircle size={18} /> },
        { name: "Manage", path: "manage", icon: <MdManageAccounts size={18} /> },
      ],
    },
    {
      name: "Faculty",
      path: "faculty",
      icon: <GiTeacher size={20} />,
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
          } lg:block hidden`}
      >
        {/* Logo */}
        <div
          className="mb-4 mt-2 flex justify-center cursor-pointer"
          onClick={() => navigate("/dashboard/home")}
        >
          <img
            src={
              sideBar
                ? "https://ecme-react.themenate.net/img/logo/logo-light-streamline.png"
                : "https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            }
            alt="logo"
            className={`${sideBar ? "w-[30px] h-[30px]" : "w-[70%] h-[70%]"}`}
          />
        </div>
        {!sideBar && <p className="font-semibold items-start justify-start px-5 text-gray-700 flex">DashBoard</p>}
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
                      navigate(`/${item.path}`);
                    }
                  }}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={item.name}
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


                <ul
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {item.children?.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div
                        onClick={() =>
                          navigate(`/admin/${item.path}/${sub.path}`)
                        }
                        data-tooltip-id="tooltip"
                        data-tooltip-content={sub.name}
                        className={`flex ${sideBar && "justify-end"} items-center gap-2 text-[14px] px-8 h-[35px] transition-all duration-300 cursor-pointer ${activePath === item.path && activeSubPath === sub.path

                          ? "text-blue-500"
                          : "text-gray-500"
                          } hover:text-black hover:bg-gray-200 font-medium`}
                      >

                        {activePath === item.path && activeSubPath === sub.path
                          && !sideBar && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}


                        <span>{sub.icon}</span>


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


      {/* Mobile Sidebar */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white text-white flex flex-col p-6 z-50 transition-transform duration-300 ease-in-out transform origin-top scale-100 opacity-100">
          {/* Close Button */}
          <img
            src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            alt="Logo"
            className="w-40 mb-6"
          />
          Student
          <ul className="w-full">
            {menuItems.map((item, index) => {
              const isActive = activePath === item.path;
              const isOpen = openMenus[item.path];

              return (
                <li key={index}>
                  {/* Parent Item */}
                  <div
                    className={`flex items-center justify-between rounded-md h-[40px] px-4 transition-all duration-300 cursor-pointer ${isActive ? "text-blue-500 bg-gray-100" : "text-gray-600"} hover:bg-gray-200 hover:text-black font-semibold`}
                    onClick={() => {
                      if (item.children) {
                        toggleMenu(item.path);
                      } else {
                        setMobileMenu(false); // 🔹 Close menu when navigating
                        navigate(`/admin/${item.path}`);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {item.children && (
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  <ul
                    className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.children?.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <div
                          onClick={() => {
                            setMobileMenu(false); // 🔹 Close menu when navigating
                            navigate(`/admin/${item.path}/${sub.path}`);
                          }}
                          className={`flex items-center gap-2 text-[14px] px-8 h-[35px] transition-all duration-300 cursor-pointer ${activePath === item.path && activeSubPath === sub.path
                            ? "text-blue-500" : "text-gray-500"} hover:text-black hover:bg-gray-200 font-medium`}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="absolute bottom-4 text-center w-full text-gray-400 transition-opacity duration-500 ease-in-out">
            Version 1.0.0
          </div>
        </div>
      )}


      {/* Main Content */}
      <div className="w-full flex flex-col">
        <div className="w-full h-[65px] border flex justify-between items-center px-4 gap-3 relative">
          {/* Sidebar Toggle Button */}
          <button
            className={`lg:hidden absolute right-4 z-50 text-black text-3xl transition-all duration-300 ease-in-out transform ${mobileMenu ? "rotate-180" : "rotate-0"}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <IoIosClose className="transition-transform duration-300" />
            ) : (
              <span className="transition-transform duration-300"><RxHamburgerMenu /></span>
            )}
          </button>

          {/* Sidebar Toggle for Large Screens */}
          <div className="lg:block hidden">
            <div
              className="w-[40px] h-[40px] rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out"
              onClick={() => setSideBar(!sideBar)}
            >
              {sideBar ? (
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
        <Outlet />

      </div>

    </div>
  );
}

export default Admin;