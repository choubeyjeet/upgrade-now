import React, { useState } from "react";
import BasicStuInfo from "./Forms/BasicStuInfo";
import ContactStuInfo from "./Forms/ContactStuInfo";
import { FiStar } from "react-icons/fi";
import { FiUser, FiMail, FiMapPin, FiUsers, FiSettings, FiHeart, FiCamera, FiBookOpen } from "react-icons/fi";
import AddressStuInfo from "./Forms/AddressStuInfo";
import { ParentsInfo } from "./Forms/ParentsInfo";
import { SettingsForm } from "./Forms/SettingsForm";
import { PhysicalInfo } from "./Forms/Physicalnfo";
import UploadPhoto from "./Forms/UploadPhoto";
import IntrestHobbies from "./Forms/InterestsAndHobbies";


const tabs = [
    {
        label: "Basic Info",
        description: "Enter the student's general details such as name and date of birth.",
        icon: <FiUser size={22} />,
    },
    {
        label: "Contact Info",
        description: "Provide the student's email and phone number for communication.",
        icon: <FiMail size={22} />,
    },
    {
        label: "Address Information",
        description: "Specify the student's home address, including city and postal code.",
        icon: <FiMapPin size={22} />,
    },
    {
        label: "Parents/Guardian Info",
        description: "Enter details of parents or guardians, including their contact information.",
        icon: <FiUsers size={22} />,
    },
    {
        label: "Settings",
        description: "Customize student preferences and account settings.",
        icon: <FiSettings size={22} />,
    },
    {
        label: "Physical Info",
        description: "Provide details about the student's physical attributes and medical conditions.",
        icon: <FiHeart size={22} />,
    },
    {
        label: "Upload Photo",
        description: "Upload a recent photograph of the student for identification.",
        icon: <FiCamera size={22} />,
    },
    {
        label: "Interests and Hobbies",
        description: "List the student's extracurricular activities, interests, and hobbies.",
        icon: <FiBookOpen size={22} />,
    },
];

const CreateStudent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const formView = () => {
        switch (selectedIndex) {
            case 0:
                return <BasicStuInfo />;
            case 1:
                return <ContactStuInfo />;
            case 2:
                return <AddressStuInfo />;
            case 3:
                return <ParentsInfo />;
            case 4:
                return <SettingsForm />;
            case 5:
                return <PhysicalInfo />;
            case 6:
                return <UploadPhoto />
            case 7:
                return <IntrestHobbies />
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

export default CreateStudent;
