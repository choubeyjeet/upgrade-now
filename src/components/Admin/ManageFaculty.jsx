import React, { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

const ManageFaculty = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const faculties = [
        { id: "F001", name: "John Doe", status: "Active", subject: "Mathematics", experience: "10 years", createdAt: "2024-03-01" },
        { id: "F002", name: "Jane Smith", status: "Pending", subject: "Physics", experience: "5 years", createdAt: "2024-02-15" },
        { id: "F003", name: "Emily Johnson", status: "Inactive", subject: "History", experience: "8 years", createdAt: "2023-12-10" },
    ];

    return (
        <div className="w-full bg-[#F5F5F5] flex justify-center items-center">
            <div className="px-5 mt-6 w-full max-w-6xl">
                <div className="p-6 border rounded-lg shadow-md bg-white">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-black font-bold text-[24px]">Manage Faculty</h3>
                    </div>

                    {/* Search & Filter Section */}
                    <div className="flex justify-between items-center mb-4 p-3 rounded-md">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search Faculty"
                                className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
                        </div>
                        <button className="ml-4 px-4 py-2 flex items-center gap-2 border border-gray-400 text-gray-500 font-semibold rounded-md hover:text-blue-500 hover:border-blue-500">
                            <FiFilter /> Filter
                        </button>
                    </div>

                    {/* Table (Large Screens) */}
                    <div className="hidden md:block overflow-hidden rounded-lg">
                        <table className="w-full border-collapse border border-gray-200 bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="p-3 text-left">ID</th>
                                    <th className="p-3 text-left">Faculty Name</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Subject Taught</th>
                                    <th className="p-3 text-left">Experience</th>
                                    <th className="p-3 text-left">Created At</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculties.map((faculty) => (
                                    <tr key={faculty.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{faculty.id}</td>
                                        <td className="p-3">{faculty.name}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${faculty.status === "Active" ? "bg-green-100 text-green-600" :
                                                faculty.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                                                }`}>
                                                {faculty.status}
                                            </span>
                                        </td>
                                        <td className="p-3">{faculty.subject}</td>
                                        <td className="p-3">{faculty.experience}</td>
                                        <td className="p-3">{faculty.createdAt}</td>
                                        <td className="px-2 py-4 flex justify-start gap-2 items-center">
                                            <CiEdit className="cursor-pointer text-gray-600 font-semibold text-[17px] hover:text-blue-500" />
                                            <FaRegEye className="cursor-pointer text-gray-600 font-semibold text-[17px] hover:text-blue-500" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card Layout (Small Screens) */}
                    <div className="md:hidden flex flex-col gap-4">
                        {faculties.map((faculty) => (
                            <div key={faculty.id} className="p-4 border rounded-lg shadow-md bg-white">
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-lg text-gray-800">{faculty.name}</h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${faculty.status === "Active" ? "bg-green-100 text-green-600" :
                                        faculty.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                                        }`}>
                                        {faculty.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">ID: {faculty.id}</p>
                                <p className="text-gray-600">Subject: {faculty.subject}</p>
                                <p className="text-gray-600">Experience: {faculty.experience}</p>
                                <p className="text-gray-600">Created At: {faculty.createdAt}</p>
                                <div className="mt-3 flex gap-3 text-gray-600">
                                    <CiEdit className="cursor-pointer text-lg hover:text-blue-500" />
                                    <FaRegEye className="cursor-pointer text-lg hover:text-blue-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageFaculty;
