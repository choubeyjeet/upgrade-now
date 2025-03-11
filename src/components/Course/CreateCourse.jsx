import React, { useState } from "react";
import ChapterBasicInfo from "./Forms/CourseBasicInfo";

import CourseAddQuestions from "./Forms/CourseAddQuestions";
import CourseAdditionalNotes from "./Forms/CourseAdditionalNotes";

import {
  FiPackage,
  FiUser,
  FiMapPin,
  FiShield,
  FiSettings,
} from "react-icons/fi";
import { FaPhotoVideo } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { IoDocuments } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";

const tabs = [
  {
    label: "Chapter Information",
    description: "Provide general details about the entity or product.",
    icon: <FiPackage size={22} />,
  },

  {
    label: "Add Questions",
    description: "Specify the location details including city and postal code.",
    icon: <CiCircleQuestion size={22} />,
  },

  {
    label: "Add Additional Notes",
    description: "Customize preferences and configure system settings.",
    icon: <CgNotes size={22} />,
  },
];

const CreateCourse = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const formView = () => {
    switch (selectedIndex) {
      case 0:
        return <ChapterBasicInfo />;

      case 1:
        return <CourseAddQuestions />;

      case 2:
        return <CourseAdditionalNotes />;
      default:
        return <CourseBasicInfo />;
    }
  };

  return (
    <div className="w-[100%] mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md  flex gap-4">
      <div className="w-[55%] p-6 rounded-lg border border-gray-300 bg-white">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 rounded-md transition-all cursor-pointer ${
              selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <div
              className={`w-[45px] h-[40px] flex items-center justify-center rounded-full ${
                selectedIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab.icon}
            </div>
            <div>
              <h3
                className={`text-sm font-semibold ${
                  selectedIndex === index ? "text-blue-600" : "text-gray-800"
                }`}
              >
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

export default CreateCourse;
