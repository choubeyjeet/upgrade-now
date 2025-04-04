import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import Pagination from "../Utils/Pagination";
import { Outlet, useNavigate } from "react-router-dom";

function CoursesandChapter() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const chapters = [
        {
            id: 1,
            title: "Gravity Basics",
            description: "Learn the fundamentals of gravity.",
            image: "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
        },
        {
            id: 2,
            title: "React Patterns",
            description: "Advanced React design patterns.",
            image: "https://www.shutterstock.com/image-vector/hand-drawn-physic-formulas-science-260nw-2031660476.jpg",
        },
    ];

    // Filter chapters based on search input
    const filteredChapters = chapters.filter((chapter) =>
        chapter.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredChapters.length / itemsPerPage);

    const courses = [
        {
            title: "Physics 101",
            description: "Introduction to physics.",
            image: "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
        },
    ];

    const course = courses[0];

    return (
        <>
            <div className="w-full rounded mt-2 px-4 flex flex-col">
                <div className="w-full bg-gray-200 h-auto flex flex-col lg:flex-row lg:justify-evenly md:justify-start sm:justify-start items-center rounded">
                    <div className="w-full rounded mt-2 px-4 ">
                        <div className="w-full bg-gray-200 h-auto flex flex-col lg:flex-row lg:justify-evenly md:justify-start sm:justify-start items-center rounded">
                            <div className="lg:w-[50%] w-[100%] md:w-[100%] h-[205px] relative p-2">
                                <img
                                    src={course?.image}
                                    alt={course?.title}
                                    className="w-full h-full object-fill"
                                    loading="lazy"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="lg:w-[70%] md:w-[100%] sm:w-[100%] h-[100%] flex flex-col justify-between">
                                    <div className="px-3">
                                        <div className="text-[38px] font-semibold flex justify-start">
                                            {course?.title}
                                        </div>
                                        <div className="text-lightSlateGray text-[14px] font-normal flex justify-start">
                                            {course?.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-between">
                                    <div className="flex flex-col md:flex-row items-start justify-start gap-2 sm:w-full lg:w-[60%] my-4 ml-3">
                                        <div className="bg-gray-400 flex items-center justify-center px-2 rounded h-[40px]">
                                            <FaBookOpen className="mr-2 text-[18px]" />
                                            <span className="text-[14px]">2 Course Included</span>
                                        </div>

                                        <div className="bg-gray-400 h-[40px] rounded flex items-center justify-center p-4 text-[14px]">
                                            Level: Basic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chapters List */}
                    <div className="flex flex-wrap gap-4 md:flex mb-5">
                        {filteredChapters.map((chapter) => (
                            <div
                                key={chapter.id}
                                className="bg-white shadow-md rounded-lg p-4 w-[100%] md:w-[25%] cursor-pointer"
                                onClick={() => navigate(`/chapter/${chapter.id}`)}
                            >
                                <img
                                    src={chapter.image}
                                    alt={chapter.title}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <h3 className="text-lg font-semibold">{chapter.title}</h3>
                                <p className="text-gray-600 text-sm">{chapter.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Component */}
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />

                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default CoursesandChapter;