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
        return <CourseAdditionalNotes />;
      default:
        return <CourseBasicInfo />;
    }
  };

  return (
    <>
      <div className="w-full bg-gray-100 ">
        <h1 className="text-2xl font-bold mb-4 mt-6 px-6">Create Course</h1>
        <div className="w-[100%]  pb-[45px] mx-auto px-6 bg-gray-100  rounded-lg shadow-md  flex gap-4">

          <div className="w-[40%] p-6 rounded-lg border border-gray-300 bg-white">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-md transition-all cursor-pointer ${selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div
                  className={`w-[45px] h-[40px] flex items-center justify-center rounded-full ${selectedIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {tab.icon}
                </div>
                <div>
                  <h3
                    className={`text-sm font-semibold ${selectedIndex === index ? "text-blue-600" : "text-gray-800"
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
      </div>
    </>
  );
};

export default CreateCourse;
