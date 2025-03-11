import React, { useState } from "react";
import ChapterBasicInfo from "./Forms/ChapterBasicInfo";
import ChapterReadingMaterial from "./Forms/ChapterReadingMaterial";
import ChapterAddVideo from "./Forms/ChapterAddVideo";
import ChapterAddQuestions from "./Forms/ChapterAddQuestions";
import ChapterAdditionalNotes from "./Forms/ChapterAdditionalNotes";

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
    label: "Add  Videos",
    description:
      "Add primary contact details including email and phone number.",
    icon: <FaPhotoVideo size={22} />,
  },
  {
    label: "Add Questions",
    description: "Specify the location details including city and postal code.",
    icon: <CiCircleQuestion size={22} />,
  },
  {
    label: "Add Reading Material",
    description:
      "Manage administrative roles, permissions, and responsibilities.",
    icon: <IoDocuments size={22} />,
  },
  {
    label: "Add Additional Notes",
    description: "Customize preferences and configure system settings.",
    icon: <CgNotes size={22} />,
  },
];

const CreateChapter = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const formView = () => {
    switch (selectedIndex) {
      case 0:
        return <ChapterBasicInfo />;
      case 1:
        return <ChapterAddVideo />;
      case 2:
        return <ChapterAddQuestions />;
      case 3:
        return <ChapterReadingMaterial />;
      case 4:
        return <ChapterAdditionalNotes />;
      default:
        return <ChapterBasicInfo />;
    }
  };

  return (
    <div className="w-[100%] mx-auto p-6 bg-white  rounded-lg shadow-md  flex gap-4">
      <div className="w-[55%] p-6 rounded-lg border border-gray-300 bg-white">
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
  );
};

export default CreateChapter;
