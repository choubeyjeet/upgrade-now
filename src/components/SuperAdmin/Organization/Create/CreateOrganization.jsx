import React, { useState } from "react";
import BasicInfo from "./Forms/BasicInfo";
import ContactInfo from "./Forms/ContactInfo";
import Address from "./Forms/Address";
import AdminInfo from "./Forms/AdminInfo";
import Settings from "./Forms/Settings";
import service from "../../../../assets/service.png"
import { FiPackage, FiUser, FiMapPin, FiShield, FiSettings } from "react-icons/fi";


const tabs = [
  {
    label: "Basic Info",
    description: "Provide general details about the entity or product.",
    icon: <FiPackage size={22} />
  },
  {
    label: "Contact Info",
    description: "Add primary contact details including email and phone number.",
    icon: <FiUser size={22} />
  },
  {
    label: "Address Information",
    description: "Specify the location details including city and postal code.",
    icon: <FiMapPin size={22} />
  },
  {
    label: "Admin Info",
    description: "Manage administrative roles, permissions, and responsibilities.",
    icon: <FiShield size={22} />
  },
  {
    label: "Settings",
    description: "Customize preferences and configure system settings.",
    icon: <FiSettings size={22} />
  },

  {
    label: "Manage Brand",
    description: "Give Your own Logo",
    icon: <img alt="service" src={service} width={22} height={22} />
  }
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
    <div className="w-[100%] mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md  flex gap-4">
      <div className="w-[55%] p-6 rounded-lg border border-gray-300 bg-white">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 rounded-md transition-all cursor-pointer ${selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className={`w-[45px] h-[40px] flex items-center justify-center rounded-full ${selectedIndex === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
              {tab.icon}
            </div>
            <div>
              <h3 className={`text-sm font-semibold ${selectedIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                {tab.label}
              </h3>
              <p className="text-xs text-gray-500">{tab.description}</p>
            </div>
          </div>
        ))}
      </div>
      {formView()}
    </div>
  );
};

export default CreateOrganization;
