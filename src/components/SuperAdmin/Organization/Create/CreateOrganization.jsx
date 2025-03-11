import React, { useState } from "react";
import BasicInfo from "./Forms/BasicInfo";
import ContactInfo from "./Forms/ContactInfo";
import Address from "./Forms/Address";
import AdminInfo from "./Forms/AdminInfo";
import Settings from "./Forms/Settings";
import service from "../../../../assets/service.svg";
import { FiPackage, FiUser, FiMapPin, FiShield, FiSettings } from "react-icons/fi";

const tabs = [
  {
    label: "Basic Info",
    description: "Provide general details about the entity or product.",
    icon: <FiPackage size={22} />,
  },
  {
    label: "Contact Info",
    description: "Add primary contact details including email and phone number.",
    icon: <FiUser size={22} />,
  },
  {
    label: "Address Information",
    description: "Specify the location details including city and postal code.",
    icon: <FiMapPin size={22} />,
  },
  {
    label: "Admin Info",
    description: "Manage administrative roles, permissions, and responsibilities.",
    icon: <FiShield size={22} />,
  },
  {
    label: "Settings",
    description: "Customize preferences and configure system settings.",
    icon: <FiSettings size={22} />,
  },
  {
    label: "Manage Brand",
    description: "Give Your own Logo",
    icon: <img alt="service" src={service} width={22} height={22} />,
  },
];

const CreateOrganization = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const formView = () => {
    switch (selectedIndex) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <ContactInfo />;
      case 2:
        return <Address />;
      case 3:
        return <AdminInfo />;
      case 4:
        return <Settings />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-4">
      <div className="w-full mx-auto p-4 md:p-6 rounded-lg shadow-md flex flex-col lg:flex-row gap-6 justify-center items-center">

        {/* Sidebar (Icons Flex on Small Screens) */}
        <div className="lg:w-1/3 w-full flex flex-wrap lg:flex-col p-4 rounded-lg border border-gray-300 bg-white">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex items-center justify-center md:justify-start gap-3 p-3 rounded-md transition-all cursor-pointer 
                ${selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"} ${index > 2 ? "mt-2" : ""
                }`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Icon */}
              <div className={`w-[45px] h-[40px] flex items-center justify-center rounded-full 
                ${selectedIndex === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                {tab.icon}
              </div>
              {/* Label (Hidden on Small Screens) */}
              <div className="hidden md:block">
                <h3 className={`text-sm font-semibold ${selectedIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                  {tab.label}
                </h3>
                <p className="text-xs text-gray-500">{tab.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="lg:w-2/3 w-full bg-white p-4 md:p-6 rounded-lg shadow-md">
          {formView()}
        </div>

      </div>
    </div>
  );
};

export default CreateOrganization;
