import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { LuTvMinimalPlay } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiClosedCaptioningLine, RiMobileDownloadFill } from "react-icons/ri";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { TiTick } from "react-icons/ti";


const chapters = [
    {
        title: "Gravity Basics",
        description: "Learn the fundamentals of gravity.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        materials: [
            "Gravity Explained - PDF",
            "Newton's Laws of Motion - Notes",
            "Gravitational Forces - Video Link"
        ],
        assessment: [
            {
                question: "What is gravity?",
                options: ["A force that repels objects", "A force that attracts objects", "A type of energy", "None of the above"],
                type: "single"
            },
            {
                question: "Which of the following are effects of gravity?",
                options: ["Objects falling to the ground", "Planets orbiting the sun", "Weightlessness in space", "All of the above"],
                type: "multiple"
            }
        ]
    }
    // {
    //     title: "Space and Time",
    //     description: "Understanding the concept of space-time continuum.",
    //     videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    //     materials: [
    //         "Theory of Relativity - PDF",
    //         "Einstein's Discoveries - Notes",
    //         "Time Dilation - Video Link"
    //     ],
    //     questions: [
    //         "What is the space-time continuum?",
    //         "How does time dilation work?",
    //         "What is the relationship between gravity and time?"
    //     ]
    // }
];

export default function PlayChapters() {
    const [activeTab, setActiveTab] = useState("video");
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [answers, setAnswers] = useState({});
    const chapter = chapters[currentChapterIndex];

    const handleOptionChange = (questionIndex, optionIndex, type) => {
        setAnswers((prev) => {
            const updatedAnswers = { ...prev };
            if (type === "single") {
                updatedAnswers[questionIndex] = [optionIndex];
            } else {
                const selectedOptions = updatedAnswers[questionIndex] || [];
                if (selectedOptions.includes(optionIndex)) {
                    updatedAnswers[questionIndex] = selectedOptions.filter((i) => i !== optionIndex);
                } else {
                    updatedAnswers[questionIndex] = [...selectedOptions, optionIndex];
                }
            }
            return updatedAnswers;
        });
    };

    const handleSubmit = () => {
        console.log("Submitted Answers:", answers);
    };
    return (
        <>
            <div className="w-full p-4">
                <div className="p-4 bg-gray-100 min-h-screen rounded">
                    <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>


                    <div className="flex justify-between px-4 border-b mb-4">
                        {[
                            { key: "video", label: "Play Video" },
                            { key: "material", label: "Learning Material" },
                            { key: "assessment", label: "Assessment" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2 w-[30%] text-lg font-medium ${activeTab === tab.key ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div>
                        {activeTab === "video" && (
                            <div>
                                <video controls className="w-full rounded-lg mb-4">
                                    <source src={chapter.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <span className="text-lg font-semibold mb-2 px-2">Description</span>
                                <p className={`px-2 text-gray-700 transition-all duration-500 ease-in-out ${showFullDescription ? "max-h-full" : "max-h-20 overflow-hidden"}`}
                                >
                                    {showFullDescription ? `${chapter.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt.` : `${chapter.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla facilisi. Donec vehicula, urna eu faucibus dictum, odio mi posuere velit, nec pulvinar justo erat ut arcu. Sed ut nibh ac turpis tempus tincidunt...`}
                                </p>
                                <button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="text-blue-500 mt-2 px-2"
                                >
                                    {showFullDescription ? <div className="flex gap-2 justify-center items-center">Show Less <IoIosArrowDropupCircle /></div> : <div className="flex gap-2 justify-center items-center">Show More <IoIosArrowDropdownCircle /></div>}
                                </button>

                                <div className="mt-6 px-2 bg-gray-100 rounded-lg ">
                                    <h2 className="text-lg font-semibold mb-2">This course includes:</h2>
                                    <ul className="grid grid-cols-2 gap-3">
                                        <li className="flex items-center"><span className="mr-2"><LuTvMinimalPlay /></span> 5 hours of video lectures</li>
                                        <li className="flex items-center"><span className="mr-2"><IoDocumentTextOutline /></span> 10 reference articles</li>
                                        <li className="flex items-center"><span className="mr-2"><RiMobileDownloadFill /></span> 20 downloadable resources</li>
                                        <li className="flex items-center"><span className="mr-2"><FaMobileScreenButton />
                                        </span> Accessible on all devices</li>
                                        <li className="flex items-center"><span className="mr-2"><RiClosedCaptioningLine />
                                        </span>Closed Subtitles</li>
                                        <li className="flex items-center"><span className="mr-2"><CiTrophy />
                                        </span> Certificate upon completion</li>
                                    </ul>
                                </div>

                                <div className="mt-6 p-4 rounded bg-gray-200 border">
                                    <h2 className="text-lg font-semibold mb-2">What you'll learn:</h2>
                                    <ul className="grid grid-cols-2 gap-3">
                                        <li className="flex justify-start items-center"><TiTick /> Understanding gravity and its effects</li>
                                        <li className="flex justify-start items-center"><TiTick /> Newton’s Laws of Motion and their application</li>
                                        <li className="flex justify-start items-center"><TiTick /> The role of gravity in planetary orbits</li>
                                        <li className="flex justify-start items-center"><TiTick /> How gravity affects objects in space</li>
                                        <li className="flex justify-start items-center"><TiTick /> The concept of weightlessness</li>
                                        <li className="flex justify-start items-center"><TiTick /> Relationship between mass and gravitational force</li>
                                    </ul>
                                </div>


                            </div>
                        )}
                        {activeTab === "material" && (
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <h2 className="text-lg font-semibold mb-2">Learning Material</h2>
                                <ul className="list-disc pl-5">
                                    {chapter.materials.map((material, index) => (
                                        <li key={index} className="mb-2">{material}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {activeTab === "assessment" && (
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <h2 className="text-lg font-semibold mb-2">Assessment</h2>
                                <ul className="space-y-3">
                                    {chapter.assessment.map((questionObj, qIndex) => (
                                        <li key={qIndex} className="bg-white p-3 rounded-lg shadow">
                                            <p className="font-medium mb-2">{questionObj.question}</p>
                                            {questionObj.options.map((option, oIndex) => (
                                                <div key={oIndex} className="flex items-center gap-2">
                                                    <input
                                                        type={questionObj.type === "single" ? "radio" : "checkbox"}
                                                        name={`question-${qIndex}`}
                                                        checked={(answers[qIndex] || []).includes(oIndex)}
                                                        onChange={() => handleOptionChange(qIndex, oIndex, questionObj.type)}
                                                    />
                                                    <label>{option}</label>
                                                </div>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    onClick={handleSubmit}
                                >
                                    Submit Assessment
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
