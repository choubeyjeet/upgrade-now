import React, { useState } from "react";
import BasicInfo from "./Forms/BasicInfo";
import ContactInfo from "./Forms/ContactInfo";
import Address from "./Forms/Address";
import AdminInfo from "./Forms/AdminInfo";
import Settings from "./Forms/Settings";

const tabs = [
  "Basic Info",
  "Contact Info",
  "Address",
  "Admin Info",
  "Settings",
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
    <div className="w-[100%] mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-300 ${
              selectedIndex === index
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {formView()}
    </div>
  );
};

export default CreateOrganization;
