import React from "react";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Adjust as needed
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        Previous
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          className={`px-4 py-2 border rounded ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white hover:bg-gray-200"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        Next
      </button>
    </div>
  );
}
