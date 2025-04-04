import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Utils/Pagination";
import { Outlet, useNavigate } from "react-router-dom";


const chaptersData = [
  {
    id: 1,
    title: "Introduction to Gravity",
    image:
      "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    image:
      "https://www.shutterstock.com/image-vector/hand-drawn-physic-formulas-science-260nw-2031660476.jpg",
    level: "Advanced",
  },
  {
    id: 3,
    title: "State Management in Quantum Physics",
    image:
      "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
    level: "Intermediate",
  },
  // Add more dummy data to test pagination
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    title: `Chapter ${i + 4}`,
    image:
      "https://cdn.mos.cms.futurecdn.net/jFaqrJF4ZpsL8u6iX4rtu7-1200-80.jpg",
    level: ["Beginner", "Intermediate", "Advanced"][i % 3],
  })),
];

export default function Playground() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [chapters, setChapters] = useState(chaptersData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setChapters(chapters.filter((chapter) => chapter.id !== id));
  };

  const filteredChapters = chapters.filter(
    (chapter) =>
      (filter === "All" || chapter.level === filter) &&
      chapter.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredChapters.length / itemsPerPage);
  const paginatedChapters = filteredChapters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Manage Course</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search chapters..."
          value={search}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <select
          value={filter}
          onChange={handleFilter}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedChapters.map((chapter) => (
          <div key={chapter.id} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => navigate(`course_id`)}>
            <img
              src={chapter.image}
              alt={chapter.title}
              className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer"
            />
            <h2 className="text-lg font-semibold">{chapter.title}</h2>
            <p className="text-gray-600">Level: {chapter.level}</p>
            <div className="flex justify-end gap-2 mt-4">
              <button className="p-2 text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(chapter.id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Outlet />
    </div>
  );
}
