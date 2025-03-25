import React, { useState } from "react";
import ContactFacultyInfo from "./FacultyForms/ContactFacultyInfo"
import TeachingPreference from "./FacultyForms/TeachingPreference";
import { PhysicalInfo } from "./Forms/Physicalnfo";
import UploadPhoto from "./Forms/UploadPhoto";
import IntrestHobbies from "./Forms/InterestsAndHobbies";
import BasicFacultyInfo from "./FacultyForms/BasicFacultyInfo";
import AcademicInfo from "./FacultyForms/AcademicInfo";
import ProfessionalInfo from "./FacultyForms/ProfessionalInfo";
import SkillsInfo from "./FacultyForms/SkillsInfo";
import FacultyPayment from "./FacultyForms/FacultyPayment";
import BackgroundInfo from "./FacultyForms/BackgroundInfo";
import UploadFcultyPic from "./FacultyForms/UploadFcultyPic";


import { FiUser, FiPhone, FiBook, FiBriefcase, FiGlobe, FiStar, FiDollarSign, FiShield, FiImage } from "react-icons/fi";

const tabs = [
    {
        label: "Basic Info",
        description: "Enter the faculty member's general details such as name and date of birth.",
        icon: <FiUser size={22} />,
    },
    {
        label: "Contact Info",
        description: "Provide the faculty member's email and phone number for communication.",
        icon: <FiPhone size={22} />,
    },
    {
        label: "Academic Information",
        description: "Specify the faculty member's highest degree, institution, and specialization.",
        icon: <FiBook size={22} />,
    },
    {
        label: "Professional Experience",
        description: "Enter details of the faculty member's teaching experience and institutions.",
        icon: <FiBriefcase size={22} />,
    },
    {
        label: "Teaching Preference",
        description: "Customize the faculty member's teaching mode, location, and availability.",
        icon: <FiGlobe size={22} />,
    },
    {
        label: "Skills & Additional Expertise",
        description: "Provide details about the faculty member's skills, language proficiency, and special needs experience.",
        icon: <FiStar size={22} />,
    },
    {
        label: "Salary & Payment Details",
        description: "Enter the faculty member's expected salary and preferred payment method.",
        icon: <FiDollarSign size={22} />,
    },
    {
        label: "BackGround & Legal Information",
        description: "Upload identification documents, background check clearance, and reference letters.",
        icon: <FiShield size={22} />,
    },
    {
        label: "Profile Picture",
        description: "Upload a profile picture of the faculty member for identification.",
        icon: <FiImage size={22} />,
    },
];

const Faculty = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const formView = () => {
        switch (selectedIndex) {
            case 0:
                return <BasicFacultyInfo />;
            case 1:
                return <ContactFacultyInfo />;
            case 2:
                return <AcademicInfo />;
            case 3:
                return <ProfessionalInfo />;
            case 4:
                return <TeachingPreference />;
            case 5:
                return <SkillsInfo />;
            case 6:
                return <FacultyPayment />
            case 7:
                return <BackgroundInfo />
            case 8:
                return <UploadFcultyPic />
        }
    };

    return (
        <div className="bg-[#F5F5F5] min-h-screen p-4">
            <div className="w-full mx-auto p-4 md:p-6 rounded-lg shadow-md flex flex-col lg:flex-row gap-6 justify-start items-start ">

                {/* Sidebar (Icons Flex on Small Screens) */}
                <div className="lg:w-[40%] w-full h-full  flex flex-wrap lg:flex-col px-2 py-4 rounded-lg border border-gray-300 bg-white">
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
                <div className="lg:w-2/3 w-full h-full  border  bg-white p-4 md:p-6 rounded-lg shadow-md">
                    {formView()}
                </div>

            </div>
        </div>
    );
};

export default Faculty;
